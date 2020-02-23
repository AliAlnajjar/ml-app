import React from 'react';
import Section from "components/Section/Section.js"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import MediaCard from "components/MyCards/ServiceCard.js"


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    GridContainer: {
        gridAutoRows: "1fr"
    }
  
  }));
  
export default function OurServicesSection() {


   
const classes = useStyles();
    return (
        <Section title={"Andre tjenster"}>

            <GridContainer spacing={3} className={classes.GridContainer}>
                <GridItem xs={12} sm={12} md={4} lg={4} xl={4}  >
                    <MediaCard
                        title="Buy used phone"
                        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
                        btn1Lable="check available phones"
                        // img={BuyPhoneImage}
                    />

                </GridItem>
                <GridItem xs={12} sm={12} md={4} lg={4} xl={4}  >
                    <MediaCard
                        title="Sell your broken phone"
                        desc="Har du Defekte eller knuste mobil elle pc? Ta de med til oss, så vil vi gi en verdivurdering. Vi kan gjøre en bra deal til deg. "
                        btn1Lable="Sell your phone here "
                        // img={SellPhoneImage}
                    />

                </GridItem>
                <GridItem xs={12} sm={12} md={4} lg={4} xl={4}  >
                    <MediaCard
                        title="Buy accessories"
                        desc="Vi har stort utvalg av alt som du trenger for din. 
                        Vi kan bestille alt til deg. Vi lover beste priser i markedet.
                        "
                        btn1Lable="check accessories page"
                        // img={BuyAccessoriesImage}
                    />

                </GridItem>

            </GridContainer>

        </Section>
    );
}

