import React, { useState } from 'react';
import { Button, Grid, TextField, Typography, Divider, makeStyles } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import composeEmail from './composeEmail.js'
// my components
import DatePicker from './DatePicker.jsx'
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    form: {
        marginTop: "6em",
        marginBottom: "5em",
        width: "80%",
        margin: "auto",
        ['@media (max-width:1000px)']: {
            width: "100%",
        },
        ['@media (max-width:599px)']: {
            width: "90%",
            marginTop: "2em",
            marginBottom: "1em",
        }
    },
    textFeild: {
        width: "100%",
    },
    title: {
        textAlign: "left"
    },
    noteSpan: {
        fontSize: "1rem"
    },
    divider: {
        margin: "30px 0px"
    },
    submittBtn: {
        backgroundColor: "#00a99d",
        color: "#FFFFFF",
        width: "50%",
        marginTop: "2em",
        height: "3em",
        fontSize: "1.2rem",
        textTransform: "none",
        borderRadius: "20px",
        '&:hover': {
            background: "#00a99d",

        },
    },
    datePicker: {
        width: "100%"
    },

}));


const Times = [
    { id: 18, text: "18:00 - 19:00" },
    { id: 19, text: "19:00 - 20:00" },
]
const iPhones = [
    { id: 1, text: "iPhone 11 Pro Max" },
    { id: 2, text: "iPhone 11 Pro" },
    { id: 3, text: "iPhone 11" },
    { id: 4, text: "iPhone XS Max" },
    { id: 5, text: "iPhone XS" },
    { id: 6, text: "iPhone XR" },
    { id: 7, text: "iPhone X" },
    { id: 8, text: "iPhone 8 Plus" },
    { id: 9, text: "iPhone 8" },
    { id: 10, text: "iPhone 7 Plus" },
    { id: 11, text: "iPhone 7" },
    { id: 12, text: "iPhone 6S Plus" },
    { id: 13, text: "iPhone 6S" },
    { id: 14, text: "iPhone 6 Plus" },
    { id: 15, text: "iPhone 6" },
    { id: 16, text: "iPhone 5SE" },
    { id: 17, text: "iPhone 5S" },
    { id: 18, text: "iPhone 5C" },
    { id: 19, text: "iPhone 5" },
    { id: 20, text: "iPhone 4S" },
    { id: 21, text: "iPhone 4" },
]
const defects = [
    { id: 1, text: "Skjermbytte" },
    { id: 2, text: "Batteribytte" },
]


export default function MakeAppointmentForm(props) {
    const classes = useStyles();

    const [name, setName] = useState();
    const [address, setAddress] = useState({ streetNo: "", Zip: "", city: "" });
    const [email, setEmail] = useState();
    const [mobileNo, setMobileNo] = useState();
    const [phoneModel, setPhoneModel] = useState();
    const [service, setService] = useState();
    const todayDate = new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear()
    const [date, setDate] = useState(todayDate);
    const [time, setTime] = useState();

    const [validation, setvalidation] = useState({ name: null, streetNo: null, Zip: null, city: null, mobileNo: null, phoneModel: null, service: null, date: null, time: null, });
    const validationErrorMSG = "Vennligst fyll ut dette feltet"

    const sendMail = () => {
        if (!invalidForm()) {
            const mailDetails = composeEmail(name, address, email, mobileNo, phoneModel, service, null, null, date, time, 'appointment')
            const API_PATH = 'https://mobilland.no/api/send_mail.php';

            axios({
                method: 'post',
                url: `${API_PATH}`,
                headers: { 'content-type': 'application/json' },
                data: mailDetails
            })
                .then(result => { props.onDone(true) })
                .catch(error => { return (error) })
        }
        //TODO reset the form
    }
    const invalidForm = () => {
        //initial state 
        if (validation.name === null && validation.streetNo === null && validation.Zip === null && validation.city === null && validation.mobileNo === null && validation.phoneModel === null && validation.service === null && validation.date === null && validation.time === null) {
            setvalidation({ name: true, streetNo: true, Zip: true, city: true, mobileNo: true, phoneModel: true, service: true, date: false, time: true });
            return true
        }
        setvalidation({ name: !name, streetNo: !address.streetNo, Zip: !address.Zip, city: !address.city, mobileNo: !mobileNo, phoneModel: !phoneModel, service: !service, date: !date, time: !time });
        // return validation result 
        return (validation.name || validation.streetNo || validation.Zip || validation.city || validation.mobileNo || validation.phoneModel || validation.service || validation.date || validation.time)
    }
    const handelDateChange = (date) => {
        date ? setDate(date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()) : setDate(null)
    }
    const _spacing = (window.innerWidth < 600) ? 0 : 6
    return (
        <form className={classes.form} noValidate autoComplete="off">

            <Grid container spacing={_spacing}>
                {/* Om Mobil og feil */}
                <Grid container spacing={3}>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={12} >
                            <Typography variant="h5" component="h2" className={classes.title}>
                                Ønsket service og mobilmodell <span className={classes.noteSpan}>(kun iPhone)</span>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        {/*  Mobil Model */}
                        <Grid item xs={12} md={6} >
                            <Autocomplete
                                id="Model"
                                options={iPhones}
                                getOptionLabel={option => option.text}
                                renderInput={params => <TextField {...params} label="Modell" variant="outlined" fullWidth
                                    helperText={validation.phoneModel && validationErrorMSG}
                                    error={validation.phoneModel}
                                />}

                                onChange={(e, selectedDevice) => { setPhoneModel(selectedDevice ? selectedDevice.text : null); setvalidation({ ...validation, phoneModel: selectedDevice ? false : true }) }}
                            />
                        </Grid>
                        {/* Service */}
                        <Grid item xs={12} md={6} >
                            <Autocomplete
                                options={defects}
                                getOptionLabel={option => option.text}
                                renderInput={params => <TextField {...params} label="Service" variant="outlined" fullWidth
                                    helperText={validation.service && validationErrorMSG}
                                    error={validation.service}
                                />}
                                onChange={(e, selectedService) => { setService(selectedService ? selectedService.text : null); setvalidation({ ...validation, service: selectedService ? false : true }) }}
                            />
                        </Grid>

                    </Grid>
                </Grid>
                {/* Divider */}
                <Grid container spacing={3}>
                    <Divider className={classes.divider} />
                </Grid>
                {/* Kontaktinformasjon */}
                <Grid container spacing={3}>
                    <Grid container item xs={4} spacing={1}>
                        {/* Kontaktinformasjon */}
                        <Grid item xs={12} md={6} >
                            <Typography variant="h5" component="h2" className={classes.title}>
                                Kontaktinformasjon
                                </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        {/* Fullnavn */}
                        <Grid item xs={12} md={6} >
                            <TextField className={classes.textFeild} id="name" label="Fullt navn" variant="outlined"
                                helperText={validation.name && validationErrorMSG}
                                error={validation.name}
                                autoComplete="off"
                                onChange={(e) => { setName(e.target.value); setvalidation({ ...validation, name: e.target.value ? false : true }) }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        {/* Gate og husnummer */}
                        <Grid item xs={12} md={6} >
                            <TextField className={classes.textFeild} id="address" label="Gate og husnummer" variant="outlined"
                                helperText={validation.streetNo && validationErrorMSG}
                                error={validation.streetNo}
                                onChange={(e) => { setAddress({ ...address, streetNo: e.target.value }); setvalidation({ ...validation, streetNo: e.target.value ? false : true }) }}

                            />
                        </Grid>
                        {/* Postnummer */}
                        <Grid item xs={12} md={6} >
                            <TextField className={classes.textFeild} id="Postnummer" label="Postnummer" variant="outlined"
                                helperText={validation.Zip && validationErrorMSG}
                                error={validation.Zip}
                                onChange={(e) => { console.log(e.target.value); setAddress({ ...address, Zip: e.target.value }); setvalidation({ ...validation, Zip: (e.target.value ? false : true) }) }}
                            />
                        </Grid>
                        {/* Sted */}
                        <Grid item xs={12} md={6} >
                            <TextField className={classes.textFeild} id="Sted" label="Sted" variant="outlined"
                                helperText={validation.city && validationErrorMSG}
                                error={validation.city}
                                onChange={(e) => { setAddress({ ...address, city: e.target.value }); setvalidation({ ...validation, city: (e.target.value ? false : true) }) }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        {/* E-post */}
                        <Grid item xs={12} md={6}  >
                            <TextField className={classes.textFeild} id="email" label="E-post" variant="outlined"
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </Grid>
                        { /* Mobilnummer */}
                        <Grid item xs={12} md={6}  >
                            <TextField className={classes.textFeild} id="mobil" label="Mobilnummer" variant="outlined"
                                helperText={validation.mobileNo && validationErrorMSG}
                                error={validation.mobileNo}
                                onChange={(e) => { setMobileNo(e.target.value); setvalidation({ ...validation, mobileNo: e.target.value ? false : true }) }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                {/* Divider */}
                <Grid container spacing={3}>
                    <Divider className={classes.divider} />
                </Grid>
                {/* Date and Time*/}
                <Grid container spacing={3}>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={12} md={6} >
                            <Typography variant="h5" component="h2" className={classes.title}>
                                Dato og tidspunkt
                                </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        {/* Date */}
                        <Grid item xs={12} md={6} >
                            <DatePicker change={handelDateChange} />
                        </Grid>
                        {/* Time */}
                        <Grid item xs={12} md={6} >
                            <Autocomplete
                                id="timePicker"
                                options={Times}
                                getOptionLabel={option => option.text}
                                renderInput={params => <TextField {...params} label="Tidspunkt" variant="outlined" fullWidth
                                    helperText={validation.time && validationErrorMSG}
                                    error={validation.time}
                                />}
                                onChange={(e, time) => { setTime(time ? time.text : ''); setvalidation({ ...validation, time: time ? false : true }) }}

                            />
                        </Grid>
                    </Grid>
                </Grid>
                {/* Bestill */}
                <Grid container spacing={3} justify="center">
                    <Button className={classes.submittBtn} variant="contained" disableElevation
                        onClick={sendMail}
                    >
                        Bestill
                        </Button>
                </Grid>

            </Grid>
        </form>

    );
}




