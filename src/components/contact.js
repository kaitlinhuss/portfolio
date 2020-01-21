import React from 'react'
import { FaMobileAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import ReCAPTCHA from "react-google-recaptcha";
import "../components/css/contact.css"

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
    <p id="contact"> Let's get in touch!</p>
    <hr class="sm-divider"/>

    <section id="contact">
        <div className="inner">
          <section>
            <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field" data-netlify-recaptcha='true'>
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="First name" name="firstName" id="firstName"/>
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="Last name" name="lastName" id="lastName"/>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Email" name="email" id="email"/>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <textarea class="form-control" placeholder="Message" name="message" id="message" rows="3"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <ReCAPTCHA sitekey="6Lcq9M0UAAAAAE8S7ioO27_dxWiG1iqn7j5Bakkd" />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <button type="submit" value="Submit" class="btn btn-primary">Submit</button>
                </div>
                <div class="col">
                  <button type="reset" value="Clear" class="btn btn-secondary">Clear</button>
                </div>
              </div>
            </form>
          </section>
        </div>
    </section>
    </div>
)

export default Contact