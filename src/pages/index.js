import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Code from "../components/code"
import Contact from "../components/contact"
import SEO from "../components/seo"
import "../components/css/index.css"

const IndexPage = () => (
  <div>
  <Hero/>
  <Layout>
    <SEO title="Home"/>
    <About/>
    <Code/>
    <Contact/>
  </Layout>
  </div>
)

export default IndexPage

