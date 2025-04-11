import "./header.scss";
import Logo from "../../resources/Logo.svg";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">
              <img
                src={Logo}
                alt="Coffee house logo"
                className="header__logo"
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
    </header>
  );
};

export default Header;
