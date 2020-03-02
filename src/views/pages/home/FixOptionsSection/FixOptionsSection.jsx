import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, Button, Typography, Grid } from '@material-ui/core';
// my components
import Section from 'components/Section/Section.js'
import MakeAppointmentForm from './MakeAppointmentForm.jsx'
import SendDeviceForm from './SendDeviceForm.jsx'
//Images
import WeComeToYouImage from 'assets/img/we_come_to_you.jpg'
import PostenImage from 'assets/img/posten.jpg'


const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    card: {
        marginBottom: "5rem",
        backgroundColor: "none",
        ['@media (max-width:599px)']: {
            marginBottom: "2rem",
        }
    },
    textPart: {
        backgroundColor: "#E7F7F6",
        padding: "54px",
        ['@media (max-width:599px)']: {
            padding: "16px",
            order: 2

        }
    },
    title: {
        fontSize: "1.7rem",
        textAlign: "center",
        paddingBottom: "1em",
        fontFamily: "'Work Sans', sans-serif",
        ['@media (max-width:599px)']: {
            fontSize: "1.3rem",
            textAlign: "center",
            paddingBottom: ".5em",
        }
    },
    desc: {
        fontSize: "1.1rem",
        lineHeight: "1.6",
        textAlign: "left",
        lineHeight: "1.8",
        fontFamily: "'Work Sans', sans-serif",
        ['@media (max-width:599px)']: {
            fontSize: ".9rem",
            textAlign: "left",
        }
    },
    btn: {
        marginTop: "2em",
        color: "#00a99d",
        fontSize: "1.4rem",
        padding: "0.3em 1em",
        textTransform: "none",
        ['@media (max-width:599px)']: {
            marginTop: ".5em",

        }
    },
    mediaCard: {
        height: "100%",
        minHeight: "50%",
        backgroundSize: "cover",
        ['@media (max-width:599px)']: {
            height: "50vw",
        }
    },

    form: {
        order: 3
    },
}));


const MyButton = (props) => {
    const classes = useStyles();
    return (
        <Button disableElevation
            size="large"
            className={classes.btn}
            endIcon={<i className="material-icons md-36">keyboard_arrow_right</i>}
            onClick={props.onClick}
        >
            {props.text}
        </Button>
    )
}

export default function FixOptionsSection(props) {
    const classes = useStyles();
    const [showAppointmentForm, setShowAppointmentForm] = useState(false)
    const [showSendDeviceForm, setShowSendDeviceForm] = useState(false)
    const appointmentFormRef = useRef();
    const sendDeviceFormRef = useRef();
    useEffect(() => {
        if (appointmentFormRef.current)
            appointmentFormRef.current.scrollIntoView()
    }, [showAppointmentForm])

    useEffect(() => {
        if (sendDeviceFormRef.current)
            sendDeviceFormRef.current.scrollIntoView()
    }, [showSendDeviceForm])
    return (
        <Section title="Har du ikke mulighet til å komme til oss? ">
            {/* ///////////////////////We come to you ///////////////////////////// */}
            <Grid container spacing={0} className={classes.card}>
                <Grid item xs={12} lg={7} xl={6} className={classes.textPart}>
                    <Typography variant="h5" component="h2" className={classes.title}>
                        Vi kommer til deg
                        </Typography>
                    <Typography variant="body2" component="p" className={classes.desc}>
                        Vi kan sende en tekniker til deg for skjermbytting av iPhone. Du slipper du å tenke på parkering rundt i byen, i tillegg til at du sparer tid for å gjøre andre ting mens teknikeren reparerer mobilen din. Vi operer foreløpig kun innenfor Bergen. Tjenesten gjelder kun for skjerm eller batteri på iphone når du forhåndsbestiller timen. Hvis du kansellerer senest kl. 12 dagen før avtaletidspunktet vil hele beløpet bli refundert.
                        </Typography>
                    <MyButton text="Bestill time"
                        onClick={() => { setShowAppointmentForm(true) }
                        } />
                </Grid>
                <Grid item xs={12} lg={5} xl={6}>
                    <CardMedia
                        className={classes.mediaCard}
                        image={WeComeToYouImage}
                    />
                </Grid>

                {showAppointmentForm ? (
                    <Grid item xs={12} className={classes.form}>
                        <div ref={appointmentFormRef}>
                            <MakeAppointmentForm />
                        </div>
                    </Grid>
                ) : (
                        <div></div>
                    )}


            </Grid>
            {/* ////////////////////////send your device via post//////////////////////////// */}
            <Grid container spacing={0} className={classes.card}>

                <Grid item xs={12} md={6}>
                    <CardMedia
                        className={classes.mediaCard}
                        image={PostenImage}
                    />
                </Grid>

                <Grid item xs={12} md={6} className={classes.textPart}>
                    <Typography variant="h5" component="h2" className={classes.title}>
                        Send din enhet på Posten
                        </Typography>

                    <Typography variant="body2" component="p" className={classes.desc}>
                        Hvis du har problemer med din telefon/tablet eller pc kan du sende den til oss for sjekk eller reparere, Når enheten skal returneres, bruker vi Bring til vanlig og det koster ca. 150 med sporing. Vi kan sende den med brevpakka men med kundens ansvar Du kan bare fylle ut vårt kontaktskjema.
                        </Typography>
                    <MyButton text="Fyll ut kontaktskjema" onClick={() => { setShowSendDeviceForm(true) }} />
                </Grid>
                {showSendDeviceForm ? (
                    <Grid item xs={12} className={classes.form}>
                        <div ref={sendDeviceFormRef}>
                            <SendDeviceForm />
                        </div>
                    </Grid>
                ) : (
                        <div></div>
                    )}
            </Grid>
        </Section>
    );
}




