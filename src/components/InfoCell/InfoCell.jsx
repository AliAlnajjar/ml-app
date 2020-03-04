import React from 'react';
import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    infoCell: {
        fontSize: "18px",
        ['@media (min-width:600px)']: {
            fontSize: "22px",

        },
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

export default function InfoCell(props) {
    const classes = useStyles();
    const iClass = `material-icons ${props.iconFontSize + " " + props.iconColor}`
    return (
        <div className={classes.infoCell}>
            <Grid container spacing={0}>
                <Grid item md={2} className={classes.infoCell_icon}>
                    <i class={iClass}>{props.iconName}</i>
                </Grid>
                {!props.twoLines ? (
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

