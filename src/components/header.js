import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../components/css/header.css"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { MdPhoneIphone } from 'react-icons/md';
import { MdPerson } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#ffebde`,
      marginBottom: `0.5rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <button class="btn btn-outline-primary" id="header-btn" onClick={() => scrollTo('#about')}><FaCode /></button>
      <button class="btn btn-outline-primary" id="header-btn" onClick={() => scrollTo('#code')}><MdPerson /></button>
      <button class="btn btn-outline-primary" id="header-btn" onClick={() => scrollTo('#contact')}><MdPhoneIphone /></button>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
