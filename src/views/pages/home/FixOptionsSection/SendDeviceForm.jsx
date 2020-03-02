import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, TextField, Typography, Divider } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import emailjs from 'emailjs-com'
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
    // const handelClick = (formRef)=>{window.scrollTo(0,formRef.current.offsetTop)}
    const [name, setName] = useState();
    const [address, setAddress] = useState({ streetNo: "", Zip: "", city: "" });
    const [email, setEmail] = useState();
    const [mobileNo, setMobileNo] = useState();
    const [phoneModel, setPhoneModel] = useState();
    const [service, setService] = useState();
    const [desc, setDesc] = useState();
    const [passCode, setPassCode] = useState();



    const sendEmail = () => {
        let templateParams = {
            from_name: email,
            to_name: 'ali_alnajjar@live.com',
            subject: "send device via posten",
            message_html: desc,
        }
        emailjs.send(
            'outlook',
            'template_Vg0MIkae',
            templateParams,
            'user_vnnhMCDrj0x5gHEurLkQ6'
        )
    }
    const _spacing = (window.innerWidth < 600) ? 0 : 6
    return (
        <form className={classes.form} noValidate autoComplete="off">
            <Grid container spacing={_spacing}>
                {/* Kontaktinformasjon */}
                <Grid container spacing={3}>
                    <Grid container item xs={12} spacing={1}>
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
                            <TextField className={classes.textFeild} id="name" label="Fullnavn" variant="outlined"
                                onChange={(e) => { setName(e.target.value) }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        {/* Gate og husnummer */}
                        <Grid item xs={12} md={6} >
                            <TextField className={classes.textFeild} id="address" label="Gate og husnummer" variant="outlined"
                                onChange={(e) => { setAddress({ ...address, streetNo: e.target.value }) }}
                            />
                        </Grid>
                        {/* Postnummer */}
                        <Grid item xs={12} md={6} >
                            <TextField className={classes.textFeild} id="Postnummer" label="Postnummer" variant="outlined"
                                onChange={(e) => { setAddress({ ...address, Zip: e.target.value }) }}
                            />
                        </Grid>
                        {/* Sted */}
                        <Grid item xs={12} md={6} >
                            <TextField className={classes.textFeild} id="Sted" label="Sted" variant="outlined"
                                onChange={(e) => { setAddress({ ...address, city: e.target.value }) }}
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
                                onChange={(e) => { setMobileNo(e.target.value) }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                {/* Divider */}
                <Grid container spacing={3}>
                    <Divider className={classes.divider} />
                </Grid>


                {/* Om mobil */}
                <Grid container spacing={3}>
                    <Grid container item xs={12} spacing={1}>
                        {/* Om Mobil og feil */}
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
                                renderInput={params => <TextField {...params} label="Modell" variant="outlined" fullWidth />}
                                onChange={(e, selectedDevice) => { setPhoneModel(selectedDevice.text) }}

                            />
                        </Grid>
                        {/* modell */}
                        <Grid item xs={12} md={6} >
                            <Autocomplete
                                options={defects}
                                getOptionLabel={option => option.text}
                                renderInput={params => <TextField {...params} label="Service" variant="outlined" fullWidth />}
                                onChange={(e, selectedService) => { setService(selectedService.text) }}
                            />
                        </Grid>

                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        {/* feil beskrivelse */}
                        <Grid item xs={12} >
                            <TextField className={classes.textFeild} id="feil_beskrivelse" label="Feil beskrivelse" variant="outlined" multiline rows="6"
                                onChange={(e) => { setDesc(e.target.value) }}
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
                    <Button className={classes.submittBtn} variant="contained" disableElevation
                        onClick={sendEmail}
                    >
                        Send skjema
                        </Button>
                </Grid>
            </Grid>
        </form>
    );
}




