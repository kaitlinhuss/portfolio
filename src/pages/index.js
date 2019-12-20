import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import KHLogo from '../images/kh-logo-bounce.svg'
import "../components/css/index.css"

import { FaMapPin } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src={KHLogo} id="logo" alt="KH"/> 
    <div className="container">
      <a class="btn btn-outline-primary" href="https://www.linkedin.com/in/kaitlinhuss" target="_blank">LinkedIn</a>
      <a class="btn btn-outline-primary" href="https://github.com/kaitlinhuss" target="_blank">GitHub</a>
      <a class="btn btn-outline-primary" href="#" target="_blank">Resume</a>
    </div>
    <p className="home-text">software developer</p>
    <div className="container">
      <p className="home-text"><FaMapPin />tampa, fl </p>
    </div>
    <div className="bottom"></div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
