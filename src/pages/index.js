import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"

export default function Home() {
  return (
  
  <div className="startpage">
    <Layout>
      <div className="topSlideWrapper">
        <div className="startpagepicture">
          <h2 className="center slideshowHeader">Kunskaper inom</h2>
          <Slide easing="ease" arrows={false} pauseOnHover={false} canSwipe={false} duration={3000} transitionDuration={1000}>
                <div className="each-slide">
                  <div className="slideshowText">Webbutveckling</div>
                </div>
                <div className="each-slide">
                  <div className="slideshowText">Webbdesign </div>
                </div>
                <div className="each-slide">
                  <div className="slideshowText">JavaScript Ramverk </div>
                </div>
                <div className="each-slide">
                  <div className="slideshowText">Content Management Systems</div>
                </div>
                <div className="each-slide">
                  <div className="slideshowText">Databashantering </div>
                </div>
                <div className="each-slide">
                  <div className="slideshowText">Mjukvaruutveckling </div>
                </div>
          </Slide>
        </div>
      </div>
      <div className="contactWrapper">
        <div className="contactLeft">
        <h2 className="overflow">IT- och konsult-tjänster med fokus på webbteknik</h2>
          <div className="contactLeftText pt">Vi är just nu tillgängliga för arbete!<br></br> Små till Stora projekt.<br></br><br></br>Vi skapar, designar, lägger upp, underhåller och säljer hemsidor till privatpersoner så väl som företag.</div>
        </div>
        <div className="contactLeft tiltright">
            <a href="mailto:jojoit.contact@gmail.com"> <FontAwesomeIcon icon={['fas', 'envelope']} size="2x"/><div className="contactRightText">jojoit.contact@gmail.com</div></a>
            <a href="https://se.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/><div className="contactRightText">JoJo IT</div></a>
        </div>
      </div>

      <div className="bottomSlideWrapper">
          <Slide easing="ease" arrows={false} pauseOnHover={false} canSwipe={false} duration={4000} transitionDuration={1800}>
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
