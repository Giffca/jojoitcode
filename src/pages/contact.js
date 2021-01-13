import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Contact() {
  return (
     
  <div>
    <Layout>
    <div className="contactBox">
      <h2 className="center">Kontaktuppgifter</h2>
      <div className="contactText">jojoit.contact@gmail.com  </div>
      <div className="contactText">076-123 45 67</div>
      <FontAwesomeIcon icon={['fab', 'linkedin']} size="6x"/>
      <FontAwesomeIcon icon={['fab', 'apple']} size="3x"/>
    </div>
    
    
    </Layout>
  </div>
  ) 
}
