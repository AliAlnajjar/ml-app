import React from 'react';
import Section from "components/Section/Section.js"

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#00A99D",
        width: "100%"
    },
    section: {
        width: "100hv",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        fontSize: "1.5em",
        color: "#FFF",
        backgroundColor: "#00A99D"


    },
    span: {
        fontSize: "2em",
        color: "#FFF",
    },
}));

export default function OffersSection() {
    const classes = useStyles();

    return (
        <Section className={classes.section} title={"Our Offers"}>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={0} className={classes.paper}>
                            <span className={classes.span}>30%</span> on all apple accessories.

                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={0} className={classes.paper}>
                            Recommend us to a friend and get  <span className={classes.span}>35%</span>
                        </Paper>
                    </Grid>

                </Grid>
            </div>
        </Section>
    );
}


