import React from "react"
import Section from "./section"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { IoMdArrowRoundUp } from 'react-icons/io';
import { FaBook } from 'react-icons/fa';
import "../components/css/about.css"
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import "react-web-tabs/dist/react-web-tabs.css";


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
          <p id="about"><br></br></p>
          <h1>about</h1>
          <hr class="lg-divider"/>
          <p id="about">A science-fiction nerd with a slight obsession for Stephen King novels.<br/>
            When I'm not hiking, I'm exploring new restaurants downtown. <br/>
            I write code for a living, but I'm also passionate about writing short stories and photography.</p>
            <hr class="sm-divider"/>
            <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
              <TabList>
                <Tab tabFor="vertical-tab-one">background</Tab>
                <Tab tabFor="vertical-tab-two">skills</Tab>
                <Tab tabFor="vertical-tab-three">learning</Tab>
              </TabList>
              <TabPanel tabId="vertical-tab-one">
                <p class="tab-content-one">I’m a software engineer with 3+ years of experience in <b>full stack development</b> in the financial services industry. 
                  I enjoy creating software solutions to existing and emerging problems at every stage of the software delivery lifecycle. 
                  I’m passionate about enabling and encouraging DevOps best practices, identifying gaps in workflows and automating where possible. 
                  My colleagues would describe me as a curious and resourceful individual who is effective at time management and troubleshooting. 
                  I’m always seeking new experiences to enhance my leadership skills and create new networking relationships. 
                  I’m happiest when I’m learning about new technologies and tools. 
                  As I grow in my career, I search for opportunities that allow me to design and develop software solutions for challenges of all shapes and sizes.</p>
              </TabPanel>
              <TabPanel tabId="vertical-tab-two">
                <p class="tab-content-two"><b>Languages/Frameworks</b>: Proficient in HTML, CSS, Java; experienced with Groovy, Maven; familiar with JavaScript, JUnit; previously used AngularJS, Spring; currently learning React, Cucumber, Selenium, GoLang.<br/><br/>
                <b>Technologies/Tools:</b> Proficient in JIRA, Confluence, Bitbucket, Git; experienced with GitHub, IntelliJ; familiar with Jenkins; previously used SQL; currently learning Docker, Kubernetes, Spinnaker, JFrog Artifactory.</p>
              </TabPanel>
              <TabPanel tabId="vertical-tab-three">
                <p class="tab-content-three">Currently, I'm learning to construct automated continuous integration &amp; delivery workflows for application teams across the firm, including containerizing 
applications with Docker and deploying them to internal and external cloud environments, using Jenkins, Spinnaker, Kubernetes, and Artifactory.</p>
              </TabPanel>
            </Tabs>
        </div>
      )
    }
  }

  export default About
