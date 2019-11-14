import React, { Component } from 'react';
import 'App.css';
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";


class MainSection extends Component {
    render() {
        return (
            <div className="mainSection">
                <Header brand={'Mobilland'} leftLinks={<HeaderLinks />} />
                <div className=" shape-style-1">
                    <span class="span-150"></span>
                    <span class="span-50"></span>
                    <span class="span-50"></span>
                    <span class="span-75"></span>
                    <span class="span-100"></span>
                    <span class="span-75"></span>
                    <span class="span-50"></span>
                    <span class="span-100"></span>
                    <span class="span-50"></span>
                    <span class="span-100"></span>
                </div>
            </div>

        );
    }
}

export default MainSection;
