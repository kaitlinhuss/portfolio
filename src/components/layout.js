/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyIcon from '../images/gatsby-icon.png'
import GithubIcon from '../images/github-icon.png'
import NetlifyIcon from '../images/netlify-icon.png'
import NamecheapIcon from '../images/namecheap-icon.png'
import { MdCopyright } from 'react-icons/md';
import "./css/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 2000,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
        <MdCopyright /> Kaitlin Huss {new Date().getFullYear()} | Built with <a href="https://www.gatsbyjs.org">
            <img src={GatsbyIcon} className="copyright-icon" alt="GatsbyJS" /> 
          </a>
          , available on <a href="https://github.com/">
            <img src={GithubIcon} className="copyright-icon" alt="GitHub" /> 
          </a>
          , deployed with <a href="https://www.netlify.com/">
            <img src={NetlifyIcon} className="copyright-icon" alt="Netlify" /> 
          </a>, to <a href="https://www.namecheap.com/">
            <img src={NamecheapIcon} className="copyright-icon" alt="Namecheap" /> 
          </a>. 
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
