import React from "react"
import Section from "./section"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { IoMdArrowRoundUp } from 'react-icons/io';

class Contact extends Section {
    render() {
      return (
        <div
            style={{
            margin: `0 auto`,
            maxWidth: 1200,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            }}
        >
      <p id="contact"></p>
      <form name="contact" method="POST" data-netlify="true">
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
      <button class="btn btn-outline-primary scrollup-btn" onClick={() => scrollTo('#top')}><IoMdArrowRoundUp /></button>
        </div>
      )
    }
  }

  export default Contact
