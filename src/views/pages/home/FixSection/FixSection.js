import React from 'react';

import Section from "components/Section/Section.js"
import MobileTab from 'views/pages/home/FixSection/MobileTab/MobileTab.js';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import FixOptionCard from "components/MyCards/FixOptionCard.js"

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// import NavPills from "components/NavPills/NavPills.js";
import Hidden from '@material-ui/core/Hidden';
import { Stepper } from '@material-ui/core';


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import PhoneIphone from "@material-ui/icons/PhoneIphone";
// import TabletMac from "@material-ui/icons/TabletMac";

const styles = {
  root: {
    padding: "0 0 30px 0",
    alignText: "left"
  }
}
const useStyles = makeStyles(styles);



export default function SectionPills() {
  const classes = useStyles()
  return (
    <Section title={"Fix Your Device"}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <FixOptionCard title={"You come to "} titlespan={"OSS"} titleSpanColor={"green"} desc={" some Description about drop in "} btnLable={""} />
          </Grid>
          <Grid item xs={12} md={4}>
            <FixOptionCard title={"We come to "} titlespan={"YOU"} titleSpanColor={"blue"} desc={" we can come to you after 1900 to fix your device in minutes.... "} btnLable={"bestill time"} />

          </Grid>
          <Grid item xs={12} md={4}>
            <FixOptionCard title={"Send device with "} titlespan={"POSTEN"} titleSpanColor={"red"} desc={" If it's not possible for you to come to Bergen, print the sending sticker and send your device with posten."} btnLable={"Print Sending Sticker "} />

          </Grid>

        </Grid>
      </div>
      <CustomTabs
        headerColor="primary"
        tabs={[
          {
            tabName: "Mobile",
            tabContent: (
              <MobileTab />
            )
          },
          {
            tabName: "Tablet",
            tabContent: (
              <p >
                Tablet
                              </p>
            )
          },
          {
            tabName: "PC",
            tabContent: (
              <p>
                PC
                              </p>
            )
          }
        ]}
      />
    </Section>

  );
}




{/* <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Mobile",
                    tabIcon: PhoneIphone,
                    tabContent: (
                      <MobileTab />
                    )
                  },
                  {
                    tabButton: "Tablet",
                    tabIcon: TabletMac,
                    tabContent: (
                      <span>
                        Tablet
                      </span>
                    )
                  }
                ]}
              />
 */}
