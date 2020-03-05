import React, { Component } from "react";

import Tab from "./Tab/Tab.jsx";

export default class FixSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobiles: MobileList,
            isLoading:true
        }
    }

    fetchData() {
        // Where we're fetching data from
        fetch(`https://mobilland.no/static/data/PriceList.json`)
          .then(response => response.json())
          .then(data =>
            {
                this.setState({
                    mobiles: data,
                  isLoading: false,
                })
                console.log(data)
            }
            
          )
          .catch(error => this.setState({ error, isLoading: false }));
      }
      componentDidMount() {
        this.fetchData();
      }
    render() {
        return (
            <div>
               {!this.state.isLoading ? 
                (
                <Tab device={"mobil"} deviceList={this.state.mobiles} />
                )
                :
                ("")
            } 
            </div>
            
        );
    }
}

// const Skjerm = "Skjerm"
// const Batteri = "Batteri"
// const Frontkamera = "Frontkamera"
// const Hovedkamera = "Hovedkamera"
// const Ladeport = "Ladeport"
// const Bakglass = "Bakglass"

// const Kopi = "Kopi"
// const Original = "Original"

const MobileList = [

    // iPhone 11 Pro Max
    {
        "id": "iphone11ProMax",

        "name": "iPhone 11 Pro Max",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 2499,
                        "note": "Original"
                    }
                ]
            },
        ],
        "notes": ""
    },
    // iPhone 11 Pro
    {
        "id": "iphone11Pro",

        "name": "iPhone 11 Pro",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 2499,
                        "note": "Original"
                    }
                ]
            },
        ],
        "notes": ""
    },
    // iPhone 11
    {
        "id": "iphone11",
        "name": "iPhone 11",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 2499,
                        "note": "Original"
                    }
                ]
            },
        ],
        "notes": ""
    },
    // iPhone XS Max
    {
        "id": "iphoneXSMax",
        "name": "iPhone XS MAX",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 2800,
                        "note": "Kopi"
                    },
                    {
                        "price": 3500,
                        "note": "Original"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 799,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Frontkamera",
                "prices": [
                    {
                        "price": 1099,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Hovedkamera",
                "prices": [
                    {
                        "price": 1299,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 1299,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 1099,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    // iPhone XS
    {
        "id": "iphoneXS",
        "name": "iPhone XS",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1800,
                        "note": "Kopi"
                    },
                    {
                        "price": 2800,
                        "note": "Original"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 799,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Frontkamera",
                "prices": [
                    {
                        "price": 899,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Hovedkamera",
                "prices": [
                    {
                        "price": 1099,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 1099,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 1099,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    // iPhone XR
    {
        "id": "iphoneXR",
        "name": "iPhone XR",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1400,
                        "note": "Kopi"
                    },
                    {
                        "price": 1800,
                        "note": "Original"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 799,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Frontkamera",
                "prices": [
                    {
                        "price": 699,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Hovedkamera",
                "prices": [
                    {
                        "price": 899,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 899,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 899,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    // iPhone X
    {
        "id": "iphoneX",
        "name": "iPhone X",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1900,
                        "note": "qualityName_Copy"
                    },
                    {
                        "price": 2800,
                        "note": "Original"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 799,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Frontkamera",
                "prices": [
                    {
                        "price": 799,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Hovedkamera",
                "prices": [
                    {
                        "price": 999,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 999,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 999,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },


    // iPhone 8 Plus
    {
        "id": "iphone8Plus",

        "name": "iPhone 8 plus",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1000,
                        "note": "Kopi"
                    },
                    {
                        "price": 1200,
                        "note": "Original"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Frontkamera",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Hovedkamera",
                "prices": [
                    {
                        "price": 899,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 699,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 999,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    // iPhone 8
    {
        "id": "iphone8",

        "name": "iPhone 8",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 800,
                        "note": "Kopi"
                    },
                    {
                        "price": 1000,
                        "note": "Original"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Frontkamera",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Hovedkamera",
                "prices": [
                    {
                        "price": 699,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 899,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    // iPhone 7 Plus
    {
        "id": "iphone7Plus",

        "name": "iPhone 7 plus",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 800,
                        "note": "Kopi"
                    },
                    {
                        "price": 1100,
                        "note": "Original"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Frontkamera",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Hovedkamera",
                "prices": [
                    {
                        "price": 799,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            }
        ],
        "notes": ""
    },
    // iPhone 7
    {
        "id": "iphone7",
        "name": "iPhone 7",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 700,
                        "note": "Kopi"
                    },
                    {
                        "price": 1000,
                        "note": "Original"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Frontkamera",
                "prices": [
                    {
                        "price": 499,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Hovedkamera",
                "prices": [
                    {
                        "price": 699,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 499,
                        "note": ""
                    }
                ]
            }
        ],
        "notes": ""
    },
    // iPhone 6S Plus
    {
        "id": "iphone6SPlus",

        "name": "iPhone 6S Plus",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 650,
                        "note": "Kopi"
                    },
                    {
                        "price": 800,
                        "note": "Original"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Frontkamera",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Hovedkamera",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            }
        ],
        "notes": ""
    },
    // iPhone 6S
    {
        "id": "iphone6S",

        "name": "iPhone 6S",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 600,
                        "note": "Kopi"
                    },
                    {
                        "price": 750,
                        "note": "Original"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Frontkamera",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Hovedkamera",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            }
        ],
        "notes": ""
    },
    // iPhone 6 Plus
    {
        "id": "iphone6Plus",

        "name": "iPhone 6 Plus",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 600,
                        "note": "Kopi"
                    },
                    {
                        "price": 750,
                        "note": "Original"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Frontkamera",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Hovedkamera",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            }
        ],
        "notes": ""
    },
    // iPhone 6
    {
        "id": "iphone6",

        "name": "iPhone 6",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 500,
                        "note": "Kopi"
                    },
                    {
                        "price": 700,
                        "note": "Original"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Frontkamera",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Hovedkamera",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            }
        ],
        "notes": ""
    },

    // iPhone 5SE
    {
        "id": "iphone5SE",

        "name": "iPhone 5SE",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 399,
                        "note": "Kopi"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 299,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Frontkamera",
                "prices": [
                    {
                        "price": 299,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Hovedkamera",
                "prices": [
                    {
                        "price": 299,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 299,
                        "note": ""
                    }
                ]
            }
        ],
        "notes": ""
    },
    // iPhone 5S
    {
        "id": "iphone5S",

        "name": "iPhone 5S",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 399,
                        "note": "Kopi"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 299,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Frontkamera",
                "prices": [
                    {
                        "price": 299,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Hovedkamera",
                "prices": [
                    {
                        "price": 199,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 199,
                        "note": ""
                    }
                ]
            }
        ],
        "notes": ""
    },
    // iPhone 5C
    {
        "id": "iphone5C",

        "name": "iPhone 5C",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 399,
                        "note": "Kopi"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 299,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Frontkamera",
                "prices": [
                    {
                        "price": 299,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Hovedkamera",
                "prices": [
                    {
                        "price": 199,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 199,
                        "note": ""
                    }
                ]
            }
        ],
        "notes": ""
    },
    // iPhone 5
    {
        "id": "iphone5",

        "name": "iPhone 5",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 299,
                        "note": "Kopi"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 299,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Frontkamera",
                "prices": [
                    {
                        "price": 299,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Hovedkamera",
                "prices": [
                    {
                        "price": 199,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 199,
                        "note": ""
                    }
                ]
            }
        ],
        "notes": ""
    },
    // iPhone 4S
    {
        "id": "iphone4S",

        "name": "iPhone 4S",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 299,
                        "note": "Kopi"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 199,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Hovedkamera",
                "prices": [
                    {
                        "price": 199,
                        "note": ""
                    }
                ]
            }
        ],
        "notes": ""
    },
    // iPhone 4
    {
        "id": "iphone4",
        "name": "iPhone 4",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 299,
                        "note": "Kopi"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 199,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Hovedkamera",
                "prices": [
                    {
                        "price": 199,
                        "note": ""
                    }
                ]
            }
        ],
        "notes": ""
    },

    // "Note9"
    {
        "id": "Note9",

        "name": "Note 9",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 3000,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 899,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 649,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //  "Note8"
    {
        "id": "Note8",

        "name": "Note 8",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    
                    {
                        "price": 2800,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 899,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 649,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    // "GalaxyS5"
    {
        "id": "GalaxyS5",

        "name": "Galaxy S5",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1600,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 349,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    // "id": "GalaxyS6"
    {
        "id": "GalaxyS6",

        "name": "Galaxy S6",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1800,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 349,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 499,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "GalaxyS6"
    {
        "id": "GalaxyS6",

        "name": "Galaxy S6",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 3000,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 899,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 649,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "GalaxyS6 Edge"
    {
        "id": "GalaxyS6Edge",

        "name": "Galaxy S6 Edge",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 2200,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 349,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "GalaxyS6 Edge Plus"
    {
        "id": "GalaxyS6EdgePlus",

        "name": "Galaxy S6 Edge Plus",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 2200,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 349,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "GalaxyS7"
    {
        "id": "GalaxyS7",

        "name": "Galaxy S7",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1700,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 349,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "GalaxyS7 Edge"
    {
        "id": "GalaxyS7Edge",

        "name": "Galaxy S7 Edge",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 2400,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 349,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "GalaxyS8"
    {
        "id": "GalaxyS8",

        "name": "Galaxy S8",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 2650,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 499,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 699,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 549,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "GalaxyS8 Plus"
    {
        "id": "GalaxyS8Plus",

        "name": "Galaxy S8 Plus",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 2750,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 499,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 699,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 549,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "GalaxyS9"
    {
        "id": "GalaxyS9",

        "name": "Galaxy S9",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 2900,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 699,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 649,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
     //"id": "GalaxyS9 plus"
     {
        "id": "GalaxyS9Plus",

        "name": "Galaxy S9 Plus",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 3100,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 699,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 649,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
     //"id": "GalaxyS10"
     {
        "id": "GalaxyS10",

        "name": "Galaxy S10",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 2900,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 899,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 649,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "GalaxyS10e"
    {
        "id": "GalaxyS10e",

        "name": "Galaxy S10e",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 2400,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 799,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 649,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "GalaxyS10 Plus"
    {
        "id": "GalaxyS10Plus",

        "name": "Galaxy S10 Plus",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 3200,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 899,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 649,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "Samsung A3 2017"
    {
        "id": "SamsungA32017",

        "name": "Samsung A3 2017",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1400,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "Samsung A5 2016"
    {
        "id": "SamsungA52016",

        "name": "Samsung A5 2016",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1400,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
     //"id": "Samsung A5 2017"
     {
        "id": "SamsungA52017",

        "name": "Samsung A5 2017",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1400,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
     //"id": "Samsung A6 2018"
     {
        "id": "SamsungA62018",

        "name": "Samsung A6 2018",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1250,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
     //"id": "Samsung A6 plus"
     {
        "id": "SamsungA6Plus",

        "name": "Samsung A6 Plus",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1400,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
     //"id": "Samsung A7"
     {
        "id": "SamsungA7",

        "name": "Samsung A7",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1200,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "Samsung A7 2018"
    {
        "id": "SamsungA72018",

        "name": "Samsung A7 2018",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1300,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "Samsung A8 2018"
    {
        "id": "SamsungA82018",

        "name": "Samsung A8 2018",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1500,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "Samsung A9 2018"
    {
        "id": "SamsungA92018",

        "name": "Samsung A9 2018",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1700,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "Samsung A10"
    {
        "id": "SamsungA10",

        "name": "Samsung A10",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1100,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "Samsung A20e"
    {
        "id": "SamsungA20e",

        "name": "Samsung A20e",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1100,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "Samsung A40"
    {
        "id": "SamsungA40",

        "name": "Samsung A40",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1300,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "Samsung A50"
    {
        "id": "SamsungA50",

        "name": "Samsung A50",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1300,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "Samsung A70"
    {
        "id": "SamsungA70",

        "name": "Samsung A70",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1700,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "Samsung A80"
    {
        "id": "SamsungA7",

        "name": "Samsung A7",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1800,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },


    //"id": "Samsung J 2016"
    {
        "id": "SamsungJ32016",

        "name": "Samsung J3 2016",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1200,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
     //"id": "Samsung J3 2017"
     {
        "id": "SamsungJ32017",

        "name": "Samsung J3 2017",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1200,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
     //"id": "Samsung J4"
     {
        "id": "SamsungJ4",

        "name": "Samsung J4",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1200,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "Samsung J4 Plus"
    {
        "id": "SamsungJ4Plus",

        "name": "Samsung J4 Plus",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1300,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "Samsung J5 2017 "
    {
        "id": "SamsungJ52017",

        "name": "Samsung J5 2017",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1300,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "Samsung J6 2018"
    {
        "id": "SamsungJ62018",

        "name": "Samsung J6 2018",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1400,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "Samsung J6 Plus"
    {
        "id": "SamsungJ6Plus",

        "name": "Samsung J6 Plus",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1400,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "Samsung J7 2017 "
    {
        "id": "SamsungJ72017",

        "name": "Samsung J7 2017",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1400,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
            {
                "name": "Batteri",
                "prices": [
                    {
                        "price": 399,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Ladeport",
                "prices": [
                    {
                        "price": 599,
                        "note": ""
                    }
                ]
            },
            {
                "name": "Bakglass",
                "prices": [
                    {
                        "price": 449,
                        "note": ""
                    }
                ]
            },
        ],
        "notes": ""
    },



    //"id": "Huawei P 30 Pro "
    {
        "id": "HuaweiP30Pro",

        "id": "Huawei P30 Pro",
        "name": "",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 3100,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "Huawei P 30 "
    {
        "id": "HuaweiP30",

        "id": "Huawei P30",
        "name": "",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 2200,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
        ],
        "notes": ""
    },
    //"id": "Huawei P 30 Lite "
    {
        "id": "HuaweiP30Lite",

        "id": "Huawei P30 Lite",
        "name": "",
        "services": [
            {
                "name": "Skjerm",
                "prices": [
                    {
                        "price": 1400,
                        "note": "squalityName_Orginal"
                    }
                ]
            },
        ],
        "notes": ""
    },

//"id": "Huawei P 20 Pro "
{
    "id": "HuaweiP20Pro",

    "id": "Huawei P20 Pro",
    "name": "",
    "services": [
        {
            "name": "Skjerm",
            "prices": [
                {
                    "price": 2900,
                    "note": "squalityName_Orginal"
                }
            ]
        },
    ],
    "notes": ""
},
//"id": "Huawei P 20 "
{
    "id": "HuaweiP20",

    "id": "Huawei P20",
    "name": "",
    "services": [
        {
            "name": "Skjerm",
            "prices": [
                {
                    "price": 2500,
                    "note": "squalityName_Orginal"
                }
            ]
        },
    ],
    "notes": ""
},
//"id": "Huawei P 20 Lite "
{
    "id": "HuaweiP20Lite",

    "id": "Huawei P20 Lite",
    "name": "",
    "services": [
        {
            "name": "Skjerm",
            "prices": [
                {
                    "price": 1300,
                    "note": "squalityName_Orginal"
                }
            ]
        },
    ],
    "notes": ""
},
//"id": "Huawei P Smart 2019 "
{
    "id": "HuaweiPSmart2019",

    "id": "Huawei P Smart 2019",
    "name": "",
    "services": [
        {
            "name": "Skjerm",
            "prices": [
                {
                    "price": 1200,
                    "note": "squalityName_Orginal"
                }
            ]
        },
    ],
    "notes": ""
},
//"id": "Huawei P Smart Plus "
{
    "id": "HuaweiPsmartPlus",

    "id": "Huawei PSmart Plus",
    "name": "",
    "services": [
        {
            "name": "Skjerm",
            "prices": [
                {
                    "price": 1300,
                    "note": "squalityName_Orginal"
                }
            ]
        },
    ],
    "notes": ""
},
//"id": "Huawei P  Smart "
{
    "id": "HuaweiPSmart",

    "id": "Huawei P Smart",
    "name": "",
    "services": [
        {
            "name": "Skjerm",
            "prices": [
                {
                    "price": 1200,
                    "note": "squalityName_Orginal"
                }
            ]
        },
    ],
    "notes": ""
},
//"id": "Huawei P 10"
{
    "id": "HuaweiP10",

    "id": "Huawei P 10",
    "name": "",
    "services": [
        {
            "name": "Skjerm",
            "prices": [
                {
                    "price": 1200,
                    "note": "squalityName_Orginal"
                }
            ]
        },
    ],
    "notes": ""
},
//"id": "Huawei P 10 Lite  "
{
    "id": "HuaweiP10Lite",

    "id": "Huawei P 10 Lite",
    "name": "",
    "services": [
        {
            "name": "Skjerm",
            "prices": [
                {
                    "price": 1200,
                    "note": "squalityName_Orginal"
                }
            ]
        },
    ],
    "notes": ""
},
//"id": "Huawei P9"
{
    "id": "HuaweiP9",

    "id": "Huawei P 9",
    "name": "",
    "services": [
        {
            "name": "Skjerm",
            "prices": [
                {
                    "price": 1200,
                    "note": "squalityName_Orginal"
                }
            ]
        },
    ],
    "notes": ""
},
//"id": "Huawei Mate 20 Pro"
{
    "id": "HuaweiMate20Pro",

    "id": "Huawei Mate 20 Pro",
    "name": "",
    "services": [
        {
            "name": "Skjerm",
            "prices": [
                {
                    "price": 3300,
                    "note": "squalityName_Orginal"
                }
            ]
        },
    ],
    "notes": ""
},
//"id": "Huawei Mate 20 Lite"
{
    "id": "HuaweiMate20Lite",

    "id": "Huawei Mate 20 Lite",
    "name": "",
    "services": [
        {
            "name": "Skjerm",
            "prices": [
                {
                    "price": 1200,
                    "note": "squalityName_Orginal"
                }
            ]
        },
    ],
    "notes": ""
},
//"id": "Huawei Mate 10 Pro"
{
    "id": "HuaweiMate10Pro",

    "id": "Huawei Mate 10 Pro",
    "name": "",
    "services": [
        {
            "name": "Skjerm",
            "prices": [
                {
                    "price": 1100,
                    "note": "squalityName_Orginal"
                }
            ]
        },
    ],
    "notes": ""
},

];
