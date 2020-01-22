import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Introduction from "../components/introduction"
import About from "../components/about"
import Code from "../components/code"
import Contact from "../components/contact"
import Footer from "../components/footer"
import "../components/css/index.css"

const IndexPage = () => (
  <div>
  <Layout>
    <SEO title="Home"/>
    <Introduction/>
    <About/>
    <Code/>
    <Contact/>
    <Footer/>
  </Layout>
  </div>
)

export default IndexPage