import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Contact() {
  return (
     
  <div>
    <Layout>
    <div className="contactWrapper graycontainer">
      <div className="contactLeft">
        <h2 className="contactLeftHeader">Kontakta oss!</h2>
        <div className="contactLeftText">Vid funderingar eller för kostnadsförslag tveka inte på att höra av er.</div>
        <div className="contactLeftLinkedText">Vi finns även på LinkedIn!</div>
        <a className="contactLink" href="https://se.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/></a>
      </div>
      <div className="contactRight">
        <div className="contactBox">
          <h2 className="contactRightHeader">Kontaktuppgifter</h2>
          <FontAwesomeIcon icon={['fas', 'envelope']} size="2x"/><div className="contactRightText"><a href="mailto:jojoit.contact@gmail.com">jojoit.contact@gmail.com</a></div>
          <FontAwesomeIcon icon={['fas', 'phone']} size="2x"/><div className="contactRightText"><a href="tel:076-123457"> 076-123 45 67</a></div>
        </div>
      </div>
    </div>
    </Layout>
  </div>
  ) 
}
