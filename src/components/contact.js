import React from "react"
import Section from "./section"
import { FaBook } from 'react-icons/fa';
import "../components/css/about.css"

class Contact extends Section {
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
      <p id="contact"></p>
      <h1>contact</h1>
      <hr class="lg-divider "/>
      <p id="about">A science-fiction nerd with an obsession for Stephen King novels. <FaBook /><br/>
        I write code for a living, but I have a passion for writing short stories and photography.</p>

        <form name="test-contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>   
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Your Role: <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>


    </div>
      )
    }
  }

  export default Contact
