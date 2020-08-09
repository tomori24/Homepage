import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const Contacts = () => (
  <>
    <h2> Contacts </h2>
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
    <a style={{ boxShadow: "none", }} href="tomori1039@gmail.com">
        <FontAwesomeIcon
          style={{ height: "2.5em", width: "2.5em", margin: "1em", }}
          color="#3eaded"
          icon={faEnvelope} />
      </a>
  </>
)

export default Contacts
