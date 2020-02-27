import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Section from 'components/Section/Section.js'

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
        marginBottom: "8rem",
        backgroundColor: "none"
    },
    textPart: {
        backgroundColor: "#E7F7F6",
        padding: "54px",

    },
    title: {
        fontSize: "1.7rem",
        textAlign: "center",
        paddingBottom: "1em",
        fontFamily: "'Work Sans', sans-serif"

    },
    desc: {
        fontSize: "1.1rem",
        lineHeight: "1.6",
        textAlign: "left",
        lineHeight: "1.8",
        textAlign: "justify",
        fontFamily: "'Work Sans', sans-serif"

    },
    btn: {
        marginTop: "2em",
        // color: "#28384C",
        color: "#00a99d",
        fontSize: "1.4rem",
        // backgroundColor: "#28384C",
        padding: "0.3em 1em",
        textTransform: "none"
    },
    mediaCard: {
        height: "100%",
        minHeight: "50%",
        backgroundSize: "cover",
    }


}));


const MyButton = (props) => {
    const classes = useStyles();
    return (
        <Button disableElevation
            size="large"
            className={classes.btn}
            endIcon={<i className="material-icons md-36">keyboard_arrow_right</i>}
        >
            {props.text}
        </Button>
    )
}

export default function FixOptionsSection(props) {
    const classes = useStyles();
    // const { title, titlespan, titleSpanColor, desc, btnLable, img, left } = props
    // const [showForm, setShowForm] = useState(false)
    return (
        <div>
            <Section title="Har du ikke mulighet til å komme til oss? ">

                <Grid container spacing={0} className={classes.card}>
                    <Grid item xs={12} lg={7} xl={6} className={classes.textPart}>
                        <Typography variant="h5" component="h2" className={classes.title}>
                            Vi kommer til deg
                        </Typography>

                        <Typography variant="body2" component="p" className={classes.desc}>
                            Vi kan sende en tekniker til deg for skjermbytting av iPhone. Du slipper du å tenke på parkering rundt i byen, i tillegg til at du sparer tid for å gjøre andre ting mens teknikeren reparerer mobilen din. Vi operer foreløpig kun innenfor Bergen. Tjenesten gjelder kun for skjerm eller batteri på iphone når du forhåndsbestiller timen. Hvis du kansellerer senest kl. 12 dagen før avtaletidspunktet vil hele beløpet bli refundert.
                        </Typography>
                        <MyButton text="Bestill time" />
                    </Grid>
                    <Grid item xs={12} lg={5} xl={6}>
                        <CardMedia
                            className={classes.mediaCard}
                            image={WeComeToYouImage}
                        />
                    </Grid>
                </Grid>
                {/* //////////////////////////////////////////////////// */}
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
                        <MyButton text="Fyll ut kontakt skjema" />
                    </Grid>
                </Grid>





            </Section>
        </div>
    );
}




