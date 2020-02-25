import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//images 
import Main from 'assets/img/repair.png';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // background: "#FAFAFA",
        background: "#E7F7F6",
        width: "80%",
        margin: "auto",
        borderRadius: "20px",
        padding: "2rem",
        paddingBottom: "5rem",
        // marginBottom: "150px"
    },
    h1: {
        fontSize: "calc(2rem + (60 - 32) * ((100vw - 320px) / (1920 - 320)));",
        fontWeight: 600,
        fontFamily: "Montserrat"
    },
    features: {
        width: "96%",
        margin: "auto",
        height: "200px",
        // border: "1px solid black ",
        position: "relative ",
        bottom: "-200px",
        background: "#e6eef4",
        borderRadius: "15px",
    },
    phoneImage: {
        // backgroundImage: `url(${Main}) no-repeat center center`,
        // backgroundSize: "contain",
        // border: "2px solid black"
    },
    img: {
        // width: "50%",
        // height: "",
        ['@media (max-width:1350px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%',

        },
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%',

        }
    },
    gridItem1: {
        ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key

            order: 2
        }
    },
    whyUs: {
        marginTop: "5rem",
        fontFamily: "'Exo 2', sans-serif",
        fontSize: "1.4rem",
        textAlign: "left",
        marginLeft: "4rem",
        ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key

            marginLeft: "1rem",
            fontSize: "1.2rem",
        }
    },


}));
export default function MainSection() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={6}>

                <Grid className={classes.gridItem1} item xs={12} md={7} lg={6}>
                    <h1 className={classes.h1}>
                        Fiks Mobilen din på minutter
                    </h1>
                    <div className={classes.whyUs}>
                        <Grid container spacing={6}>
                            <Grid item xs={6} md={6}>
                                Best pris
                        </Grid>
                            <Grid item xs={6} md={6}>
                                2års garanti
                        </Grid>
                            <Grid item xs={6} md={6}>
                                Rask service
                        </Grid>
                            <Grid item xs={6} md={6}>
                                Gratis diagnose
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

