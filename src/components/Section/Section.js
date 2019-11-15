import React from 'react';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import sectionStyle from "assets/jss/components/sectionStyle.js";

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

