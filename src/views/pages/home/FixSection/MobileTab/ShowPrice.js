import React from 'react';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display: "block",
        flexGrow: 1,
        justifyContent: "center",
        color: "#00A99D"

    },
    blackText: {
        color: "black"
    }
});

export default function ChooseMobile() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>1200,-</h1>
            <p>
                <h4 className={classes.blackText}>Some Extra details go here...</h4>
            </p>


        </div>
    );

}


