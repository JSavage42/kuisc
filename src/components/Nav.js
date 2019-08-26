import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { window } from 'browser-monads'

const NavBar = styled.nav`
  background: #1c53b3;
  border-top-left-radius: 11px;
  border-top-right-radius: 11px;
  bottom: 0;
  box-shadow: 0 -5px 15px #00000099;
  display: flex;
  font-size: .75rem;
  grid-area: nav;
  grid-column: -1 / -2;
  justify-content: space-evenly;
  margin-top: auto;
  max-width: 100vw;
  position: sticky;
  z-index: 9999;

  a {
    color: #fff;
    padding: 1rem;
    text-decoration: none;

    &:visited {
      color: #fff;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 900px) {
    box-shadow: 0 5px 5px #00000099;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin: 0;
    position: sticky;
    left: 0;
    top: 0;
    font-size: 1rem;
    justify-content: space-evenly;
  }
`

function debounce(func, wait = 10, immediate = true) {
  var timeout
  return function() {
    var context = this,
      args = arguments
    var later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth)

  const update = () => {
    debounce(setWidth(window.innerWidth))
  }
  window.addEventListener("resize", update)

  return(
    <NavBar>
      {width >= 900 && <Link to="/">Home</Link>}
      <Link to="/about">About</Link>
      {width >= 900 && <Link to="/media">Media</Link>}
      <Link to="/sponsors">Sponsors</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/news">News</Link>
      {/*
      <a
        href="http://labs.kuisc.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Labs
      </a>
      */}
      <a
        href="https://jayhackers.slack.com/signup"
        target="_blank"
        rel="noopener noreferrer"
      >
        Slack
      </a>
      {width >= 900 && (
        <React.Fragment>
          <a
            href="https://twitter.com/KUInfoSec"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com/KUInfoSecClub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </React.Fragment>
      )}
    </NavBar>
  )
}

export default Nav;
