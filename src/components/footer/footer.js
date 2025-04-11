import "./footer.scss";
import Logo from "../../resources/Logo_black.svg";
import LogoBeans from "../../resources/Beans_logo_black.svg";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul>
          <li>
            <Link to="/">
              <img
                src={Logo}
                alt="Coffee house logo"
                className="footer__logo"
              />
            </Link>
          </li>
          <li>
            <Link to="/about">Our coffee</Link>
          </li>
          <li>
            <Link to="/pleasure">For your pleasure</Link>
          </li>
        </ul>
      </nav>

      <img className="footer__logo-img" src={LogoBeans} alt="LogoBeans" />
    </footer>
  );
};

export default Footer;
