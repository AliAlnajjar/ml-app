import React from 'react';
import Grid from '@material-ui/core/Grid';

import InfoCell from 'components/InfoCell/InfoCell.jsx'
import { makeStyles } from '@material-ui/core/styles';



//images 
import Main from 'assets/img/repair.png';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        background: "#E7F7F6",
        width: "80%",
        margin: "auto",
        borderRadius: "20px",
        padding: "1rem",
        paddingBottom: "3rem",
        ['@media (max-width:599px)']: {
            width: "94%",
            margin: "auto",
            borderRadius: 0,
            padding: ".5rem",
        },
    },
    h1: {
        fontSize: "calc(2rem + (60 - 32) * ((100vw - 320px) / (1920 - 320)));",
        fontWeight: 600,
        fontFamily: "Montserrat",
        ['@media (max-width:599px)']: {
            margin: "0 auto",
        },
    },
    features: {
        width: "96%",
        margin: "auto",
        height: "200px",
        position: "relative ",
        bottom: "-200px",
        background: "#e6eef4",
        borderRadius: "15px",
    },
    img: {
        ['@media (max-width:1350px)']: {
            width: '100%',

        },
        ['@media (max-width:780px)']: {
            width: '100%',

        }
    },
    gridItem1: {
        ['@media (max-width:960px)']: {

            order: 2
        }
    },
    whyUs: {
        marginTop: "5rem",
        fontFamily: "'Exo 2', sans-serif",
        fontSize: "1.4rem",
        textAlign: "left",
        marginLeft: "4rem",
        ['@media (max-width:960px)']: {
            marginLeft: "1rem",
            fontSize: "1.2rem",
        },
        ['@media (max-width:599px)']: {
            margin: ".5rem",
            marginTop: "1rem",
            fontSize: "1rem",
        }
    },
    icon:{

    },


}));
export default function MainSection() {
    const classes = useStyles();
    const iClass = `material-icons md-36`

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>

                <Grid className={classes.gridItem1} item xs={12} md={7} lg={6}>
                    <h1 className={classes.h1}>
                        Fiks Mobilen din på minutter
                    </h1>
                    <div className={classes.whyUs}>
                        <Grid container spacing={0}>
                            <Grid item xs={6} md={6}>
                            
                            <InfoCell
                                text="Best pris"
                                iconName="arrow_forward"
                                iconColor="purple"
                                iconFontSize="md-36"
                            ></InfoCell>
                            </Grid>
                            <Grid item xs={6} md={6}>
                            <InfoCell
                                text="2års garanti"
                                iconName="arrow_forward"
                                iconColor="purple"
                                iconFontSize="md-36"
                            ></InfoCell>
                                
                            </Grid>
                            <Grid item xs={6} md={6}>
                            <InfoCell
                                text="Rask service"
                                iconName="arrow_forward"
                                iconColor="purple"
                                iconFontSize="md-36"
                            ></InfoCell>
                            </Grid>
                            <Grid item xs={6} md={6}>
                            <InfoCell
                                text="Gratis diagnose"
                                iconName="arrow_forward"
                                iconColor="purple"
                                iconFontSize="md-36"
                            ></InfoCell>
                            </Grid>
                        </Grid>
                    </div>

                </Grid>
                <Grid item xs={12} md={5} lg={6}>
                    <div className={classes.phoneImage}>  <img src={Main} alt="Main" className={classes.img} ></img></div>
                </Grid>

            </Grid>
            {/* <div className={classes.features}>

            </div> */}
        </div>
    )

}

