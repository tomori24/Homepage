import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faYoutube, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faMoon, faRoute } from "@fortawesome/free-solid-svg-icons"

const Contacts = () => (
  <>
    <a style={{ boxShadow: "none", }} href="https://twitter.com/tmri24">
      <FontAwesomeIcon
        style={{ height: "2.0em", width: "2.0em", marginRight: "0.7em", marginLeft: "0.7em", marginBottom: "1em"}}
        color="#3eaded"
        icon={faTwitter}
      />
    </a>
    <a style={{ boxShadow: "none", }} href="https://www.instagram.com/tomori24">
      <FontAwesomeIcon
        style={{ height: "2.0em", width: "2.0em", marginRight: "0.7em", marginLeft: "0.7em", marginBottom: "1em"}}
        color="#3eaded"
        icon={faInstagram}
      />
    </a>
    <a style={{ boxShadow: "none", }} href="https://www.youtube.com/channel/UCsVYnVMynZqS6V7D69LM2Zg">
      <FontAwesomeIcon
        style={{ height: "2.0em", width: "2.0em", marginRight: "0.7em", marginLeft: "0.7em",marginBottom: "1em"}}
        color="#3eaded"
        icon={faYoutube}
      />
    </a>
    <a style={{ boxShadow: "none", }} href="https://soundcloud.com/tomori1039">
      <FontAwesomeIcon
        style={{ height: "2.0em", width: "2.0em", marginRight: "0.7em", marginLeft: "0.7em", marginBottom: "1em"}}
        color="#3eaded"
        icon={faSoundcloud}
      />
    </a>
    <a style={{ boxShadow: "none", }} href="https://audiostock.jp/artists/29537/audios?audio_category=0">
        <FontAwesomeIcon
          style={{ height: "2.0em", 
                   width: "2.0em", 
                   marginRight: "0.7em", 
                   marginLeft: "0.7em", 
                   marginBottom: "1em",
                  }}
          transform={{ rotate: 110 }}
          color="#3eaded"
          icon={faMoon} />
      </a>
  </>
)

export default Contacts
