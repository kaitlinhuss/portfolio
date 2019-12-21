import React from "react"
import Section from "./section"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { IoMdArrowRoundUp } from 'react-icons/io';
import { FaBook } from 'react-icons/fa';
import "../components/css/about.css"

class About extends Section {
    render() {
      return (
        <div
            style={{
            margin: `0 auto`,
            maxWidth: 2000,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            }}
        >
          <p id="about"></p>
          <h1>about</h1>
          <hr class="divider"/>
          <p id="about">A science-fiction nerd with an obsession for Stephen King novels. <FaBook /><br/>
            I write code for a living, but I have a passion for writing short stories and photography.</p>
        </div>
      )
    }
  }

  export default About
