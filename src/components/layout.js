import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { window } from 'browser-monads';

import Header from "./header"
import Nav from "./nav"
import "../utils/main.scss"

const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: grid;
  grid-gap: 0;
  grid-template-columns: 100%;
  grid-template-rows: 4rem 1fr 3rem;
  grid-template-areas:
    'header'
    'main'
    'nav'
  ;

  @media (min-width: 900px) {
    grid-template-rows: 4rem 3rem 1fr;
    grid-template-areas:
      'header'
      'nav'
      'main'
    ;
  }
`

const Main = styled.main`
  grid-area: main;
  margin: 0.5rem;
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

const Layout = ({ children }) => {
  const [width, setWidth] = useState();
  const update = () => {
    debounce(setWidth(window.innerWidth));
  }
  window.addEventListener("resize", update)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          short_title
        }
      }
    }
  `)

  return (
    <Container>
      <Header siteTitle={width >= 937 ? data.site.siteMetadata.title : data.site.siteMetadata.short_title} />
      <Nav />
      <Main>{children}</Main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
