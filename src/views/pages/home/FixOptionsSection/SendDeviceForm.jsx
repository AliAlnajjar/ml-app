import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, TextField, Typography, Divider } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import composeEmail from './composeEmail.js';
import axios from 'axios'

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
    { id: 3, text: "Ladeportbytte" },
    { id: 4, text: "Hovedkamerabytte" },
    { id: 5, text: "Bakglassbytte" },
    { id: 6, text: "Frontkamerabytte" },
]
const useStyles = makeStyles(theme => ({
    form: {
        marginTop: "6em",
        width: "80%",
        margin: "auto",
        ['@media (max-width:1000px)']: { // eslint-disable-line no-useless-computed-key
            width: "100%",
        },
        ['@media (max-width:1000px)']: { // eslint-disable-line no-useless-computed-key
            width: "90%",
            marginTop: "2em",
            marginbottom: "1em",
        }
    },
    textFeild: {
        width: "100%",
    },
    divider: {
        margin: "30px 0px"
    },
    title: {
        textAlign: "left"
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
    }

}));

export default function SendDeviceForm(props) {
    const classes = useStyles();

    const [name, setName] = useState();
    const [address, setAddress] = useState({ streetNo: "", Zip: "", city: "" });
    const [email, setEmail] = useState();
    const [mobileNo, setMobileNo] = useState();
    const [phoneModel, setPhoneModel] = useState();
    const [service, setService] = useState();
    const [desc, setDesc] = useState();
    const [passCode, setPassCode] = useState();

    const [validation, setValidation] = useState({ name: null, streetNo: null, Zip: null, city: null, mobileNo: null, phoneModel: null, service: null, desc: null });
    const validationErrorMSG = "Vennligst fyll ut dette feltet"
    const sendMail = () => {
        if (!invalidForm()) {
            const mailDetails = composeEmail(name, address, email, mobileNo, phoneModel, service, desc, passCode, 'sendDevice')
            const API_PATH = 'https://mobilland.no/api/send_mail.php';
            axios({
                method: 'post',
                url: `${API_PATH}`,
                headers: { 'content-type': 'application/json' },
                data: mailDetails
            })
                .then(result => { props.onDone(true) })
                .catch(error => { props.onDone(true) })

        }

    }
    const invalidForm = () => {
        // initial state 
        if (validation.name === null || validation.streetNo === null || validation.Zip === null || validation.city === null || validation.mobileNo === null || validation.phoneModel === null || validation.service === null || validation.desc === null) {
            setValidation({ name: true, streetNo: true, Zip: true, city: true, mobileNo: true, phoneModel: true, service: true, desc: true });
            return true;
        }
        // validate 
        setValidation({ name: !name, streetNo: !address.streetNo, Zip: !address.Zip, city: !address.city, mobileNo: !mobileNo, phoneModel: !phoneModel, service: !service, desc: !desc });
        // return validation result 
        return (validation.name || validation.streetNo || validation.Zip || validation.city || validation.mobileNo || validation.phoneModel || validation.service || validation.desc)

    }
    const _spacing = (window.innerWidth < 600) ? 0 : 6
    return (
        <form className={classes.form} noValidate autoComplete="off">
            <Grid container spacing={_spacing}>
                {/* Kontaktinformasjon */}
                <Grid container spacing={3}>
                    <Grid container item xs={12} spacing={1}>
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
                                required={true}
                                helperText={validation.name && validationErrorMSG}
                                error={validation.name}
                                onChange={(e) => { setName(e.target.value); setValidation({ ...validation, name: (e.target.value ? false : true) }) }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        {/* Gate og husnummer */}
                        <Grid item xs={12} md={6} >
                            <TextField className={classes.textFeild} id="address" label="Gate og husnummer" variant="outlined"
                                required={true}
                                helperText={validation.streetNo && validationErrorMSG}
                                error={validation.streetNo}
                                onChange={(e) => { setAddress({ ...address, streetNo: e.target.value }); setValidation({ ...validation, streetNo: (e.target.value ? false : true) }) }}
                            />
                        </Grid>
                        {/* Postnummer */}
                        <Grid item xs={12} md={6} >
                            <TextField className={classes.textFeild} id="Postnummer" label="Postnummer" variant="outlined"
                                required={true}
                                helperText={validation.Zip && validationErrorMSG}
                                error={validation.Zip}
                                onChange={(e) => { setAddress({ ...address, Zip: e.target.value }); setValidation({ ...validation, Zip: (e.target.value ? false : true) }) }}
                            />
                        </Grid>
                        {/* Sted */}
                        <Grid item xs={12} md={6} >
                            <TextField className={classes.textFeild} id="Sted" label="Sted" variant="outlined"
                                required={true}
                                helperText={validation.city && validationErrorMSG}
                                error={validation.city}
                                onChange={(e) => { setAddress({ ...address, city: e.target.value }); setValidation({ ...validation, city: (e.target.value ? false : true) }) }}
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
                                required={true}
                                helperText={validation.mobileNo && validationErrorMSG}
                                error={validation.mobileNo}
                                onChange={(e) => { setMobileNo(e.target.value); setValidation({ ...validation, mobileNo: (e.target.value ? false : true) }) }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                {/* Divider */}
                <Grid container spacing={3}>
                    <Divider className={classes.divider} />
                </Grid>
                {/* Om Mobil og feil */}
                <Grid container spacing={3}>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={12} md={6} >
                            <Typography variant="h5" component="h2" className={classes.title}>
                                Om mobilen
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        {/* modell */}
                        <Grid item xs={12} md={6} >
                            <Autocomplete
                                options={iPhones}
                                getOptionLabel={option => option.text}
                                renderInput={params => <TextField {...params} label="Modell" variant="outlined" fullWidth
                                    // required={true}
                                    helperText={validation.phoneModel && validationErrorMSG}
                                    error={validation.phoneModel}
                                />}
                                onChange={(e, selectedDevice) => { setPhoneModel(selectedDevice ? selectedDevice.text : null); setValidation({ ...validation, phoneModel: (selectedDevice ? false : true) }) }}
                            />
                        </Grid>
                        {/* service */}
                        <Grid item xs={12} md={6} >
                            <Autocomplete
                                options={defects}
                                getOptionLabel={option => option.text}
                                renderInput={params => <TextField {...params} label="Service" variant="outlined" fullWidth
                                    // required={true}
                                    helperText={validation.service && validationErrorMSG}
                                    error={validation.service}
                                />}
                                onChange={(e, selectedService) => { setService(selectedService ? selectedService.text : null); setValidation({ ...validation, service: (selectedService ? false : true) }) }}
                            />
                        </Grid>

                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        {/* feil beskrivelse */}
                        <Grid item xs={12} >
                            <TextField className={classes.textFeild} id="feil_beskrivelse" label="Feil beskrivelse" variant="outlined" multiline rows="6"
                                required={true}
                                helperText={validation.desc && validationErrorMSG}
                                error={validation.desc}
                                onChange={(e) => { setDesc(e.target.value); setValidation({ ...validation, desc: (e.target.value ? false : true) }) }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        { /* Skjermkode */}
                        <Grid item xs={12}>
                            <TextField className={classes.textFeild} id="Skjermkode" label="Skjermkode" variant="outlined"
                                onChange={(e) => { setPassCode(e.target.value) }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                {/* Send skjema */}
                <Grid container spacing={3} justify="center">
                    <Button className={classes.submittBtn} variant="contained" disableElevation onClick={sendMail}>
                        Send skjema
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}




