import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
// My components
import SelectDevice from "./SelectDevice.jsx"
import SelectService from './SelectService.jsx';
import ShowPrice from './ShowPrice.jsx'
// Styles
import { makeStyles } from '@material-ui/core/styles';
import './Tab.css'

export default class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDevice: "",
            serviceList: [],
            selectedService: "",
            priceList: [],
            stepNumber: 1
        }
    }
    handelSelectDevice(selectedDevice) {
        if (!selectedDevice) {
            this.setState({
                selectedDevice: "",
                serviceList: [],
                selectedService: "",
                priceList: [],
                stepNumber: 1
            })
            return;
        }
        const serviceList = (this.props.deviceList.filter((device) => device.name == selectedDevice))[0].services.map(service => service.name);
        this.setState({
            selectedDevice: selectedDevice,
            serviceList: serviceList,
            selectedService: "",
            priceList: [],
            stepNumber: 2
        })
    }
    handelSelectService(selectedService) {
        const serviceList = (this.props.deviceList.filter((device) => device.name == this.state.selectedDevice))[0].services;
        const priceList = serviceList.filter(service => service.name == selectedService)[0].prices || []
        this.setState({
            selectedService: selectedService,
            priceList: priceList,
            stepNumber: 3
        })
    }
    render() {
        return (
            <div className="root">
                <Grid container spacing={0}>
                    <Grid item xs={12} md={4} lg={4} >
                        <Step
                            stepNumber="1"
                            stepTitle="Velg mobilen din"
                            active={this.state.stepNumber >= 1}
                        ></Step>
                        <div className="container">
                            <SelectDevice
                                device="mobil"
                                deviceList={this.props.deviceList.map((device) => {
                                    return {
                                        name: device.name,
                                        id: device.id
                                    };
                                })}
                                onSelectDevice={this.handelSelectDevice.bind(this)}
                            />

                        </div>
                    </Grid>
                    <Grid item xs={12} md={5} lg={5} >
                        <Step
                            stepNumber="2"
                            stepTitle="Velg feil på mobil"
                            active={this.state.stepNumber >= 2}
                        ></Step>
                        <div className="container">
                            <SelectService
                                serviceList={this.state.serviceList}
                                // selectedService={this.state.selectedService}
                                onSelectService={this.handelSelectService.bind(this)}
                            />
                        </div>

                    </Grid>
                    <Grid item xs={12} md={3} lg={3} >
                        <Step
                            stepNumber="3"
                            stepTitle="Sjekk pris"
                            active={this.state.stepNumber >= 3}
                        ></Step>
                        <div className="container">
                            <ShowPrice
                                selectedService={this.state.selectedService}
                                priceList={this.state.priceList}
                            ></ShowPrice>
                        </div>
                    </Grid>

                    <Grid item xs={12} >

                        <div className="container NB">
                            NB!! Om du ikke finner din mobil her eller pris for en del som må repareres, bare å ta kontakt. Vi kan bestille deler for alle modeller.
                        </div>
                    </Grid>

                </Grid>
            </div >
        );
    }

}

/////////////////////Step ///////////////////////////
const stepStyles = {
    step: {
        margin: "8px",
        display: "flex",
        justifyContent: "center",
        ['@media (max-width:959px)']: { // eslint-disable-line no-useless-computed-key
            justifyContent: "flex-start",

        },

    },
}
const useStepStyles = makeStyles(stepStyles);

const Step = (props) => {
    const classes = useStepStyles()
    return (
        <div className={classes.step}>
            <StepHeader
                stepNumber={props.stepNumber}
                stepTitle={props.stepTitle}
                active={props.active}
            ></StepHeader>
        </div>
    )
}

/////////////////////Step Header/////////////////////
const stepHeaderStyles = {
    stepHeader: {
        display: "flex"
    },
}
const useStepHeaderStyles = makeStyles(stepHeaderStyles);

const StepHeader = (props) => {
    const classes = useStepHeaderStyles()
    return (
        <div className={classes.stepHeader}>
            <StepNumber
                value={props.stepNumber}
                active={props.active}
            ></StepNumber>
            <StepTitle
                value={props.stepTitle}
                active={props.active}
            >
            </StepTitle>
        </div>

    )
}

/////////////////////Step Number/////////////////////
const stepNumberStyles = {
    stepNumber: {
        // background: "#7f5eff",
        height: "30px",
        width: "30px",
        borderRadius: "50% 10% 50% 50%",
        display: "flex",
        fontSize: "1.5rem",
        // color: "#FFFFFF",
        marginRight: "30px",
        fontWeight: 700,
        fontFamily: "Montserrat, sans-serif",
        justifyContent: "center",
    },
    // stepNumber_now: {
    //     background: "#7f5eff",
    //     color: "#FFFFFF",
    // },
    stepNumber_done: {
        background: "#00A99D",
        color: "#FFFFFF",
    },
    stepNumber_later: {
        background: "grey",
        color: "#FFFFFF",
    },

}
const useStepNumberStyles = makeStyles(stepNumberStyles);

const StepNumber = (props) => {
    const classes = useStepNumberStyles()
    return (
        <span className={classes.stepNumber + ` ${props.active ? classes.stepNumber_done : classes.stepNumber_later}`}>{props.value}</span>
    )
}

/////////////////////Step Title//////////////////////
const stepTitleStyles = {
    stepTitle: {
        fontSize: "1.5rem",
        fontFamily: "Montserrat, sans-serif",
        color: "#000000",
    },
    stepTitle_done: {
        fontWeight: 700,
    },
    stepTitle_later: {
        fontWeight: 500,
    },
}
const useStepTitleStyles = makeStyles(stepTitleStyles);
const StepTitle = (props) => {
    const classes = useStepTitleStyles()
    return (
        <span className={classes.stepTitle + ` ${props.active ? classes.stepTitle_done : classes.stepTitle_later}`}>{props.value}</span>
    )
}




