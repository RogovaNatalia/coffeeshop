import React from "react";
import Drinking from "../../resources/drinking_coffee.jpg";
import AboutPageContent from "../../components/aboutPageContent/aboutPageContent";
// import ProductCards from "../../components/productCards/productCards";
// import data from "../../components/data/data";
import ProductList from "../../components/searchBar/searchBar";

const AboutPage = () => (
  <>
    <AboutPageContent
      title="About our beans"
      imageSrc={Drinking}
      imageAlt="LogoBeans"
      subtitle="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."
      description="Afraid at highly months do things on at. Situation recommend objection do intention
      so questions. 
      As greatly removed calling pleased improve an. Last ask him cold feel
      met spot shy want. Children me laughing we prospect answered followed. At it went
      is song that held help face."
    />
    <ProductList />
    {/* <ProductCards data={data} /> */}
  </>
);

export default AboutPage;
