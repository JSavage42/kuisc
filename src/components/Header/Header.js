import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./Header.css";
import links from "../../config/headerlinks";
import a from "../../config/externallinks";
import jayhackersLogoWings from "../../assets/images/jayhackersLogoWings.png";
// import { ReactComponent as Home } from "../../assets/images/svg/home.svg";
// import { ReactComponent as About } from "../../assets/images/svg/question-mark.svg";
// import { ReactComponent as Media } from "../../assets/images/svg/camera.svg";
// import { ReactComponent as Sponsors } from "../../assets/images/svg/hand-shake.svg";
// import { ReactComponent as Calendar } from "../../assets/images/svg/calendar.svg";
// import { ReactComponent as News } from "../../assets/images/svg/newspaper.svg";
// import { ReactComponent as Slack } from "../../assets/images/svg/slack.svg";
// import { ReactComponent as Twitter } from "../../assets/images/svg/twitter.svg";
// import { ReactComponent as GitHub } from "../../assets/images/svg/github.svg";

const Header = () => (
  <header>
    <img src={jayhackersLogoWings} alt="Jayhackers" />
    <h1 id="logo">University of Kansas Information Security Club</h1>
    <nav>
      {links.map(l => (
        <Link
          exact
          to={l.path}
          key={l.name}
          className="intLink"
          activeClassName="is-active"
        >
          {l.name}
        </Link>
      ))}
      {a.map(l => (
        <a
          href={l.path}
          key={l.name}
          className="extLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          {l.name}
        </a>
      ))}
    </nav>
  </header>
);

export default Header;
