import React from 'react';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

const sectionStyle = {
    section: {
        background: "#FFFFFF",
        padding: "40px 0px",
        width: "80%",
        maxWidth: "1220px",
        margin: "auto"
    },
    container: {
        boxSizing: "border-box",
        padding: "20px 0px",
        minHeight: "100px"
    },
    sectionTitle: {
        fontSize: "2.5em",
        position: "relative",
        display: "inline-block",
        fontFamily: "Montserrat",
        textAlign: "center",
        "@media (max-width: 576px)": {
            textAlign: "Center",
            padding: "30px 0"
        },
        padding: "30px 0px",
        "&:before": {
            content: "''",
            width: "0px",
            height: "0px",
            backgroundColor: "red",
            position: "absolute",
            display: "inline-block"
        }
    },
};

const useStyles = makeStyles(sectionStyle);

export default function Section(props) {

    const classes = useStyles();
    const { title, children } = props;
    return (
        <div className={classes.section}>

            <div className={classes.sectionTitle}> {title} </div>
            <div className={classes.container}>
                {children}
            </div>

        </div>
    );
}

