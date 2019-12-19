import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import KHLogo from '../images/kh-logo-bounce.svg'
import "../components/css/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src={KHLogo} id="logo" alt="KH" /> 
    <div className="container">
      <button type="button" class="btn btn-outline-primary">LinkedIn</button>
      <button type="button" class="btn btn-outline-primary">GitHub</button>
      <button type="button" class="btn btn-outline-primary">Resume</button>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
