import React, { Component } from 'react';
import "./MainSection.css";
import Header from "views/sections/Header/Header.js";
import HeaderLinks from "views/sections/Header/HeaderLinks.js";
import TypeWriter from "components/Animated/TypeWriter.js"


class MainSection extends Component {
    render() {
        return (
            <div className="mainSection">
                <Header brand={'Mobilland'} leftLinks={<HeaderLinks />} />
                <TypeWriter />
 
            </div>
        );
    }
}

export default MainSection;
