import React from 'react'
import { FaMobileAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import ReCAPTCHA from "react-google-recaptcha";
import "../components/css/about.css"

const Contact = (props) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 2000,
      padding: `0px 1.0875rem 1.45rem`,
      paddingTop: 0,
    }}
  >
    <p id="contact"></p>
    <h1>contact</h1>
    <hr class="lg-divider "/>

    <div className="container">
        <p className="hero-subheading"><MdEmail /> kaitlinhuss@gmail.com</p>
        <p className="hero-subheading"><FaMobileAlt /> (239) 443-0763</p>
    </div>

    <section id="contact">
        <div className="inner">
          <section>
            <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field" data-netlify-recaptcha='true'>
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                  <div className="field half first">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                      <label htmlFor="email">Email</label>
                      <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" rows="6"></textarea>
                  </div>
                  <ReCAPTCHA sitekey="6Lcq9M0UAAAAAE8S7ioO27_dxWiG1iqn7j5Bakkd" />
                  <ul className="actions">
                      <li><input type="submit" value="Send Message" className="special" /></li>
                      <li><input type="reset" value="Clear" /></li>
                  </ul>
              </form>
          </section>
        </div>
    </section>
    </div>
)

export default Contact