import React, { Component } from 'react';

import Section from "components/Section/Section.js"
import Tab from './Tab/Tab.js';
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import FixOptionCard from "components/MyCards/FixOptionCard.js"
import Grid from '@material-ui/core/Grid';

export default class FixSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: {
        devicesList: {},
        servicesList: [],
        prisList: [],
        choosenDevice: "",
        choosenService: "",
        stepNumber: 0
      },
      tablet: {
        devicesList: {},
        servicesList: [],
        prisList: [],
        choosenDevice: "",
        choosenService: "",
        stepNumber: 0
      },
      pc: {
        devicesList: {},
        servicesList: [],
        prisList: [],
        choosenDevice: "",
        choosenService: "",
        stepNumber: 0
      },
      activeTab: "mobile"
    }
  }

  render() {
    return (
      <Section title={"Fix Your Device"} >
        <div styles={{ padding: "0 0 30px 0", alignText: "left" }}>
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
                <Tab device={"mobile"} servicesList={MobilesPriceList} />
              )
            },
            {
              tabName: "Tablet",
              tabContent: (
                <Tab device={"tablet"} servicesList={TabletsPriceList} />
              )
            },
            {
              tabName: "PC",
              tabContent: (
                <Tab device={"pc"} servicesList={PCsPriceList} />
              )
            }
          ]}
        />
      </Section>
    );
  }
}
const MobilesPriceList = [
  {
    name: 'iPhone X',
    services: {
      "Change screen": 1200,
      "Cange battery": 1450,
      "Fix mic": 1610,
      "Fix camera": 1355
    }
  },
  {
    name: 'iPhone 8',
    services: {
      "Change screen": 1540,
      "Cange battery": 865,
      "Fix camera": 1340
    },
    notes: ""
  },
  {
    name: 'iPhone 7',
    services: {
      "Change screen": 1100,
      "Cange battery": 1250,
      "Fix mic": 1380,
      "Fix camera": 1110
    },
    notes: ""
  },
  {
    name: 'iPhone 6',
    services: {
      "Change screen": [{ "Orginal screen": 1580 }, { "chinees screen": 1100 },],
      "Cange battery": 1350,
      "Fix mic": 1450,
      "Fix camera": 1280,
      "Fix Speaker": 1565,
    },
    notes: ""
  },
  {
    name: 'iPhone 5',
    services: {
      "Change screen": 990,
      "Cange battery": [{ "Apple Battery": 1580 }, { "non orginal Battery": 950 },],
      "Fix camera": 1180,
    },
    notes: ""
  },
];
const TabletsPriceList = [
  {
    name: 'iPad 4',
    services: {
      "Change screen": 1200,
      "Cange battery": 1450,
      "Fix mic": 1610,
      "Fix camera": 1355
    },
    notes: ""
  },
  {
    name: 'iPad 3',
    services: {
      "Change screen": 1540,
      "Cange battery": 865,
      "Fix camera": 1340
    },
    notes: ""
  },
  {
    name: 'iPad 2',
    services: {
      "Change screen": 1100,
      "Cange battery": 1250,
      "Fix mic": 1380,
      "Fix camera": 1110
    },
    notes: ""
  },
  {
    name: 'iPad 1',
    services: {
      "Change screen": 1580,
      "Cange battery": 1350,
      "Fix mic": 1450,
      "Fix camera": 1280,
      "Fix Speaker": 1565,
    },
    notes: ""
  }
];
const PCsPriceList = [
  {
    name: 'Mac 4',
    services: {
      "Change screen": 1200,
      "Cange battery": 1450,
      "Fix mic": 1610,
      "Fix camera": 1355
    },
    notes: ""
  },
  {
    name: 'Mac 3',
    services: {
      "Change screen": 2860,
      "Cange battery": 3300,
      "Fix camera": 5200
    },
    notes: ""
  },
  {
    name: 'Mac 2',
    services: {
      "Change screen": 2450,
      "Cange battery": 3650,
      "Fix mic": 1780,
      "Fix camera": 2540
    },
    notes: ""
  }
];