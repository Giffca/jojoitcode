import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Contact() {
  return (
     
  <div>
    <Layout>
    <div className="contactWrapper contactPadding">
      <div className="contactLeft">
        <h2 className="contactLeftHeader">Kontakta oss!</h2>
        <div className="contactLeftText">Vid funderingar eller för kostnadsförslag tveka inte på att höra av er.</div>
        <div className="contactLeftLinkedText">Vi finns även på LinkedIn!</div>
        <a className="contactLink" href="https://se.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/></a>
      </div>
      <div className="contactRight">
        <div className="contactBox">
          <h2 className="contactRightHeader">Kontaktuppgifter</h2>
          <a href="mailto:jojoit.contact@gmail.com"><FontAwesomeIcon icon={['fas', 'envelope']} size="2x"/><div className="contactRightText">jojoit.contact@gmail.com</div></a>
          <a href="tel:076-123457"><FontAwesomeIcon icon={['fas', 'phone']} size="2x"/><div className="contactRightText"> 076-123 45 67</div></a>
        </div>
      </div>
    </div>
    </Layout>
  </div>
  ) 
}
