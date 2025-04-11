import React from "react";
import PropTypes from "prop-types";
import "./hero-section.scss";
import LogoBeans from "../../resources/Beans_logo.svg";

const HeroSection = ({ title, page }) => {
  const sectionClass = `hero-section hero-section--${page}`;

  const scrollToBottom = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  };

  return (
    <section className={sectionClass}>
      <div className="hero-section__content">
        <h1 className="hero-section__title">
          {title || "Everything You Love About Coffee"}
        </h1>
        {!title && (
          <>
            <img
              className="hero-section__logo-img"
              src={LogoBeans}
              alt="LogoBeans"
            />
            <p className="hero-section__subtitle">
              We makes every day full of energy and taste
              <br /> Want to try our beans?
            </p>
            <a
              href="#our-coffee"
              className="hero-section__button"
              onClick={scrollToBottom}
            >
              More
            </a>
          </>
        )}
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string,
  page: PropTypes.string.isRequired,
};

export default HeroSection;
