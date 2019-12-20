import React, { Component } from 'react';

import Section from "components/Section/Section.js"
import Tab from './Tab/Tab.js';
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import FixOptionCard from "components/MyCards/FixOptionCard.js"
import Grid from '@material-ui/core/Grid';
//assets
import Posten from 'assets/img/posten.jpg';
import WeComeToYou from 'assets/img/we_come_to_you.jpg';
import DropIn from 'assets/img/drop-in.jpg';




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
    let div1Styles = { padding: "50px", alignText: "left" }
    let div2Styles = { paddingTop: "80px" }

    return (
      <Section title={"Fix Your Device"} >

        <div styles={div2Styles}>
          <CustomTabs

            headerColor="primary"
            tabs={[
              {
                tabName: "Mobil",
                tabContent: (
                  <Tab device={"mobil"} deviceList={this.state.mobiles} />
                )
              },
              {
                tabName: "nettbrett",
                tabContent: (
                  <Tab device={"nettbrett"} deviceList={this.state.tablets} />
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
        </div>
        <div styles={div1Styles}>
          <Grid container spacing={10}>
            <Grid item xs={12} md={12}>
              {/* <Grid container spacing={0}> */}
              {/* <Grid item xs={12} md={5}>
                  <FixOptionCard title={""} titlespan={"Drop-in"} titleSpanColor={"green"} desc={" Det er opp til deg om du vil bestille time eller nei. Du trenger ikke vanligvis å bestille time! Men om du vil at vi beholder en tid for deg bare å bestille time. "} btnLable={"Bestill time hos oss"} />

                </Grid>
                <Grid item xs={12} md={7}> */}
              <FixOptionCard
                title={""}
                titlespan={"Drop-in"}
                titleSpanColor={"green"}
                desc={" Det er opp til deg om du vil bestille time eller nei. Du trenger ikke vanligvis å bestille time! Men om du vil at vi beholder en tid for deg bare å bestille time. "}
                btnLable={"Bestill time hos oss"}
                img={DropIn}
                left={false}

              />


              {/* </Grid> */}
              {/* </Grid> */}
            </Grid>
            <Grid item xs={12} md={12}>
              <FixOptionCard
                title={"Vi kommer til "}
                titlespan={"Deg"}
                titleSpanColor={"blue"}
                desc={" Vi kan sende en tekniker til deg for skjermbytting av iPhone. Du slipper du å tenke på parkering rundt i byen, i tillegg til at du sparer tid for å gjøre andre ting mens teknikeren reparerer mobilen din. Vi operer foreløpig kun innenfor Bergen. Tjenesten gjelder kun for skjerm eller batteri på iphone når du forhåndsbestiller timen. Hvis du kansellerer senest kl. 12 dagen før avtaletidspunktet vil hele beløpet bli refundert."}
                btnLable={"Bestill time"}
                img={WeComeToYou}
                left={true}

              />
            </Grid>
            <Grid item xs={12} md={12}>
              <FixOptionCard
                title={"Send din enhet på "}
                titlespan={"Posten"}
                titleSpanColor={"red"}
                desc={" Hvis du har problemer med din telefon/tablet eller pc  kan du sende den til oss for sjekk eller reparere, Når enheten skal returneres, bruker vi Bring til vanlig og det koster ca. 150 med sporing. Vi kan sende den med brevpakka men med kundens ansvar Du kan bare fylle ut vårt kontaktskjema."}
                btnLable={"Fyll ut kontaktskjema"}
                img={Posten}
                left={false}
              />

            </Grid>

          </Grid>
        </div>


      </Section>
    );
  }
}
const MobileList = [
  {
    name: 'iPhone X',
    services: [
      {
        name: "Change screen",
        prices: [
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
        name: "Fix mic",
        prices: [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name: "Fix camera",
        prices: [
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
        name: "Change battery",
        prices: [
          {
            price: 1740,
            note: ""
          }
        ]
      },
      {
        name: "Change back side",
        prices: [
          {
            price: 1660,
            note: ""
          }
        ]
      }
    ],
    notes: ""
  },
  {
    name: 'iPhone 8',
    services: [
      {
        name: "Change screen",
        prices: [
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
        name: "Fix mic",
        prices: [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name: "Fix camera",
        prices: [
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
        name: "Change battery",
        prices: [
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
        name: "Change screen",
        prices: [
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
        name: "Fix mic",
        prices: [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name: "Fix camera",
        prices: [
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
        name: "Change battery",
        prices: [
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
        name: "Change screen",
        prices: [
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
        name: "Fix mic",
        prices: [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name: "Fix camera",
        prices: [
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
        name: "Change battery",
        prices: [
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
const TabletList = [
  {
    name: 'iPad 4',
    services: [
      {
        name: "Change screen",
        prices: [
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
        name: "Fix mic",
        prices: [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name: "Fix camera",
        prices: [
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
        name: "Change battery",
        prices: [
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
        name: "Change screen",
        prices: [
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
        name: "Fix mic",
        prices: [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name: "Fix camera",
        prices: [
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
        name: "Change battery",
        prices: [
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
        name: "Change screen",
        prices: [
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
        name: "Fix mic",
        prices: [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name: "Fix camera",
        prices: [
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
        name: "Change battery",
        prices: [
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
        name: "Change screen",
        prices: [
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
        name: "Fix mic",
        prices: [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name: "Fix camera",
        prices: [
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
        name: "Change battery",
        prices: [
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
        name: "Change screen",
        prices: [
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
        name: "Fix mic",
        prices: [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name: "Fix camera",
        prices: [
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
        name: "Change battery",
        prices: [
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
        name: "Change screen",
        prices: [
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
        name: "Fix mic",
        prices: [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name: "Fix camera",
        prices: [
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
        name: "Change battery",
        prices: [
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
        name: "Change screen",
        prices: [
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
        name: "Fix mic",
        prices: [
          {
            price: 450,
            note: ""
          }
        ]
      },
      {
        name: "Fix camera",
        prices: [
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
        name: "Change battery",
        prices: [
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