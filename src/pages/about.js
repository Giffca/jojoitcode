import React from "react"
import Layout from "../components/layout"
import img1 from "../images/about1.jpg"
import img2 from "../images/about2.png"

export default function About() {
  return (
    
  <div>
    <Layout>
    <div className="scrollable">
    <div className="flex">
    <img src={img1} alt="kod"></img>
    <p className="breadText"><h2>Om oss</h2><br></br>Vi är ett företag baserat i Jönköping som består av två stycken nyutbildade webmasters; <br></br><br></br> <span className="bigger">Timmy Johansson & Anton Josefsson </span><br></br><br></br>Vi lärde känna varandra i början av våra studier och har sedan dess studerat igenom programmen: <br></br><br></br><span className="bigger">"Mjukvaruutveckling och mobila plattformar"</span><br></br><span className="smaller">Jönköping University<br></br>2014-2016</span><br></br><br></br><span className="bigger">"Webbutvecklare" & "Webmaster"</span><br></br><span className="smaller">Högskolan Väst<br></br>2017-2020</span><br></br><br></br></p>
    </div>
    <div className="flex bottomfill">
    <p className="breadText"><h2>Våra Kunskaper</h2><br></br>Ifrån våra utbildningar så har vi fått en bred kunskap inom det mesta inom programmering och webbutveckling, samt design. <br></br><br></br> <div className="flex-evenly"><p><span className="bigger"> Språk vi kan: </span><br></br><span className="smaller">JavaScript<br></br>C#<br></br>C++<br></br>Java<br></br>Python<br></br>PHP<br></br>SQL</span></p><p><span className="bigger"> Miljöer vi kan: </span><br></br><span className="smaller">React<br></br>WordPress<br></br>.NET<br></br>MySQL<br></br>Node.js<br></br>Angular<br></br>Photoshop</span></p></div> <br></br>Vi strävar efter att hålla oss uppdaterade och införskaffar ny kunskap om nya och relevanta miljöer hela tiden.</p><img src={img2} alt="kod"></img> </div> 
    
    <div className="bottomfill"><br></br><br></br><br></br><h2 className="center">Vi är tillgängliga för arbete som webmasters<br></br> samt letar vi efter projekt att jobba inom.<br></br> Helst på distans.</h2></div>
  
    </div>
    </Layout>
  </div>
  ) 
}