import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './Header.css';
import links from '../../config/headerlinks';
import a from '../../config/externallinks';
import jayhackersLogoWings from '../../assets/images/jayhackersLogoWings.png';

const Header = () => (
  <header>
    <img src={jayhackersLogoWings} alt="Jayhackers" />
    <h1 id="logo">University of Kansas Information Security Club</h1>
    <nav>
      {links.map(l => (
        <Link exact to={l.path} key={l.name} className="intLink" activeClassName="is-active">
          {l.name}
        </Link>
      ))}
      {a.map(l => (
        <a href={l.path} key={l.name} className="extLink" target="_blank" rel="noopener noreferrer">
          {l.name}
        </a>
      ))}
    </nav>
  </header>
);

export default Header;
