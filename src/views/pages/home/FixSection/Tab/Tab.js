import React, { Component } from 'react';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import ChooseDevice from "./ChooseDevice.js"
import ChooseService from './ChooseService.js';
import ShowPrice from './ShowPrice.js'
import Stepper from "./Stepper.js";

export default class Tab extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     choosenDevice: "",
    //     serviceList: [],
    //     choosenService: "",
    //     priceList: [],
    //     stepNumber: 0
    //     }
    // }
    // componentDidUpdate(prevProps) {
    //     const serviceList = this.props.deviceList.filter((device) => device.name == this.state.choosenDevice);
    //     const priceList = (this.props.deviceList.filter((device) => device.name == this.state.choosenDevice));
    //     // ) ? device.services.map((service) => {service.prices}) : null;
    //   this.setState({
    //     choosenDevice: "",
    //     serviceList: serviceList,
    //     choosenService: "",
    //     priceList: priceList,
    //     stepNumber: 0
    //   })
    // }
    render() {
        const { device, deviceList } = this.props;
        return (
            <div>
                <Stepper device={device} />
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4} lg={4} xl={4}>
                        <ChooseDevice
                            device={device}
                            deviceList=
                            {this.props.deviceList.map((device) => {
                                return {
                                    name: device.name,
                                };
                            })}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} lg={4} xl={4}>
                        {/* <ChooseService servicesList= {this.state.serviceList}
                            
                        /> */}
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} lg={4} xl={4} >
                        {/* <ShowPrice priceList={this.state.priceList}
                        /> */}
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}


