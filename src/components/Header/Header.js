import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./Header.css";
import links from "../../config/headerlinks";
import a from "../../config/externallinks";
import jayhackersLogoWings from '../../assets/images/jayhackersLogoWings.png';

const Header = () => (
  <header>
    <img src={jayhackersLogoWings} alt="Jayhackers" />
    <nav>
      <ul>
        {links.map(l => (
          <Link to={l.path} key={l.name} activeClassName="is-active">
            <li>{l.name}</li>
          </Link>
        ))}
        {a.map(l => (
          <a href={l.path} key={l.name} target="_blank">
            <li>{l.name}</li>
          </a>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
