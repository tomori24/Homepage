import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faYoutube, faSoundcloud } from "@fortawesome/free-brands-svg-icons";

const Contacts = () => (
  <>
    <a style={{ boxShadow: "none", }} href="https://twitter.com/tmri24">
      <FontAwesomeIcon
        style={{ height: "2.5em", width: "2.5em", margin: "1em", }}
        color="#3eaded"
        icon={faTwitter}
      />
    </a>
    <a style={{ boxShadow: "none", }} href="https://www.instagram.com/tomori24">
      <FontAwesomeIcon
        style={{ height: "2.5em", width: "2.5em", margin: "1em", }}
        color="#3eaded"
        icon={faInstagram}
      />
    </a>
    <a style={{ boxShadow: "none", }} href="https://www.youtube.com/channel/UCsVYnVMynZqS6V7D69LM2Zg">
      <FontAwesomeIcon
        style={{ height: "2.5em", width: "2.5em", margin: "1em", }}
        color="#3eaded"
        icon={faYoutube}
      />
    </a>
    <a style={{ boxShadow: "none", }} href="https://soundcloud.com/tomori1039">
      <FontAwesomeIcon
        style={{ height: "2.5em", width: "2.5em", margin: "1em", }}
        color="#3eaded"
        icon={faSoundcloud}
      />
    </a>
  </>
)

export default Contacts
