import React from "react"
import Layout from "../components/layout"
import img1 from "../images/about1.jpg"
import img2 from "../images/about2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About() {
  return (
    
  <div>
    <Layout>
    <div>
    <h2 className="preamble">Om Oss</h2>
    <div className="flex bottomfill">
    <img src={img1} alt="kod"></img>
    <article className="breadText"><span className="bigger names">Timmy Johansson&nbsp;&nbsp;&nbsp;&nbsp;&&nbsp;&nbsp;&nbsp;&nbsp;Anton Josefsson </span><br></br><br></br>Vi är ett företag baserat i Jönköping som är grundat av två stycken nyutbildade webmasters. Vi lärde känna varandra i början av våra studier, där vårat gemensamma intresse för webbutveckling förde oss samman.<br></br><br></br> Tillsammans har vi sedan dess studerat igenom programmen:<br></br><br></br><span className="bigger">"Mjukvaruutveckling och mobila plattformar"</span><br></br><span className="smaller"><i>Jönköping University</i><br></br>2014-2016</span><br></br><br></br><span className="bigger">"Webbutvecklare" & "Webmaster"</span><br></br><span className="smaller"><i>Högskolan Väst</i><br></br>2017-2020</span><br></br><br></br>
    </article></div>
    <div className="flex bottomfill">
    <article className="breadText"><h2>Våra Kunskaper</h2><br></br>Genom våra utbildningar så har vi fått en bred kunskap inom programmering, webbutveckling samt webbdesign. <br></br><br></br> <div className="flex-evenly"><p><span className="bigger kunskap"> Språk </span><br></br><span className="smaller"><FontAwesomeIcon icon={['fab', 'js']}/> JavaScript<br></br><FontAwesomeIcon icon={['fab', 'java']}/> Java<br></br><FontAwesomeIcon icon={['fab', 'python']}/> Python<br></br><FontAwesomeIcon icon={['fab', 'php']}/> PHP<br></br>C#<br></br>C++<br></br>SQL</span></p><p><span className="bigger kunskap"> Miljöer </span><br></br><span className="smaller"><FontAwesomeIcon icon={['fab', 'react']}/> React<br></br><FontAwesomeIcon icon={['fab', 'wordpress-simple']}/> WordPress<br></br><FontAwesomeIcon icon={['fab', 'node-js']}/> Node.js<br></br><FontAwesomeIcon icon={['fab', 'angular']}/> Angular<br></br>.NET<br></br>MySQL<br></br>Photoshop</span></p></div> <br></br>Vi strävar efter att konstant hålla oss uppdaterade och införskaffar därför hela tiden ny kunskap om relevanta miljöer och språk.</article><img src={img2} alt="kod"></img> </div> 
    <div className="bottomfill"></div>
    </div>
    </Layout>
  </div>
  ) 
}