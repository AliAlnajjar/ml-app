import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Section from 'components/Section/Section.js'


import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: "1000px",
        margin: "auto",
    },
    heading: {
        textAlign: "left",
        fontSize: "1.4rem",
        fontFamily: "'Work Sans', sans-serif",
    },
    color_green:{
        color : "#00A99D"
    },
    answer: {
        fontSize: theme.typography.pxToRem(18),
        textAlign: "left",
        fontFamily: "'Work Sans', sans-serif",
    },
}));

const MyExpansionPanel = (props) => {
    const classes = useStyles();
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{props.question}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography className={classes.answer}>
                    {props.answer}
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )

}
export default function FAQ(props) {
    const classes = useStyles();
    const faqs = [
        {
            q: "Må man bestille time for å reparere enheten?",
            a: "Vi har drop-in, så det er ikke nødvendig. Hvis du ønsker kan du ringe oss så vi kan sette av en time for deg."
        },
        {
            q: "Tar dere lang tid å reparere enheten?",
            a: "Vanligvis tar reparasjon fra ca 10-15 minutter, men dette avhenger litt av hvilken telefon du har og hvilken jobb som skal gjøres."
        },
        {
            q: "Reparere dere alle merker?",
            a: "Ja, så lenge vi kan anskaffe deler kan vi reparere alle telefoner. Vi har et stort utvalg av deler på lager, hvis vi ikke har det på lager kan vi bestille det inn for deg."
        },
        {
            q: "Kommer enheten å være vanntett etter reparasjon?",
            a: "Nei, vi kan ikke gi vanntett-garanti."
        }, {
            q: "Har dere garanti på reparasjonen?",
            a: "Vi gir 2 års garanti på skjermbytte og 1 års garanti på andre deler vi bytter."
        },
        {
            q: "Kan man sende enheten til dere?",
            a: "Det kan du, kontakt oss for nærmere detaljer. Eller sjekke 'Send din enhet på Posten' for å finne hvordan du kan sende enheten til oss."
        }, {
            q: "Mister man garantien fra produsenten?",
            a: "Garanti fra produsent vil bortfalle ved reparasjon hos oss."
        },
        {
            q: "Hvor ligger butikken?",
            a: "Vi holder til i Fjøsangerveien 39, 5054 Bergen. Når man bruker GBS, Skriver du Solheimgaten 33."
        }, {
            q: "Hvilken kvalitet på skjermer har dere?",
            a: "Vi har originale, TS8, TM, alle skjermer er garantert 2 års. du kan ta en titt på skjermkvalitets beskrivelse."
        },
        {
            q: "Trenger man å ta sikkerhetskopi?",
            a: "Vi anbefaler alltid å ta sikkerhetskopi hvis du har viktig data. Normalt mister man ingen data på telefonen, men vi tar ikke ansvar hvis det skulle skje."
        },
    ]
    const FaqsList = faqs.map((faq) =>
        <MyExpansionPanel
            question={faq.q}
            answer={faq.a}
        ></MyExpansionPanel>
    );
    return (
        <Section title="Dette lurer folk vanligvis på ">
            <div className={classes.root}>
                {FaqsList}
            </div>
        </Section>
    );
}




