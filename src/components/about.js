import React from "react"
import Section from "./section"
import "../components/css/about.css"
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowDown } from 'react-icons/fa';

import scrollTo from 'gatsby-plugin-smoothscroll';

class About extends Section {
    render() {
      return (
        <div
            style={{
            margin: `0 auto`,
            maxWidth: 2000,
            padding: `10rem 1.0875rem 10rem`,
            paddingTop: 0,
            }}
        >
          <p id="about"></p>
          <h1>about</h1>
          <hr class="lg-divider"/>
          <p id="about-text">A science-fiction nerd with a slight obsession for Stephen King novels.<br/>
            When I'm not hiking, I'm exploring new restaurants downtown. <br/>
            I write code for a living, but I'm also passionate about writing short stories and photography.</p>
            <hr class="sm-divider"/>
          

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">background</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">learning</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <p class="tab-content-one">I’m a software engineer with 3+ years of experience in <b>full stack development</b> in the financial services industry. 
                      I enjoy creating software solutions to existing and emerging problems at every stage of the software delivery lifecycle. 
                      I’m passionate about enabling and encouraging DevOps best practices, identifying gaps in workflows and automating where possible. 
                      I’m always seeking new experiences to enhance my leadership skills and create new networking relationships. 
                      I’m happiest when I’m learning about new technologies and tools. 
                      As I grow in my career, I search for opportunities that allow me to design and develop software solutions for challenges of all shapes and sizes.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p class="tab-content-two"><b>Languages/Frameworks</b>: <br/>
                    Proficient in HTML, CSS, Java; experienced with Groovy, Maven; familiar with JavaScript, JUnit; previously used AngularJS, Spring; currently learning React, Cucumber, Selenium, GoLang.<br/><br/>
                <b>Technologies/Tools:</b> <br/>
                Proficient in JIRA, Confluence, Bitbucket, Git; experienced with GitHub, IntelliJ; familiar with Jenkins; previously used SQL; currently learning Docker, Kubernetes, Spinnaker, JFrog Artifactory.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p class="tab-content-three">Currently, I'm learning to construct automated continuous integration &amp; delivery workflows for application teams across the company, including containerizing 
applications with Docker and deploying them to internal and external cloud environments using Jenkins, Spinnaker, Kubernetes, and Artifactory. During this year, I plan to continue expanding my experience with technologies needed to build rich and complex user interfaces, 
including React and SASS. I'm excited about diving into the world of API design and development within the next few months.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            <div className="container">
              <button class="btn btn-outline-primary scrolldown-btn" onClick={() => scrollTo('#code')}><FaArrowDown /></button>
            </div>
        </div>
        
      )
    }
  }

  export default About
