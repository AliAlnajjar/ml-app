import React, { Component } from 'react';
import './App.css';

import MainSection from "./views/pages/home/MainSection/MainSection.js";
import FixSection from "./views/pages/home/FixSection/FixSection.js";

import Footer from "./views/sections/Footer/Footer.js";

class App extends Component {

  render() {
    return (
      <div className="App">
        <MainSection>
        </MainSection>

        <FixSection>
        </FixSection>

        <Footer>
        </Footer>
      </div>
    );
  }
}

export default App;
