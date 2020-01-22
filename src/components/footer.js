import React from "react"
import GatsbyIcon from '../images/gatsby-icon.png'
import GithubIcon from '../images/github-icon.png'
import NetlifyIcon from '../images/netlify-icon.png'
import NamecheapIcon from '../images/namecheap-icon.png'
import { MdCopyright } from 'react-icons/md';
import { GoHeart } from 'react-icons/go';
import "../components/css/layout.css"

class Footer extends React.Component {

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
            <footer>
              <MdCopyright /> {new Date().getFullYear()} Kaitlin Huss. All rights reserved. <br/>
              Made with <GoHeart /> in Tampa, Florida.<br/>
              Built with <a href="https://www.gatsbyjs.org">
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
        )
      }
}

export default Footer

