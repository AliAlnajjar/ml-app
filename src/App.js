import React, { Component } from 'react';
import './App.css';

import MainSection2 from "./views/pages/home/MainSection2/MainSection2.jsx";
import TopHeader from "./views/pages/home/TopHeader/TopHeader.jsx";
import Header2 from "./views/sections/Header2/Header2.jsx";
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SvgIcon from '@material-ui/core/SvgIcon';
import MessengerIcon from 'components/MessengerIcon/MessengerIcon.jsx'

import FixSection2 from "./views/pages/home/FixSection2/FixSection2.jsx";
import OurServicesSection from "./views/pages/home/OurServicesSection/OurServicesSection.js";
import FindUSSection from "./views/pages/home/FindUsSection/FindUsSection.js";
import OffersSection from "./views/pages/home/OffersSection/OffersSection.js";
import Footer from "./views/sections/Footer/Footer.js";

// var sectionStyle = {
//   backgroundImage: `url(${Background})`,
//   backgroundSize: "cover",
//   backgroundRepeat: "repeat",
//   backgroundColor: "rgba(0, 0, 0, 0)",
//   backgroundAttachment: "scroll",
//   minWidth: "358px",
//   left: "-15px",
//   width: "100%",
//   backgroundPosition: "50% -52px",
//   height: "50vh",
// };

class App extends Component {

  render() {

    return (
      <div className="App">
        <TopHeader></TopHeader>
        {/* <Header2></Header2> */}
        <MainSection2>
        </MainSection2>




        {/* <div style={sectionStyle}></div> */}
        {/* <div >
          <img className="headSection" height="25%" width="50%" src="https://strongholdthemes.com/demos/techlife/demo7/wp-content/uploads/2018/04/slide1a.jpg" ></img>
        </div> */}


        {/* <WhyUsSection /> */}
        <FixSection2 />
        {/* <OurServicesSection /> */}
        {/* <OffersSection /> */}

        {/* <FindUSSection /> */}

        {/* <Footer>
        </Footer> */}
        <div className="fab">
{/* <Fab  color="primary" aria-label="messenger" >
      </Fab> */}
      <IconButton 
      
      >
        <MessengerIcon></MessengerIcon>
           </IconButton>
        </div>
      
      </div>
    );
  }
}

export default App;
