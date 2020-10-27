import React, { Component } from "react";
import "./App.css";

import TopHeader from "./views/pages/home/TopHeader/TopHeader.jsx";
import MainSection from "./views/pages/home/MainSection/MainSection.jsx";
import FixSection from "./views/pages/home/FixSection/FixSection.jsx";
import FixOptionsSection from "./views/pages/home/FixOptionsSection/FixOptionsSection.jsx";
import FAQ from "./views/pages/home/FAQ/FAQ.jsx";
import SelectTimeSlot from "./views/BookSection/SelectTimeSlot";
import Footer from "./views/sections/Footer/Footer";
import FliperText from "components/FliperText/FliperText.jsx";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FliperText /> */}
        <TopHeader />
        <div className="AppContent">
          <MainSection />
          <FixSection />
          <FixOptionsSection />
          <FAQ />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
