import React from "react";
import CoffeeCaps from "../../resources/coffeeCaps.jpg";
import ProductCards from "../../components/productCards/productCards";
import AboutPageContent from "../../components/aboutPageContent/aboutPageContent";
import data from "../../components/data/data";

const PleasurePage = () => (
  <>
    <AboutPageContent
      title="About our goods"
      imageSrc={CoffeeCaps}
      imageAlt="CoffeeCaps"
      subtitle="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."
      description="Afraid at highly months do things on at. Situation recommend objection do intention
      so questions. 
      As greatly removed calling pleased improve an. Last ask him cold feel
      met spot shy want. Children me laughing we prospect answered followed. At it went
      is song that held help face."
    />
    <ProductCards data={data} />
  </>
);

export default PleasurePage;
