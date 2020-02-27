import React, { Component } from 'react';
import './App.css';

import TopHeader from "./views/pages/home/TopHeader/TopHeader.jsx";
import MainSection from "./views/pages/home/MainSection/MainSection.jsx";
import FixSection from "./views/pages/home/FixSection/FixSection.jsx";
import FixOptionsSection from './views/pages/home/FixOptionsSection/FixOptionsSection.jsx'
import FAQ from './views/pages/home/FAQ/FAQ.jsx'

import Footer from './views/sections/Footer/Footer'

import IconButton from '@material-ui/core/IconButton';
import MessengerIcon from 'components/MessengerIcon/MessengerIcon.jsx'


class App extends Component {

  render() {

    return (
      <div className="App">
        <TopHeader />
        <div className="AppContent">
          <MainSection />
          <FixSection />
          <FixOptionsSection />
          <FAQ />
        </div>
        <Footer />
        <div className="fab">
          <IconButton >
            <MessengerIcon></MessengerIcon>
          </IconButton>
        </div>


      </div>
    );
  }
}

export default App;
