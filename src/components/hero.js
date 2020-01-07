/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "../components/css/layout.css"
import { FaMapPin } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { MdPerson } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';
import { FaKeyboard } from 'react-icons/fa';
import { FaSuitcase } from 'react-icons/fa';
import KHLogo from '../images/kh-logo-bounce.svg'
import scrollTo from 'gatsby-plugin-smoothscroll';

class Hero extends React.Component {

    render() {
        return (
            <div
            style={{
              margin: `0 auto`,
              maxWidth: 980,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <p id="top"></p>
                <img src={KHLogo} id="logo" alt="Kaitlin Huss"/> 
                <div className="container">
                  <p className="hero-subheading"><FaKeyboard /> software developer</p>
                  <p className="hero-subheading"><FaSuitcase /> currently @ jpmorgan chase &amp; co.</p>
                  <p className="hero-subheading"><FaMapPin />tampa, fl </p>
                  <p className="hero-subheading-link"><FaLinkedin /> linkedin.com/in/<a href="https://www.linkedin.com/in/kaitlinhuss" target="_blank" rel="noopener noreferrer">kaitlinhuss</a></p>
                  <p className="hero-subheading-link"><FaGithub /> github.com/<a href="https://github.com/kaitlinhuss" target="_blank" rel="noopener noreferrer">kaitlinhuss</a></p>
                  <button class="btn btn-outline-primary scrolldown-btn" onClick={() => scrollTo('#about')}><MdPerson /></button>
                  <button class="btn btn-outline-primary scrolldown-btn" onClick={() => scrollTo('#code')}><FaCode /></button>
                  <button class="btn btn-outline-primary scrolldown-btn" onClick={() => scrollTo('#contact')}><MdEmail /></button>
                </div>
          </div>
        )
      }
}

export default Hero

