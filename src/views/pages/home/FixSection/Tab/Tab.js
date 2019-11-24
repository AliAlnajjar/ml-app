import React, { Component } from 'react';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import SelectDevice from "./SelectDevice.js"
import SelectService from './SelectService.js';
import ShowPrice from './ShowPrice.js'
import Stepper from "./Stepper.js";

export default class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDevice: "",
            serviceList: [],
            selectedService: "",
            priceList: [],
            stepNumber: 0
        }
    }
    handelSelectDevice (selectedDevice){
        if (!selectedDevice){
            this.setState ( {
                selectedDevice: "",
                serviceList: [],
                selectedService: "",
                priceList: [],
                stepNumber: 0
            })
            console.log("no fucken selected device")
            return;
        }
        const serviceList = (this.props.deviceList.filter((device) => device.name == selectedDevice))[0].services.map(service=>service.name);
        this.setState({
            selectedDevice: selectedDevice,
            serviceList: serviceList,
            selectedService: "",
            priceList: [],
            stepNumber: 1
          })
    }
    handelSelectService (selectedService){
        const serviceList = (this.props.deviceList.filter((device) => device.name == this.state.selectedDevice))[0].services;
        const priceList = serviceList.filter(service =>service.name ==selectedService )[0].prices || []
        this.setState({
            selectedService: selectedService,
            priceList: priceList,
            stepNumber: 3
          })  
    }

    render() {
        const { device, deviceList } = this.props;
        return (
            <div>
                <Stepper device={device} activeStep = {this.state.stepNumber} />
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4} lg={4} xl={4}>
                        <SelectDevice
                            device={device}
                            deviceList=
                                        {this.props.deviceList.map((device) => {
                                            return {
                                                name: device.name,
                                            };
                                        })}
                            onSelectDevice = {this.handelSelectDevice.bind(this)}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} lg={4} xl={4}>
                        <SelectService 
                            serviceList= {this.state.serviceList}
                            selectedService = {this.state.selectedService}
                            onSelectService = {this.handelSelectService.bind(this)}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} lg={4} xl={4} >
                        <ShowPrice priceList={this.state.priceList}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}


