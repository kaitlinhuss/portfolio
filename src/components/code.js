import React from "react"
import Section from "./section"
import "../components/css/code.css"

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio2019 from '../images/portfolio-2019.png'
import Portfolio2017 from '../images/portfolio-2017.png'
import StudentLoanCalculator from '../images/student-loan-calculator.png'
import { FaReact } from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';
import { DiJqueryLogo } from 'react-icons/di';
import { FaArrowDown } from 'react-icons/fa';
import scrollTo from 'gatsby-plugin-smoothscroll';

class Code extends Section {
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
          <p id="code"></p>
          <h1>code</h1>
          <hr class="lg-divider"/>
          <p id="code-text">A few projects that I've been working on lately.</p>
          <hr class="sm-divider"/>
            <CardDeck>
            <Card>
              <a href="https://kaitlinhuss.com" target="_blank" rel="noopener noreferrer">
                <Card.Img variant="top" src={Portfolio2019}/>
              </a>
              <Card.Body>
                <Card.Title>2019 Portfolio</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Personal portfolio built with GatsbyJS.</Card.Subtitle>
                <Card.Text>
                  First time using Gatsby to generate a static site in React.<br/>
                  <FaReact />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated: January 2020 </small>
              </Card.Footer>
            </Card>
            <Card>
              <a href="https://porfolio2017.kaitlinhuss.com" target="_blank" rel="noopener noreferrer">
                <Card.Img variant="top" src={Portfolio2017}/>
              </a>
              <Card.Body>
                <Card.Title>2017 Portfolio</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Parallax portfolio built with Bootstrap, JavaScript.</Card.Subtitle>
                <Card.Text>
                  First time using Gatsby to generate a static site in React.<br/>
                  <FaBootstrap /> <DiJavascript /> <DiJqueryLogo />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated: February 2017</small>
              </Card.Footer>
            </Card>
            <Card>
              <a href="https://loancalculator.kaitlinhuss.com" target="_blank" rel="noopener noreferrer">
                <Card.Img variant="top" src={StudentLoanCalculator}/>
              </a>
              <Card.Body>
                <Card.Title>Student Loans Calculator</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Student loan payment calculator built with AngularJS.</Card.Subtitle>
                <Card.Text>
                  First time using Gatsby to generate a static site in React.<br/>
                  <FaAngular />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated: February 2017</small>
              </Card.Footer>
            </Card>
          </CardDeck>
          <div className="container">
              <button class="btn btn-outline-primary scrolldown-btn" onClick={() => scrollTo('#contact')}><FaArrowDown /></button>
            </div>
        </div>
      )
    }
  }

  export default Code
