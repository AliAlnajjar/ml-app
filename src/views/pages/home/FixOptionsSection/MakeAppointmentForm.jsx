import React from 'react';
import { Button, Grid, TextField, Typography, Divider, makeStyles } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

// my components
import DatePicker from './DatePicker.jsx'

const useStyles = makeStyles(theme => ({
    form: {
        marginTop: "6em",
        marginBottom: "5em",
        width: "80%",
        margin: "auto",
        ['@media (max-width:1000px)']: { // eslint-disable-line no-useless-computed-key
            width: "100%",
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
    return (
        <form className={classes.form} noValidate autoComplete="off">

            <Grid container spacing={6}>

                {/* Feil på mobil */}
                <Grid container spacing={3}>
                    <Grid container item xs={6} spacing={1}>
                        {/* Om Mobil og feil */}
                        <Grid item xs={12} >
                            <Typography variant="h5" component="h2" className={classes.title}>
                                Ønsket service og mobilmodell <span className={classes.noteSpan}>(kun iPhone)</span>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={12} md={6} >
                            {/* <FormControl  component="fieldset" margin="none"  fullWidth={true}> */}
                            <Autocomplete
                                id="timePicker"
                                options={iPhones}
                                getOptionLabel={option => option.text}
                                renderInput={params => <TextField {...params} label="Modell" variant="outlined" fullWidth />}
                            />
                            {/* </FormControl> */}
                        </Grid>
                        {/* modell */}
                        <Grid item xs={12} md={6} >
                            <Autocomplete
                                id="timePicker"
                                options={defects}
                                getOptionLabel={option => option.text}
                                renderInput={params => <TextField {...params} label="Service" variant="outlined" fullWidth />}
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
                            <TextField className={classes.textFeild} id="name" label="Fullnavn" variant="outlined" />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        {/* Gate og husnummer */}
                        <Grid item xs={12} md={6} >
                            <TextField className={classes.textFeild} id="address" label="Gate og husnummer" variant="outlined" />
                        </Grid>
                        {/* Postnummer */}
                        <Grid item xs={12} md={6} >
                            <TextField className={classes.textFeild} id="Postnummer" label="Postnummer" variant="outlined" />
                        </Grid>
                        {/* Sted */}
                        <Grid item xs={12} md={6} >
                            <TextField className={classes.textFeild} id="Sted" label="Sted" variant="outlined" />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        {/* E-post */}
                        <Grid item xs={12} md={6}  >
                            <TextField className={classes.textFeild} id="email" label="E-post" variant="outlined" />
                        </Grid>
                        { /* Mobilnummer */}
                        <Grid item xs={12} md={6}  >
                            <TextField className={classes.textFeild} id="mobil" label="Mobilnummer" variant="outlined" />
                        </Grid>
                    </Grid>
                </Grid>
                {/* Divider */}
                <Grid container spacing={3}>
                    <Divider className={classes.divider} />
                </Grid>


                {/* Dato*/}
                <Grid container spacing={3}>
                    <Grid container item xs={6} spacing={1}>
                        {/* Om Mobil og feil */}
                        <Grid item xs={12} md={6} >
                            <Typography variant="h5" component="h2" className={classes.title}>
                                Dato og tidspunkt
                                </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        {/* modell */}
                        <Grid item xs={12} md={6} >
                            <DatePicker />
                        </Grid>
                        <Grid item xs={12} md={6} >
                            {/* <FormControl  component="fieldset" margin="none"  fullWidth={true}> */}
                            <Autocomplete
                                id="timePicker"
                                options={Times}
                                getOptionLabel={option => option.text}
                                renderInput={params => <TextField {...params} label="Tidspunkt" variant="outlined" fullWidth />}
                            />
                            {/* </FormControl> */}
                        </Grid>
                    </Grid>
                </Grid>



                {/* Bestill */}
                <Grid container spacing={3} justify="center">
                    <Button className={classes.submittBtn} variant="contained" disableElevation>
                        Bestill
                        </Button>
                </Grid>

            </Grid>
        </form>

    );
}




