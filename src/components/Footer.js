import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import logo from "../images/logo.png"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
          <span>
            Made With <icon>❤</icon> by{" "}
            <a href="https://github.com/VijhnAustin">Vijhn Austin</a>
          </span>
          <div className="logo-container">
            <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
   </div>
  )
}

export default Footer
