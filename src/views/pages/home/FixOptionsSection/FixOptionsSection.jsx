import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Section from 'components/Section/Section.js'

//Images
import DropInImage from 'assets/img/dropIn.jpg'
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
        fontSize: "1.5rem",
        textAlign: "center",
        paddingBottom: "2rem",
        fontFamily: "'Exo 2', sans-serif"

    },
    desc: {
        fontSize: "1.2rem",
        lineHeight: "1.6",
        textAlign: "left",
        lineHeight: "1.8",
        textAlign: "justify",
        fontFamily: "'Exo 2', sans-serif"

    },
    mediaCard: {
        height: "100%",
        minHeight: "50%",
        backgroundSize: "cover",
    }


}));




export default function FixOptionsSection(props) {
    const classes = useStyles();
    // const { title, titlespan, titleSpanColor, desc, btnLable, img, left } = props
    // const [showForm, setShowForm] = useState(false)
    return (
        <div>
            <Section title="Hordan skal jeg levere mobilen? ">

                <Grid container spacing={0} className={classes.card}>
                    <Grid item xs={12} md={6} className={classes.textPart}>
                        <Typography variant="h5" component="h2" className={classes.title}>
                            Drop-in
                        </Typography>

                        <Typography variant="body2" component="p" className={classes.desc}>
                            Det er opp til deg om du vil bestille time eller nei. Du trenger ikke vanligvis å bestille time! Men om du vil at vi beholder en tid for deg bare å bestille time.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CardMedia
                            className={classes.mediaCard}
                            image={DropInImage}
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
                    </Grid>
                </Grid>





            </Section>
        </div>
    );
}




