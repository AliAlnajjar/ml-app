import React, { Component } from 'react';

import Tab from './Tab/Tab.jsx';

export default class FixSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobiles: MobileList,
            // tablets: TabletList,
            // pcs: PCList,
            // activeTab: "mobile"
        }
    }
    render() {
        return (
            <Tab device={"mobil"} deviceList={this.state.mobiles} />
        );
    }
}

const serviceName_screen = "Skjerm"
const serviceName_battery = "Batteri"
const serviceName_frontCamera = "Frontkamera"
const serviceName_rearCamera = "Hovedkamera"
const serviceName_chargingPort = "Ladeport"
const serviceName_backPanel = "Bakglass"

const qualityName_TmQuality = "TM kvalitet"
const qualityName_refurdbishedOriginal = "refurdbished original"
const qualityName_oledSoft = "Oled soft"
const qualityName_original = "Original"
const qualityName_TS8 = "TS8"

const MobileList = [

    // iPhone 11 Pro Max
    {
        id: 'iphone11ProMax',

        name: 'iPhone 11 Pro Max',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 2499,
                        note: qualityName_refurdbishedOriginal
                    }
                ]
            },
        ],
        notes: ""
    },
    // iPhone 11 Pro
    {
        id: 'iphone11Pro',

        name: 'iPhone 11 Pro',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 2499,
                        note: qualityName_refurdbishedOriginal
                    }
                ]
            },
        ],
        notes: ""
    },
    // iPhone 11
    {
        id: 'iphone11',
        name: 'iPhone 11',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 2499,
                        note: qualityName_refurdbishedOriginal
                    }
                ]
            },
        ],
        notes: ""
    },
    // iPhone XS Max
    {
        id: 'iphoneXSMax',
        name: 'iPhone XS MAX',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 2599,
                        note: qualityName_TmQuality
                    },
                    {
                        price: 3500,
                        note: qualityName_refurdbishedOriginal
                    }
                ]
            },
            {
                name: serviceName_battery,
                prices: [
                    {
                        price: 1099,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_frontCamera,
                prices: [
                    {
                        price: 1099,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_rearCamera,
                prices: [
                    {
                        price: 1299,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_chargingPort,
                prices: [
                    {
                        price: 1299,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_backPanel,
                prices: [
                    {
                        price: 1299,
                        note: ""
                    }
                ]
            },
        ],
        notes: ""
    },
    // iPhone XS
    {
        id: 'iphoneXS',
        name: 'iPhone XS',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 2099,
                        note: qualityName_TmQuality
                    },
                    {
                        price: 3000,
                        note: qualityName_refurdbishedOriginal
                    }
                ]
            },
            {
                name: serviceName_battery,
                prices: [
                    {
                        price: 899,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_frontCamera,
                prices: [
                    {
                        price: 899,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_rearCamera,
                prices: [
                    {
                        price: 1099,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_chargingPort,
                prices: [
                    {
                        price: 1099,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_backPanel,
                prices: [
                    {
                        price: 1099,
                        note: ""
                    }
                ]
            },
        ],
        notes: ""
    },
    // iPhone XR
    {
        id: 'iphoneXR',
        name: 'iPhone XR',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 1799,
                        note: qualityName_TmQuality
                    },
                    {
                        price: 2400,
                        note: qualityName_refurdbishedOriginal
                    }
                ]
            },
            {
                name: serviceName_battery,
                prices: [
                    {
                        price: 799,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_frontCamera,
                prices: [
                    {
                        price: 699,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_rearCamera,
                prices: [
                    {
                        price: 899,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_chargingPort,
                prices: [
                    {
                        price: 899,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_backPanel,
                prices: [
                    {
                        price: 899,
                        note: ""
                    }
                ]
            },
        ],
        notes: ""
    },
    // iPhone X
    {
        id: 'iphoneX',
        name: 'iPhone X',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 1999,
                        note: qualityName_refurdbishedOriginal
                    },
                    {
                        price: 2400,
                        note: qualityName_oledSoft
                    },
                ]
            },
            {
                name: serviceName_battery,
                prices: [
                    {
                        price: 799,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_frontCamera,
                prices: [
                    {
                        price: 799,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_rearCamera,
                prices: [
                    {
                        price: 999,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_chargingPort,
                prices: [
                    {
                        price: 999,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_backPanel,
                prices: [
                    {
                        price: 999,
                        note: ""
                    }
                ]
            },
        ],
        notes: ""
    },


    // iPhone 8 Plus
    {
        id: 'iphone8Plus',

        name: 'iPhone 8 plus',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 1099,
                        note: qualityName_TmQuality
                    },
                    {
                        price: 1350,
                        note: qualityName_TS8
                    },
                    {
                        price: 1700,
                        note: qualityName_refurdbishedOriginal
                    }
                ]
            },
            {
                name: serviceName_battery,
                prices: [
                    {
                        price: 599,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_frontCamera,
                prices: [
                    {
                        price: 599,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_rearCamera,
                prices: [
                    {
                        price: 899,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_chargingPort,
                prices: [
                    {
                        price: 699,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_backPanel,
                prices: [
                    {
                        price: 999,
                        note: ""
                    }
                ]
            },
        ],
        notes: ""
    },
    // iPhone 8
    {
        id: 'iphone8',

        name: 'iPhone 8',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 899,
                        note: qualityName_TmQuality
                    },
                    {
                        price: 1100,
                        note: qualityName_TS8
                    },
                    {
                        price: 1400,
                        note: qualityName_refurdbishedOriginal
                    }
                ]
            },
            {
                name: serviceName_battery,
                prices: [
                    {
                        price: 599,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_frontCamera,
                prices: [
                    {
                        price: 599,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_rearCamera,
                prices: [
                    {
                        price: 699,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_chargingPort,
                prices: [
                    {
                        price: 599,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_backPanel,
                prices: [
                    {
                        price: 899,
                        note: ""
                    }
                ]
            },
        ],
        notes: ""
    },
    // iPhone 7 Plus
    {
        id: 'iphone7Plus',

        name: 'iPhone 7 plus',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 1099,
                        note: qualityName_TmQuality
                    },
                    {
                        price: 1350,
                        note: qualityName_TS8
                    },
                    {
                        price: 1700,
                        note: qualityName_refurdbishedOriginal
                    }
                ]
            },
            {
                name: serviceName_battery,
                prices: [
                    {
                        price: 499,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_frontCamera,
                prices: [
                    {
                        price: 599,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_rearCamera,
                prices: [
                    {
                        price: 799,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_chargingPort,
                prices: [
                    {
                        price: 599,
                        note: ""
                    }
                ]
            }
        ],
        notes: ""
    },
    // iPhone 7
    {
        id: 'iphone7',
        name: 'iPhone 7',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 899,
                        note: qualityName_TmQuality
                    },
                    {
                        price: 1100,
                        note: qualityName_TS8
                    },
                    {
                        price: 1400,
                        note: qualityName_refurdbishedOriginal
                    }
                ]
            },
            {
                name: serviceName_battery,
                prices: [
                    {
                        price: 499,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_frontCamera,
                prices: [
                    {
                        price: 499,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_rearCamera,
                prices: [
                    {
                        price: 699,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_chargingPort,
                prices: [
                    {
                        price: 499,
                        note: ""
                    }
                ]
            }
        ],
        notes: ""
    },
    // iPhone 6S Plus
    {
        id: 'iphone6SPlus',

        name: 'iPhone 6S Plus',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 799,
                        note: qualityName_TmQuality
                    },
                    {
                        price: 950,
                        note: qualityName_TS8
                    },
                    {
                        price: 1250,
                        note: qualityName_refurdbishedOriginal
                    }
                ]
            },
            {
                name: serviceName_battery,
                prices: [
                    {
                        price: 399,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_frontCamera,
                prices: [
                    {
                        price: 399,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_rearCamera,
                prices: [
                    {
                        price: 399,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_chargingPort,
                prices: [
                    {
                        price: 399,
                        note: ""
                    }
                ]
            }
        ],
        notes: ""
    },
    // iPhone 6S
    {
        id: 'iphone6S',

        name: 'iPhone 6S',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 699,
                        note: qualityName_TmQuality
                    },
                    {
                        price: 850,
                        note: qualityName_TS8
                    },
                    {
                        price: 1100,
                        note: qualityName_refurdbishedOriginal
                    }
                ]
            },
            {
                name: serviceName_battery,
                prices: [
                    {
                        price: 399,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_frontCamera,
                prices: [
                    {
                        price: 399,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_rearCamera,
                prices: [
                    {
                        price: 399,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_chargingPort,
                prices: [
                    {
                        price: 399,
                        note: ""
                    }
                ]
            }
        ],
        notes: ""
    },
    // iPhone 6 Plus
    {
        id: 'iphone6Plus',

        name: 'iPhone 6 Plus',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 699,
                        note: qualityName_TmQuality
                    },
                    {
                        price: 850,
                        note: qualityName_TS8
                    },
                    {
                        price: 1100,
                        note: qualityName_refurdbishedOriginal
                    }
                ]
            },
            {
                name: serviceName_battery,
                prices: [
                    {
                        price: 399,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_frontCamera,
                prices: [
                    {
                        price: 399,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_rearCamera,
                prices: [
                    {
                        price: 399,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_chargingPort,
                prices: [
                    {
                        price: 399,
                        note: ""
                    }
                ]
            }
        ],
        notes: ""
    },
    // iPhone 6
    {
        id: 'iphone6',

        name: 'iPhone 6',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 599,
                        note: qualityName_TmQuality
                    },
                    {
                        price: 699,
                        note: qualityName_TS8
                    },
                    {
                        price: 900,
                        note: qualityName_refurdbishedOriginal
                    }
                ]
            },
            {
                name: serviceName_battery,
                prices: [
                    {
                        price: 399,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_frontCamera,
                prices: [
                    {
                        price: 399,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_rearCamera,
                prices: [
                    {
                        price: 399,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_chargingPort,
                prices: [
                    {
                        price: 399,
                        note: ""
                    }
                ]
            }
        ],
        notes: ""
    },

    // iPhone 5SE
    {
        id: 'iphone5SE',

        name: 'iPhone 5SE',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 499,
                        note: qualityName_TmQuality
                    }
                ]
            },
            {
                name: serviceName_battery,
                prices: [
                    {
                        price: 299,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_frontCamera,
                prices: [
                    {
                        price: 299,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_rearCamera,
                prices: [
                    {
                        price: 299,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_chargingPort,
                prices: [
                    {
                        price: 299,
                        note: ""
                    }
                ]
            }
        ],
        notes: ""
    },
    // iPhone 5S
    {
        id: 'iphone5S',

        name: 'iPhone 5S',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 499,
                        note: qualityName_TmQuality
                    }
                ]
            },
            {
                name: serviceName_battery,
                prices: [
                    {
                        price: 299,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_frontCamera,
                prices: [
                    {
                        price: 299,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_rearCamera,
                prices: [
                    {
                        price: 249,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_chargingPort,
                prices: [
                    {
                        price: 199,
                        note: ""
                    }
                ]
            }
        ],
        notes: ""
    },
    // iPhone 5C
    {
        id: 'iphone5C',

        name: 'iPhone 5C',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 499,
                        note: qualityName_TmQuality
                    }
                ]
            },
            {
                name: serviceName_battery,
                prices: [
                    {
                        price: 299,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_frontCamera,
                prices: [
                    {
                        price: 299,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_rearCamera,
                prices: [
                    {
                        price: 199,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_chargingPort,
                prices: [
                    {
                        price: 199,
                        note: ""
                    }
                ]
            }
        ],
        notes: ""
    },
    // iPhone 5
    {
        id: 'iphone5',

        name: 'iPhone 5',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 399,
                        note: qualityName_TmQuality
                    }
                ]
            },
            {
                name: serviceName_battery,
                prices: [
                    {
                        price: 299,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_frontCamera,
                prices: [
                    {
                        price: 299,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_rearCamera,
                prices: [
                    {
                        price: 199,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_chargingPort,
                prices: [
                    {
                        price: 199,
                        note: ""
                    }
                ]
            }
        ],
        notes: ""
    },
    // iPhone 4S
    {
        id: 'iphone4S',

        name: 'iPhone 4S',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 399,
                        note: qualityName_TmQuality
                    }
                ]
            },
            {
                name: serviceName_battery,
                prices: [
                    {
                        price: 199,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_rearCamera,
                prices: [
                    {
                        price: 199,
                        note: ""
                    }
                ]
            }
        ],
        notes: ""
    },
    // iPhone 4
    {
        id: 'iphone4',

        name: 'iPhone 4',
        services: [
            {
                name: serviceName_screen,
                prices: [
                    {
                        price: 399,
                        note: qualityName_TmQuality
                    }
                ]
            },
            {
                name: serviceName_battery,
                prices: [
                    {
                        price: 199,
                        note: ""
                    }
                ]
            },
            {
                name: serviceName_rearCamera,
                prices: [
                    {
                        price: 199,
                        note: ""
                    }
                ]
            }
        ],
        notes: ""
    },
];
