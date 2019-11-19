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
      mobiles: MobileList,
      tablets: TabletList,
      pcs: PCList,
      activeTab: "mobile"
    }
  }
  // componentDidUpdate(prevProps) {
  //   this.setState({
  //     mobiles:  MobilesPriceList,
  //     tablets: TabletsPriceList,
  //     pcs : PCsPriceList,
  //   })
  // }
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
                <Tab device={"mobile"} deviceList={this.state.mobiles} />
              )
            },
            {
              tabName: "Tablet",
              tabContent: (
                <Tab device={"tablet"} deviceList={this.state.tablets} />
              )
            },
            {
              tabName: "PC",
              tabContent: (
                <Tab device={"pc"} deviceList={this.state.pcs} />
              )
            }
          ]}
        />
      </Section>
    );
  }
}
const MobileList = [
  {
    name: 'iPhone X',
    services: [
      {
        name :"Change screen",
        prices : [
          {
            price: 1200,
            note: "Orginal"
          },
          {
            price: 900,
            note: "compatible"
          },
        ]
      },
      {
        name :"Fix mic",
        price : [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name :"Fix camera",
        price : [
          {
            price: 840,
            note: "Orginal"
          },
          {
            price: 650,
            note: "compatible"
          },
        ]
      },
      {
        name :"Change battery",
        price : [
          {
            price: 1740,
            note: ""
          }
        ]
      },
    ],
    notes: ""
  },
  {
    name: 'iPhone 8',
    services: [
      {
        name :"Change screen",
        prices : [
          {
            price: 1200,
            note: "Orginal"
          },
          {
            price: 900,
            note: "compatible"
          },
        ]
      },
      {
        name :"Fix mic",
        price : [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name :"Fix camera",
        price : [
          {
            price: 840,
            note: "Orginal"
          },
          {
            price: 650,
            note: "compatible"
          },
        ]
      },
      {
        name :"Change battery",
        price : [
          {
            price: 1740,
            note: ""
          }
        ]
      },
    ],
    notes: ""
  },
  {
    name: 'iPhone 7',
    services: [
      {
        name :"Change screen",
        prices : [
          {
            price: 1200,
            note: "Orginal"
          },
          {
            price: 900,
            note: "compatible"
          },
        ]
      },
      {
        name :"Fix mic",
        price : [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name :"Fix camera",
        price : [
          {
            price: 840,
            note: "Orginal"
          },
          {
            price: 650,
            note: "compatible"
          },
        ]
      },
      {
        name :"Change battery",
        price : [
          {
            price: 1740,
            note: ""
          }
        ]
      },
    ],
    notes: ""
  },
  {
    name: 'iPhone 6',
    services: [
      {
        name :"Change screen",
        prices : [
          {
            price: 1200,
            note: "Orginal"
          },
          {
            price: 900,
            note: "compatible"
          },
        ]
      },
      {
        name :"Fix mic",
        price : [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name :"Fix camera",
        price : [
          {
            price: 840,
            note: "Orginal"
          },
          {
            price: 650,
            note: "compatible"
          },
        ]
      },
      {
        name :"Change battery",
        price : [
          {
            price: 1740,
            note: ""
          }
        ]
      },
    ],
    notes: ""
  },
  {
    services: [
      {
        name :"Change screen",
        prices : [
          {
            price: 1200,
            note: "Orginal"
          },
          {
            price: 900,
            note: "compatible"
          },
        ]
      },
      {
        name :"Fix mic",
        price : [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name :"Fix camera",
        price : [
          {
            price: 840,
            note: "Orginal"
          },
          {
            price: 650,
            note: "compatible"
          },
        ]
      },
      {
        name :"Change battery",
        price : [
          {
            price: 1740,
            note: ""
          }
        ]
      },
    ],
    notes: ""
  },
];
const TabletList = [
  {
    name: 'iPad 4',
    services: [
      {
        name :"Change screen",
        prices : [
          {
            price: 1200,
            note: "Orginal"
          },
          {
            price: 900,
            note: "compatible"
          },
        ]
      },
      {
        name :"Fix mic",
        price : [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name :"Fix camera",
        price : [
          {
            price: 840,
            note: "Orginal"
          },
          {
            price: 650,
            note: "compatible"
          },
        ]
      },
      {
        name :"Change battery",
        price : [
          {
            price: 1740,
            note: ""
          }
        ]
      },
    ],
    notes: ""
  },
  {
    name: 'iPad 3',
    services: [
      {
        name :"Change screen",
        prices : [
          {
            price: 1200,
            note: "Orginal"
          },
          {
            price: 900,
            note: "compatible"
          },
        ]
      },
      {
        name :"Fix mic",
        price : [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name :"Fix camera",
        price : [
          {
            price: 840,
            note: "Orginal"
          },
          {
            price: 650,
            note: "compatible"
          },
        ]
      },
      {
        name :"Change battery",
        price : [
          {
            price: 1740,
            note: ""
          }
        ]
      },
    ],
    notes: ""
  },
  {
    name: 'iPad 2',
    services: [
      {
        name :"Change screen",
        prices : [
          {
            price: 1200,
            note: "Orginal"
          },
          {
            price: 900,
            note: "compatible"
          },
        ]
      },
      {
        name :"Fix mic",
        price : [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name :"Fix camera",
        price : [
          {
            price: 840,
            note: "Orginal"
          },
          {
            price: 650,
            note: "compatible"
          },
        ]
      },
      {
        name :"Change battery",
        price : [
          {
            price: 1740,
            note: ""
          }
        ]
      },
    ],
    notes: ""
  },
  {
    name: 'iPad 1',
    services: [
      {
        name :"Change screen",
        prices : [
          {
            price: 1200,
            note: "Orginal"
          },
          {
            price: 900,
            note: "compatible"
          },
        ]
      },
      {
        name :"Fix mic",
        price : [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name :"Fix camera",
        price : [
          {
            price: 840,
            note: "Orginal"
          },
          {
            price: 650,
            note: "compatible"
          },
        ]
      },
      {
        name :"Change battery",
        price : [
          {
            price: 1740,
            note: ""
          }
        ]
      },
    ],
    notes: ""
  }
];
const PCList = [
  {
    name: 'Mac 4',
    services: [
      {
        name :"Change screen",
        prices : [
          {
            price: 1200,
            note: "Orginal"
          },
          {
            price: 900,
            note: "compatible"
          },
        ]
      },
      {
        name :"Fix mic",
        price : [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name :"Fix camera",
        price : [
          {
            price: 840,
            note: "Orginal"
          },
          {
            price: 650,
            note: "compatible"
          },
        ]
      },
      {
        name :"Change battery",
        price : [
          {
            price: 1740,
            note: ""
          }
        ]
      },
    ],
    notes: ""
  },
  {
    name: 'Mac 3',
    services: [
      {
        name :"Change screen",
        prices : [
          {
            price: 1200,
            note: "Orginal"
          },
          {
            price: 900,
            note: "compatible"
          },
        ]
      },
      {
        name :"Fix mic",
        price : [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name :"Fix camera",
        price : [
          {
            price: 840,
            note: "Orginal"
          },
          {
            price: 650,
            note: "compatible"
          },
        ]
      },
      {
        name :"Change battery",
        price : [
          {
            price: 1740,
            note: ""
          }
        ]
      },
    ],
    notes: ""
  },
  {
    name: 'Mac 2',
    services: [
      {
        name :"Change screen",
        prices : [
          {
            price: 1200,
            note: "Orginal"
          },
          {
            price: 900,
            note: "compatible"
          },
        ]
      },
      {
        name :"Fix mic",
        price : [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name :"Fix camera",
        price : [
          {
            price: 840,
            note: "Orginal"
          },
          {
            price: 650,
            note: "compatible"
          },
        ]
      },
      {
        name :"Change battery",
        price : [
          {
            price: 1740,
            note: ""
          }
        ]
      },
    ],
    notes: ""
  }
];