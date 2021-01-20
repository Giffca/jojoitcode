import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"

export default function Home() {
  return (
  
  <div>
    <Layout>
    <div className="startpagepicture">
      <div className="Iam">
        <p>Vi kan</p>
        <div className="scrolling">
          <div className="innerIam">
            Webbutveckling<br /> 
            Webbdesign<br />
            Mjukvaruutveckling<br />
            Databaser<br />
            JavaScript Ramverk <br/>
            WordPress
            </div>
        </div>
      </div>
    </div>

      
      
      
      

    <div className="startpage"><br></br><br></br><br></br><h2 className="center">Vi är tillgängliga för arbete som webmasters<br></br> samt letar efter spännande projekt att jobba inom.<br></br>Helst på distans.</h2></div>
    



    <div className="startpage">
        <Slide easing="ease" arrows={false} duration={4000} transitionDuration={1800}>
          <div className="each-slide">
            <FontAwesomeIcon icon={['fab', 'angular']} size="8x"/>
              <FontAwesomeIcon icon={['fab', 'react']} size="8x"/>
              <FontAwesomeIcon icon={['fab', 'node-js']} size="8x"/>
          </div>
          <div className="each-slide">
              <FontAwesomeIcon icon={['fab', 'php']} size="8x"/>
              <FontAwesomeIcon icon={['fab', 'js']} size="8x"/>
              <FontAwesomeIcon icon={['fab', 'wordpress-simple']} size="8x"/>
          </div>
        </Slide>
      </div>

    

    
    </Layout> 
  </div>   
  ) 
}
