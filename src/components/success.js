import React from "react"
import { Link } from "gatsby"
import { IoMdHand } from 'react-icons/io';
import Logo from '../images/kh-logo-bounce.svg'
import "../components/css/success.css"

class Success extends React.Component {
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
        <img src={Logo} id="logo" alt="Kaitlin Huss"/> 
        <p id="success">Thank you for contacting me! I'll be in touch soon. <br/>
          <IoMdHand />
        </p>
        <Link to="/">
          <button class="btn btn-outline-primary home-btn">Home</button>
        </Link>
      </div>
    )
  }
}

export default Success

