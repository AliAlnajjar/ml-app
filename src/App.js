import React, { Component } from 'react';
import './App.css';

import MainSection from "./views/pages/home/MainSection/MainSection.js";
import WhyUsSection from "./views/pages/home/WhyUsSection/WhyUsSection.js";

import FixSection from "./views/pages/home/FixSection/FixSection.js";
import OurServicesSection from "./views/pages/home/OurServicesSection/OurServicesSection.js";
import FindUSSection from "./views/pages/home/FindUsSection/FindUsSection.js";
import OffersSection from "./views/pages/home/OffersSection/OffersSection.js";



import Footer from "./views/sections/Footer/Footer.js";
class App extends Component {

  render() {
    return (
      <div className="App">
        <MainSection>
        </MainSection>

        <div >
          <img className="headSection"  height="25%" width="50%" src= "https://strongholdthemes.com/demos/techlife/demo7/wp-content/uploads/2018/04/slide1a.jpg" ></img>
        </div>


        <WhyUsSection />
        <FixSection />
        <OurServicesSection />
        <OffersSection />

        <FindUSSection />

        <Footer>
        </Footer>
      </div>
    );
  }
}

export default App;
