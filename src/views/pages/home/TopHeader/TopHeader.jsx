import React from 'react';
import { Grid, Hidden } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        padding: "16px",
        fontFamily: "Montserrat",
        borderBottom: " 1px solid rgba(112, 112, 112, 0.12);",
        marginBottom: "8px",
        ['@media (max-width:599px)']: {
            marginBottom: 0,
        },
    },
    brand: {
        fontSize: "2.5rem",
        color: "#00A99D",
        fontWeight: "900",
        ['@media (max-width:599px)']: {
            fontSize: "1.5rem",

        },
    },
    infoCell: {
        fontSize: "16px"
    },
    infoCell_text: {
        textAlign: "left",
        paddingTop: "6px",
        paddingLeft: "4px"
    },
    infoCell_text_location: {
        textAlign: "left",
        paddingLeft: "4px",
    },
    infoCell_icon: {
        textAlign: "right",
    }
}));

const InfoCell = (props) => {
    const classes = useStyles();
    const iClass = `material-icons md-36 ${props.iconColor}`
    return (
        <div className={classes.infoCell}>
            <Grid container spacing={0}>
                <Grid item md={2} className={classes.infoCell_icon}>
                    <i class={iClass}>{props.iconName}</i>
                </Grid>
                {!props.location ? (
                    <Grid item md={10} className={classes.infoCell_text}>
                        {props.text}
                    </Grid>
                ) : (
                        <Grid item md={10} className={classes.infoCell_text_location}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} >
                                    {props.text1_part1}
                                </Grid>
                                <Grid item xs={12} >
                                    {props.text2_part1}
                                </Grid>
                            </Grid>
                        </Grid>
                    )}
            </Grid>
        </div>
    )
}
export default function TopHeader() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2} justify="center">
                <Grid item xs={12} md={4} >
                    <div className={classes.brand}>
                        Mobilland
                    </div>
                </Grid>

                <Hidden smDown >
                    <Grid item xs={12} md={2} >
                        <InfoCell
                            text="409 81 521"
                            iconName="phone"
                            iconColor="green"
                        ></InfoCell>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <InfoCell
                            text="Solheimsgaten 33"
                            iconName="location_on"
                            iconColor="green"
                        ></InfoCell>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InfoCell
                            location={true}
                            text1_part1="man-fre&nbsp;&nbsp;11:00 - 18:00"
                            text2_part1="lørdag&nbsp;&nbsp;&nbsp;&nbsp; 12:00 - 18:00"
                            iconName="access_time"
                            iconColor="green"
                        ></InfoCell>
                    </Grid>
                </Hidden>
            </Grid>
        </div>
    )

}

