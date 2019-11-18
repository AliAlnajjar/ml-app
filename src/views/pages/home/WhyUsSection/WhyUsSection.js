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
import {makeStyles} from '@material-ui/core/styles';



const styles = {
  root: {
      width: "100%",
  },
  img :{
      width:"60px",
      height:"60px",
  },
  section:{
      paddingTop:0

  }

}
const useStyles = makeStyles(styles);


export default function WhyUsSection() {
  const classes = useStyles()

    return (
        <Section className={classes.section}>
                <GridContainer classes = {{root: classes.root}}>
                <GridItem xs={6} sm={6} md={3} lg={2} xl={3}>
                      
                    </GridItem>
                
                    <GridItem xs={6} sm={6} md={3} lg={2} xl={3}>
                      <WhyUsCard title="Fast repair"
                        img={FastRepairImage}
                        />
                      
                    </GridItem>
                    <GridItem xs={6} sm={6} md={3} lg={2} xl={3}>
                    <WhyUsCard title="1 year warranty"
                        img={WarrantyImage}
                        />
                         
                    </GridItem>
                    <GridItem xs={6} sm={6} md={3} lg={2} xl={3} >
                    <WhyUsCard title="Trained technicians"
                        img={TrainedTechniciansImage}
                        />

                    </GridItem>
                    <GridItem xs={6} sm={6} md={3} lg={2} xl={3} >
                    <WhyUsCard title="Competitive prices"
                        img={CompetitivePricesImage}
                        />
                    

                     
                    </GridItem>
                    <GridItem xs={6} sm={6} md={3} lg={2} xl={3}>
                      
                    </GridItem>
                </GridContainer>


        </Section>
    );
}

