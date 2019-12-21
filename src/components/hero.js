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
import { MdPhoneIphone } from 'react-icons/md';
import { MdPerson } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';
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
                <p className="home-text">software developer</p>
                <p className="home-text">currently employed @ jpmorgan chase & co.</p>
                <div className="container">
                <p className="home-text"><FaMapPin />tampa, fl </p>
                <p className="home-text" href="https://www.linkedin.com/in/kaitlinhuss" target="_blank"><FaLinkedin /> linkedin.com/in/kaitlinhuss</p>
                <p className="home-text" href="https://github.com/kaitlinhuss" target="_blank"><FaGithub /> github.com/kaitlinhuss</p>
                <button class="btn btn-outline-primary scrolldown-btn" onClick={() => scrollTo('#about')}><MdPerson /></button>
                <button class="btn btn-outline-primary scrolldown-btn" onClick={() => scrollTo('#code')}><FaCode /></button>
                <button class="btn btn-outline-primary scrolldown-btn" onClick={() => scrollTo('#contact')}><MdPhoneIphone /></button>
                </div>
          </div>
        )
      }
}

export default Hero

