import React, { Component } from 'react';
import "./MainSection.css";
import Header from "views/sections/Header/Header.js";
import HeaderLinks from "views/sections/Header/HeaderLinks.js";
import TypeWriter from "components/Animated/TypeWriter.js"
import Main from 'assets/img/main.png';

import WhyUsSection from "views/pages/home/WhyUsSection/WhyUsSection.js";

// import { makeStyles } from '@material-ui/core/styles';







class MainSection extends Component {


    render() {
        const styles = {
            main: {
                // width: "100%",
                height: "100vh",
                backgroundImage: `url(${Main})`
            },
            typeWriter: {
                position: "absolute",
                top: "25%",
                right: "25%"
            }

        };
        return (

            <div>


                <div>

                    <Header brand={'Mobilland'} leftLinks={<HeaderLinks />} />
                </div>
                <div
                // style={{
                //     // width: "100%",
                //     minHeight: "80vh",
                //     backgroundImage: `url(${Main})`,
                //     backgroundRepeat: "no-repeat",
                //     // backgroundAttachment: "fixed",
                //     backgroundPosition: "center top",
                //     // backgroundSize: "cover",
                //     backgroundSize: "100% auto",
                //     padding: 0,
                //     margin: 0
                // }}
                >

                    <div
                        style={{
                            // width: "100%",
                            position: "absolute",
                            top: "20%",
                            right: "15%"
                        }}
                    >

                        <TypeWriter />

                    </div>

                    <div
                        style={{
                            width: "40%",
                            position: "absolute",
                            top: "60%",
                            right: "0"
                        }}
                    >

                        <WhyUsSection />

                    </div>

                    <img
                        style={{

                            width: "100% ",
                            height: "100% ",
                            padding: 0,
                            margin: 0
                        }}
                        src={Main}></img>
                </div>

            </div >
        );
    }
}

export default MainSection;
