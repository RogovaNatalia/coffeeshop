import React from "react";
import "./aboutPageContent.scss";
import LogoBeans from "../../resources/Beans_logo_black.svg";

const AboutPageContent = ({
  title,
  imageSrc,
  imageAlt,
  subtitle,
  description,
}) => {
  return (
    <div className="aboutPage">
      <img className="aboutPage__img" src={imageSrc} alt={imageAlt} />
      <div className="aboutPage__container">
        <h1 className="aboutPage__title">{title}</h1>
        <img className="aboutPage__logo-img" src={LogoBeans} alt="LogoBeans" />
        <p className="aboutPage__subtitle">{subtitle}</p>
        <p className="aboutPage__description">{description}</p>
      </div>
    </div>
  );
};

export default AboutPageContent;
