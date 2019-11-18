import React from 'react';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import ChooseMobile from "./ChooseMobile.js"
import ChooseProblem from './ChooseProblem';
import ShowPrice from './ShowPrice'
import Stepper from "views/pages/home/FixSection/MobileTab/Stepper.js";

export default function MobileTab() {
    return (
        <div>
            <Stepper/>
            <GridContainer>
                
                <GridItem xs={12} sm={12} md={4} lg={4} xl={4}>

                    <ChooseMobile />
                </GridItem>
                <GridItem xs={12} sm={12} md={4} lg={4} xl={4}>
                    <ChooseProblem />
                </GridItem>
                <GridItem xs={12} sm={12} md={4} lg={4} xl={4} >
                <ShowPrice />
                </GridItem>
            </GridContainer>
        </div>
            
    );

}


