import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

export default function Home() {
  return (
  
  <div>
    <Layout>

    <div className="startpagepicture">

    <h2 className="center">Vi kan</h2>
    <div>
        <Slide easing="ease" autoplay="true">
          <div className="each-slide">
            <div>
              <span>Slide 1</span><br></br>
              <FontAwesomeIcon icon={['fab', 'react']} size="9x"/>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <span>Slide 2</span><br></br>
              <FontAwesomeIcon icon={['fab', 'angular']} size="9x"/>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <span>Slide 3</span><br></br>
              <FontAwesomeIcon icon={['fab', 'node-js']} size="9x"/>
            </div>
          </div>
        </Slide>
      </div>



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
    



    

    
    </Layout> 
  </div>   
  ) 
}
