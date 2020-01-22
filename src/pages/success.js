import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Success from "../components/success"
import Footer from "../components/footer"
import "../components/css/index.css"

const SuccessPage = () => (
  <div>
  <Layout>
    <SEO title="Success"/>
    <Success/>
    <Footer/>
  </Layout>
  </div>
)

export default SuccessPage