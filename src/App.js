import React, { Component } from 'react';
import './App.css';

import TopHeader from "./views/pages/home/TopHeader/TopHeader.jsx";
import MainSection from "./views/pages/home/MainSection/MainSection.jsx";
import FixSection from "./views/pages/home/FixSection/FixSection.jsx";
import Footer from './views/sections/Footer/Footer'

import IconButton from '@material-ui/core/IconButton';
import MessengerIcon from 'components/MessengerIcon/MessengerIcon.jsx'


class App extends Component {

  render() {

    return (
      <div className="App">

        <TopHeader/>
        <MainSection/>
        <FixSection />
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
