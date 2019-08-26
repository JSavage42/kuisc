import { Link } from "gatsby"
import styled from 'styled-components'
import PropTypes from "prop-types"
import React from "react"

const Head = styled.header`
  background: #1c53b3;
  color: #fff;
  grid-area: header;
  margin-bottom: 1.45rem;
  text-align: center;
  max-width: 100%;

  h1 a {
    color: #fff;
    text-decoration: none;

    &:visted {
      color: #fff;
    }
  }

  @media (min-width: 900px) {
    margin-bottom: 0;
  }
`

const Header = ({ siteTitle }) => (
  <Head>
    <h1 style={{ margin: 0 }}>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
  </Head>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
