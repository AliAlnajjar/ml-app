import React, { Component } from 'react';

import Tab from './Tab/Tab.js';

export default class FixSection2 extends Component {
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
const MobileList = [
    {
        name: 'iPhone 11',
        services: [
            {
                name: "Bytte skjerm",
                prices: [
                    {
                        price: 2499,
                        note: "refurdbished original"
                    }
                ]
            }
        ],
        notes: ""
    },

    {
        name: 'iPhone XS MAX',
        services: [
            {
                name: "Bytte skjerm",
                prices: [
                    {
                        price: 2599,
                        note: "Tm kvalitet"
                    },
                    {
                        price: 3500,
                        note: "refurdbished original"
                    }
                ]
            },
            {
                name: "Bytte batteri",
                prices: [
                    {
                        price: 1099,
                        note: ""
                    }
                ]
            },
            {
                name: "Front kamera",
                prices: [
                    {
                        price: 1099,
                        note: ""
                    }
                ]
            },
            {
                name: "Bak Kamera",
                prices: [
                    {
                        price: 1299,
                        note: ""
                    }
                ]
            },
            {
                name: "Lade port",
                prices: [
                    {
                        price: 1299,
                        note: ""
                    }
                ]
            },
            {
                name: "Bak glass",
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

    {
        name: 'iPhone XS',
        services: [
            {
                name: "Bytte skjerm",
                prices: [
                    {
                        price: 2099,
                        note: "Tm kvalitet"
                    },
                    {
                        price: 3000,
                        note: "refurdbished original"
                    }
                ]
            },
            {
                name: "Bytte batteri",
                prices: [
                    {
                        price: 899,
                        note: ""
                    }
                ]
            },
            {
                name: "Front kamera",
                prices: [
                    {
                        price: 899,
                        note: ""
                    }
                ]
            },
            {
                name: "Bak Kamera",
                prices: [
                    {
                        price: 1099,
                        note: ""
                    }
                ]
            },
            {
                name: "Lade port",
                prices: [
                    {
                        price: 1099,
                        note: ""
                    }
                ]
            },
            {
                name: "Bak glass",
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

    {
        name: 'iPhone XR',
        services: [
            {
                name: "Bytte skjerm",
                prices: [
                    {
                        price: 1799,
                        note: "Tm kvalitet"
                    },
                    {
                        price: 2400,
                        note: "refurdbished original"
                    }
                ]
            },
            {
                name: "Bytte batteri",
                prices: [
                    {
                        price: 799,
                        note: ""
                    }
                ]
            },
            {
                name: "Front kamera",
                prices: [
                    {
                        price: 699,
                        note: ""
                    }
                ]
            },
            {
                name: "Bak Kamera",
                prices: [
                    {
                        price: 899,
                        note: ""
                    }
                ]
            },
            {
                name: "Lade port",
                prices: [
                    {
                        price: 899,
                        note: ""
                    }
                ]
            },
            {
                name: "Bak glass",
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

    {
        name: 'iPhone X',
        services: [
            {
                name: "Bytte skjerm",
                prices: [
                    {
                        price: 2800,
                        note: "refurdbished original"
                    },
                    {
                        price: 2400,
                        note: "Oled soft"
                    },
                ]
            },
            {
                name: "Bytte batteri",
                prices: [
                    {
                        price: 799,
                        note: ""
                    }
                ]
            },
            {
                name: "Front kamera",
                prices: [
                    {
                        price: 799,
                        note: ""
                    }
                ]
            },
            {
                name: "Bak Kamera",
                prices: [
                    {
                        price: 999,
                        note: ""
                    }
                ]
            },
            {
                name: "Lade port",
                prices: [
                    {
                        price: 999,
                        note: ""
                    }
                ]
            },
            {
                name: "Bak glass",
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
];
