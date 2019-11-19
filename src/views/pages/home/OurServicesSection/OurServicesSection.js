import React from 'react';
import Section from "components/Section/Section.js"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import MediaCard from "components/MyCards/ServiceCard.js"

// Assets
import BuyPhoneImage from 'assets/img/Replacement-Phones-Icon-Retina.png';
import SellPhoneImage from 'assets/img/Broken-Phones-Icon-Retina.png';
import BuyAccessoriesImage from 'assets/img/Accessories-Icon-Retina.png';





export default function OurServicesSection() {

    return (
        <Section title={"Other Services"}>

            <GridContainer>
                <GridItem xs={12} sm={12} md={4} lg={4} xl={4}  >
                    <MediaCard
                        title="Buy used phone"
                        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        btn1Lable="check available phones"
                        img={BuyPhoneImage}
                    />

                </GridItem>
                <GridItem xs={12} sm={12} md={4} lg={4} xl={4}  >
                    <MediaCard
                        title="Sell your broken phone"
                        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        btn1Lable="Sell your phone here "
                        img={SellPhoneImage}
                    />

                </GridItem><GridItem xs={12} sm={12} md={4} lg={4} xl={4}  >
                    <MediaCard
                        title="Buy accessories"
                        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        btn1Lable="check accessories page"
                        img={BuyAccessoriesImage}
                    />

                </GridItem>

            </GridContainer>

        </Section>
    );
}

