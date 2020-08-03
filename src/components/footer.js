import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faYoutube, faSoundcloud } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer 
    style={{
      background: `white`,
      marginTop: `2em`,
      marginBottom: `2em`
    }}
  >
    <a style={{ boxShadow: "none", }} href="https://twitter.com/tmri24">
      <FontAwesomeIcon
        style={{ height: "2em", width: "2em", margin: "auto", }}
        color="#3eaded"
        icon={faTwitter}
      />
    </a>
    <a style={{ boxShadow: "none", }} href="https://www.instagram.com/tomori24">
      <FontAwesomeIcon
        style={{ height: "2em", width: "2em", margin: "auto", }}
        color="#3eaded"
        icon={faInstagram}
      />
    </a>
    <a style={{ boxShadow: "none", }} href="https://www.youtube.com/channel/UCsVYnVMynZqS6V7D69LM2Zg">
      <FontAwesomeIcon
        style={{ height: "2em", width: "2em", margin: "auto", }}
        color="#3eaded"
        icon={faYoutube}
      />
    </a>
    <a style={{ boxShadow: "none", }} href="https://soundcloud.com/tomori1039">
      <FontAwesomeIcon
        style={{ height: "2em", width: "2em", margin: "auto", }}
        color="#3eaded"
        icon={faSoundcloud}
      />
    </a>
  </footer>
)

export default Footer
