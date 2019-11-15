import React, { Component } from 'react';
import 'views/pages/home/FixSection/FixSection.css';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Section from "components/Section/Section.js"

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import MobileTab from 'views/pages/home/FixSection/MobileTab/MobileTab.js';


import styles from "assets/jss/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles, {
    root: {
        height: 216,
        flexGrow: 1,
        maxWidth: 400,
    }
});




export default function FixSection() {

    const classes = useStyles();

    return (
        <Section title={"Fix Your Device"}>
            <GridContainer>
                <GridItem >
                    <CustomTabs
                        headerColor="primary"
                        tabs={[
                            {
                                tabName: "Mobil",
                                tabContent: (
                                    <MobileTab />
                                )
                            },
                            {
                                tabName: "Nettbrett",
                                tabContent: (
                                    <p className={classes.textCenter}>
                                        I think that’s a responsibility that I have, to push
                                        possibilities, to show people, this is the level that
                                        things could be at. I will be the leader of a company
                                        that ends up being worth billions of dollars, because I
                                        got the answers. I understand culture. I am the nucleus.
                                        I think that’s a responsibility that I have, to push
                                        possibilities, to show people, this is the level that
                                        things could be at.
                                            </p>
                                )
                            },
                            {
                                tabName: "PC",
                                tabContent: (
                                    <p className={classes.textCenter}>
                                        think that’s a responsibility that I have, to push
                                        possibilities, to show people, this is the level that
                                        things could be at. So when you get something that has
                                        the name Kanye West on it, it’s supposed to be pushing
                                        the furthest possibilities. I will be the leader of a
                                        company that ends up being worth billions of dollars,
                                        because I got the answers. I understand culture. I am
                                        the nucleus.
                                            </p>
                                )
                            }
                        ]}
                    />
                </GridItem>
            </GridContainer>
        </Section>



    );

}


