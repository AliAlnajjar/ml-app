import React, { Component } from 'react';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import ChooseDevice from "./ChooseDevice.js"
import ChooseService from './ChooseService.js';
import ShowPrice from './ShowPrice.js'
import Stepper from "./Stepper.js";

export default class Tab extends Component() {
    constructor(props) {
        super(props);
        this.state = {
            choosenDevice: "",
            problemsList: {},
            price: "",
            activeTab: "mobile"
        }
    }
    render() {
        const { device, servicesList } = this.props;
        return (
            <div>
                <Stepper device={device} />
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4} lg={4} xl={4}>
                        <ChooseDevice
                            device={device}
                            deviceList=
                            {servicesList.map((device) => {
                                return {
                                    id: device.id,
                                    name: device.name,
                                };
                            })}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} lg={4} xl={4}>
                        <ChooseService problemsList=
                            {servicesList.filter((device) => {
                                return (device.id = this.state.choosenDevice) ? device.pricies : null;
                            })}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} lg={4} xl={4} >
                        <ShowPrice priceList=
                            {servicesList.filter((device) => {
                                return (device.id = this.state.choosenDevice) ? device.pricies : null;
                            })}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}


