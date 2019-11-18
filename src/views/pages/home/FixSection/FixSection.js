import React from 'react';

import Section from "components/Section/Section.js"
import MobileTab from 'views/pages/home/FixSection/MobileTab/MobileTab.js';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

// import NavPills from "components/NavPills/NavPills.js";
import Hidden from '@material-ui/core/Hidden';
import { Stepper } from '@material-ui/core';


// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import PhoneIphone from "@material-ui/icons/PhoneIphone";
// import TabletMac from "@material-ui/icons/TabletMac";

// const styles = {
//   root: {
//       width: "100%",
//       height: "500px",
//   },

// }
// const useStyles = makeStyles(styles);



export default function SectionPills() {
  // const classes = useStyles()
  return (
    <Section title={"Fix Your Device"}>



      
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
