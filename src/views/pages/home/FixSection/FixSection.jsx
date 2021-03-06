import React, { Component } from "react";

import Tab from "./Tab/Tab.jsx";

export default class FixSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobiles: MobileList,
      isLoading: true,
    };
  }

  fetchData() {
    // Where we're fetching data from
    fetch(`https://mobilland.no/static/data/PriceList.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          mobiles: data,
          isLoading: false,
        });
        console.log(data);
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <div>
        {!this.state.isLoading ? (
          <Tab device={"mobil"} deviceList={this.state.mobiles} />
        ) : (
          ""
        )}
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
  {
    id: "iphone11ProMax",

    name: "iPhone 11 Pro Max",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 3500,
            note: "Kopi",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphone11Pro",

    name: "iPhone 11 Pro",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 3000,
            note: "Kopi",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphone11",
    name: "iPhone 11",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1500,
            note: "Kopi",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphoneXSMax",
    name: "iPhone XS MAX",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 2500,
            note: "Kopi",
          },
          {
            price: 3200,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 799,
            note: "",
          },
        ],
      },
      {
        name: "Frontkamera",
        prices: [
          {
            price: 1099,
            note: "",
          },
        ],
      },
      {
        name: "Hovedkamera",
        prices: [
          {
            price: 1299,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 1299,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 1099,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphoneXS",
    name: "iPhone XS",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1500,
            note: "Kopi",
          },
          {
            price: 2500,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 799,
            note: "",
          },
        ],
      },
      {
        name: "Frontkamera",
        prices: [
          {
            price: 899,
            note: "",
          },
        ],
      },
      {
        name: "Hovedkamera",
        prices: [
          {
            price: 1099,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 1099,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 1099,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphoneXR",
    name: "iPhone XR",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1400,
            note: "Kopi",
          },
          {
            price: 1800,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 799,
            note: "",
          },
        ],
      },
      {
        name: "Frontkamera",
        prices: [
          {
            price: 699,
            note: "",
          },
        ],
      },
      {
        name: "Hovedkamera",
        prices: [
          {
            price: 899,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 899,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 899,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphoneX",
    name: "iPhone X",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1500,
            note: "Kopi",
          },
          {
            price: 2500,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 799,
            note: "",
          },
        ],
      },
      {
        name: "Frontkamera",
        prices: [
          {
            price: 799,
            note: "",
          },
        ],
      },
      {
        name: "Hovedkamera",
        prices: [
          {
            price: 999,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 999,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 999,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphone8Plus",

    name: "iPhone 8 plus",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1000,
            note: "Kopi",
          },
          {
            price: 1300,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Frontkamera",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Hovedkamera",
        prices: [
          {
            price: 899,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 699,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 999,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphone8",

    name: "iPhone 8",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 800,
            note: "Kopi",
          },
          {
            price: 1000,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Frontkamera",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Hovedkamera",
        prices: [
          {
            price: 699,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 899,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphone7Plus",

    name: "iPhone 7 plus",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 800,
            note: "Kopi",
          },
          {
            price: 1100,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Frontkamera",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Hovedkamera",
        prices: [
          {
            price: 799,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphone7",
    name: "iPhone 7",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 700,
            note: "Kopi",
          },
          {
            price: 1000,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Frontkamera",
        prices: [
          {
            price: 499,
            note: "",
          },
        ],
      },
      {
        name: "Hovedkamera",
        prices: [
          {
            price: 699,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 499,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphone6SPlus",

    name: "iPhone 6S Plus",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 650,
            note: "Kopi",
          },
          {
            price: 800,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Frontkamera",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Hovedkamera",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphone6S",

    name: "iPhone 6S",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 600,
            note: "Kopi",
          },
          {
            price: 750,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Frontkamera",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Hovedkamera",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphone6Plus",

    name: "iPhone 6 Plus",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 600,
            note: "Kopi",
          },
          {
            price: 750,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Frontkamera",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Hovedkamera",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphone6",

    name: "iPhone 6",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 500,
            note: "Kopi",
          },
          {
            price: 700,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Frontkamera",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Hovedkamera",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphone5SE",

    name: "iPhone 5SE",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 399,
            note: "Kopi",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 299,
            note: "",
          },
        ],
      },
      {
        name: "Frontkamera",
        prices: [
          {
            price: 299,
            note: "",
          },
        ],
      },
      {
        name: "Hovedkamera",
        prices: [
          {
            price: 299,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 299,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphone5S",

    name: "iPhone 5S",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 399,
            note: "Kopi",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 299,
            note: "",
          },
        ],
      },
      {
        name: "Frontkamera",
        prices: [
          {
            price: 299,
            note: "",
          },
        ],
      },
      {
        name: "Hovedkamera",
        prices: [
          {
            price: 249,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 199,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphone5C",

    name: "iPhone 5C",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 399,
            note: "Kopi",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 299,
            note: "",
          },
        ],
      },
      {
        name: "Frontkamera",
        prices: [
          {
            price: 299,
            note: "",
          },
        ],
      },
      {
        name: "Hovedkamera",
        prices: [
          {
            price: 199,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 199,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphone5",

    name: "iPhone 5",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 299,
            note: "Kopi",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 299,
            note: "",
          },
        ],
      },
      {
        name: "Frontkamera",
        prices: [
          {
            price: 299,
            note: "",
          },
        ],
      },
      {
        name: "Hovedkamera",
        prices: [
          {
            price: 199,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 199,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphone4S",

    name: "iPhone 4S",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 299,
            note: "Kopi",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 199,
            note: "",
          },
        ],
      },
      {
        name: "Hovedkamera",
        prices: [
          {
            price: 199,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "iphone4",
    name: "iPhone 4",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 299,
            note: "Kopi",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 199,
            note: "",
          },
        ],
      },
      {
        name: "Hovedkamera",
        prices: [
          {
            price: 199,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "Note9",

    name: "Note 9",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 3000,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 899,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 649,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "Note8",

    name: "Note 8",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 2800,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 899,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 649,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "GalaxyS5",

    name: "Galaxy S5",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1600,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 349,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "GalaxyS6",

    name: "Galaxy S6",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1800,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 349,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "GalaxyS6Edge",

    name: "Galaxy S6 Edge",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 2200,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 349,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "GalaxyS6EdgePlus",

    name: "Galaxy S6 Edge Plus",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 2200,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 349,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "GalaxyS7",

    name: "Galaxy S7",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1700,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 349,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "GalaxyS7Edge",

    name: "Galaxy S7 Edge",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 2400,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 349,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "GalaxyS8",

    name: "Galaxy S8",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 2650,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 499,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 699,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 549,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "GalaxyS8Plus",

    name: "Galaxy S8 Plus",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 2750,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 499,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 699,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 549,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "GalaxyS9",

    name: "Galaxy S9",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 2900,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 699,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 649,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "GalaxyS9Plus",

    name: "Galaxy S9 Plus",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 3100,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 699,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 649,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "GalaxyS10",

    name: "Galaxy S10",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 2900,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 899,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 649,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "GalaxyS10e",

    name: "Galaxy S10e",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 2400,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 799,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 649,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "GalaxyS10Plus",

    name: "Galaxy S10 Plus",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 3200,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 899,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 649,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungA32017",

    name: "Samsung A3 2017",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1400,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungA52016",

    name: "Samsung A5 2016",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1400,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungA52017",

    name: "Samsung A5 2017",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1400,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungA62018",

    name: "Samsung A6 2018",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1250,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungA6Plus",

    name: "Samsung A6 Plus",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1400,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungA7",

    name: "Samsung A7",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1200,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungA72018",

    name: "Samsung A7 2018",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1300,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungA82018",

    name: "Samsung A8 2018",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1500,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungA92018",

    name: "Samsung A9 2018",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1700,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungA10",

    name: "Samsung A10",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1100,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungA20e",

    name: "Samsung A20e",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1100,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungA40",

    name: "Samsung A40",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1300,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungA50",

    name: "Samsung A50",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1300,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungA70",

    name: "Samsung A70",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1700,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungA80",

    name: "Samsung A80",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1800,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungJ32016",

    name: "Samsung J3 2016",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1200,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungJ32017",

    name: "Samsung J3 2017",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1200,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungJ4",

    name: "Samsung J4",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1200,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungJ4Plus",

    name: "Samsung J4 Plus",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1300,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungJ52017",

    name: "Samsung J5 2017",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1300,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungJ62018",

    name: "Samsung J6 2018",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1400,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungJ6Plus",

    name: "Samsung J6 Plus",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1400,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "SamsungJ72017",

    name: "Samsung J7 2017",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1400,
            note: "Original",
          },
        ],
      },
      {
        name: "Batteri",
        prices: [
          {
            price: 399,
            note: "",
          },
        ],
      },
      {
        name: "Ladeport",
        prices: [
          {
            price: 599,
            note: "",
          },
        ],
      },
      {
        name: "Bakglass",
        prices: [
          {
            price: 449,
            note: "",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "HuaweiP30Pro",
    name: " HuaweiP 30 Pro",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 3100,
            note: "Original",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "HuaweiP30",
    name: "Huawei P30",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 2200,
            note: "Original",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "HuaweiP30Lite",
    name: "Huawei P30 Lite",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1400,
            note: "Original",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "HuaweiP20Pro",
    name: "Huawei P20 Pro",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 2900,
            note: "Original",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "HuaweiP20",

    name: "Huawei P20",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 2500,
            note: "Original",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "HuaweiP20Lite",

    name: "Huawei P20 Lite",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1300,
            note: "Original",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "HuaweiPSmart2019",

    name: "Huawei P Smart 2019",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1200,
            note: "Original",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "HuaweiPsmartPlus",

    name: "Huawei PSmart Plus",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1300,
            note: "Original",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "HuaweiPSmart",

    name: "Huawei P Smart",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1200,
            note: "Original",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "HuaweiP10",

    name: "Huawei P 10",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1200,
            note: "Original",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "HuaweiP10Lite",

    name: "Huawei P 10 Lite",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1200,
            note: "Original",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "HuaweiP9",
    name: "Huawei P 9",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1200,
            note: "Original",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "HuaweiMate20Pro",

    name: "Huawei Mate 20 Pro",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 3300,
            note: "Original",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "HuaweiMate20Lite",

    name: "Huawei Mate 20 Lite",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1200,
            note: "Original",
          },
        ],
      },
    ],
    notes: "",
  },
  {
    id: "HuaweiMate10Lite",
    name: "Huawei Mate 10 Lite",
    services: [
      {
        name: "Skjerm",
        prices: [
          {
            price: 1100,
            note: "Original",
          },
        ],
      },
    ],
    notes: "",
  },
];
