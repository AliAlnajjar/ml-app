import React from 'react';
// import 'views/pages/home/FixSection/FixSection.css';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import ChooseMobile from "views/pages/home/FixSection/MobileTab/ChooseMobile.js"

const styles = {
    root: {
        width: "100%",
        height: "auto",
        border: "1px solid red",
    },
    item1: {
        border: "1px solid green"

    },
    item2: {
        border: "1px solid blue"

    },
    item3: {
        border: "1px solid orange"

    }
}
const useStyles = makeStyles(styles);

export default function MobileTab() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <div className={classes.container}> */}
            <GridContainer>
                <GridItem xs={12} sm={12} md={4} lg={4} xl={4} className={classes.item1} >
                    <ChooseMobile />
                </GridItem>
                <GridItem xs={12} sm={12} md={4} lg={4} xl={4} className={classes.item2}>
                    <p> valg problem </p>
                </GridItem>
                <GridItem xs={12} sm={12} md={4} lg={4} xl={4} className={classes.item3} >
                    <p> pris </p>

                </GridItem>
            </GridContainer>
            {/* </div> */}
        </div>
    );

}


