import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: "36px",
        fontFamily: "Montserrat",
        borderBottom: " 1px solid rgba(112, 112, 112, 0.12);",
        backgroundColor: "#28384C",
        color: "#FFFFFF",
        // height: "64px"

    },
    container: {
        margin: "auto"
    },
    brand: {
        fontSize: "2.5rem",
        color: "#00A99D",
        fontWeight: "900"
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
                                {/* <Grid item  xs={1} >
                            {props.text1_part2}
                        </Grid> */}

                                <Grid item xs={12} >
                                    {props.text2_part1}
                                </Grid>
                                {/* <Grid item  xs={1} >
                            {props.text2_part2}
                            
                            </Grid> */}
                            </Grid>
                        </Grid>
                    )}

            </Grid>
        </div>

    )
}
export default function Footer() {
    const classes = useStyles();
    const iClass = `material-icons white`
    return (
        <div className={classes.root}>
            <Grid container spacing={0} justify="center" alignContent="left">

                <Grid item xs={12} md={4} >
                    &#x24B8; Mobil Fikser AS Org.nr.&nbsp;922&nbsp;739&nbsp;765
                </Grid>

                <Grid item xs={12} md={4} >
                    <i class={iClass}>face</i>
                </Grid>
            </Grid>

        </div>
    )

}

