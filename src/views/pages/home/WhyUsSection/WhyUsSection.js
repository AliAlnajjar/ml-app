import React from 'react';
import Section from "components/Section/Section.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import WhyUsCard from "components/MyCards/WhyUsCard.js"


// Assets
import FastRepairImage from 'assets/img/Fast-Repair-icon-Retina.png';
import WarrantyImage from 'assets/img/Warranty-Icon-Retina.png';
import TrainedTechniciansImage from 'assets/img/Trained-Technicians-icon-Retina.png';
import CompetitivePricesImage from 'assets/img/Sale-Tag-icon.png';
import { makeStyles } from '@material-ui/core/styles';



const styles = {
    root: {
        width: "100%",
    },
    img: {
        width: "60px",
        height: "60px",
    },
    section: {
        paddingTop: "5px",
        paddingBottom: "25px"

    }
}
const useStyles = makeStyles(styles);


export default function WhyUsSection() {
    const classes = useStyles()

    return (


        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer classes={{ root: classes.root }}>
                    <GridItem xs={4} sm={4} md={4} lg={4} xl={4}>

                    </GridItem>

                    <GridItem xs={4} sm={4} md={1} lg={1} xl={1}>
                        <WhyUsCard title="Fast repair"
                            img={FastRepairImage}
                        />

                    </GridItem>
                    <GridItem xs={4} sm={4} md={1} lg={1} xl={1}>
                        <WhyUsCard title="1 year warranty"
                            img={WarrantyImage}
                        />

                    </GridItem>
                    <GridItem xs={4} sm={4} md={1} lg={1} xl={1} >
                        <WhyUsCard title="Trained technicians"
                            img={TrainedTechniciansImage}
                        />

                    </GridItem>
                    <GridItem xs={4} sm={4} md={1} lg={1} xl={1} >
                        <WhyUsCard title="Competitive prices"
                            img={CompetitivePricesImage}
                        />



                    </GridItem>
                    <GridItem xs={4} sm={4} md={4} lg={4} xl={4}>

                    </GridItem>
                </GridContainer>

            </div>

        </div>


    );
}

