import React from 'react';
import Section from "components/Section/Section.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import WhyUsCard from "components/MyCards/WhyUsCard.js"


// Assets
// import FastRepairImage from 'assets/img/Fast-Repair-icon-Retina.png';
import FastRepairImage from 'assets/img/icon/quick.svg';

// import WarrantyImage from 'assets/img/Warranty-Icon-Retina.png';
import WarrantyImage from 'assets/img/icon/warranty.svg';

// import TrainedTechniciansImage from 'assets/img/Trained-Technicians-icon-Retina.png';
import TrainedTechniciansImage from 'assets/img/icon/expert.svg';

// import CompetitivePricesImage from 'assets/img/Sale-Tag-icon.png';
import CompetitivePricesImage from 'assets/img/icon/price.svg';

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
                <GridContainer justify="center" classes={{ root: classes.root }}>

                    <GridItem xs={6} sm={6} md={1} lg={1} xl={1}>
                        <WhyUsCard title="Done Fast"
                            img={FastRepairImage}
                        />

                    </GridItem>

                    <GridItem xs={6} sm={6} md={1} lg={1} xl={1}>
                        <WhyUsCard title="Warranty"
                            img={WarrantyImage}
                        />
                    </GridItem>

                    {/* <GridItem xs={6} sm={6} md={1} lg={1} xl={1} >
                        <WhyUsCard title="Expert Repairs"
                            img={TrainedTechniciansImage}
                        />
                    </GridItem> */}

                    <GridItem xs={6} sm={6} md={1} lg={1} xl={1} >
                        <WhyUsCard title="Best Price"
                            img={CompetitivePricesImage}
                        />
                    </GridItem>

                </GridContainer>

            </div>

        </div>


    );
}

