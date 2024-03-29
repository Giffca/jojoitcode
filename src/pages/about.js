import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function About() {

  const data = useStaticQuery(graphql`
  query Images {
    images: allImageSharp(filter: {fluid: {originalName: {glob: "about*"}}}) {
      nodes {fluid(maxWidth: 378){ ...GatsbyImageSharpFluid }
      }
    }
  } 
`)

  return (
  <div>
    <Layout>
    <div>
      <h2 className="preamble">Om Oss</h2>
      <div className="flex bottomfill">
      <div className="IMGsize"><Img fluid={{ ...data.images.nodes[0].fluid, aspectRatio: 0.7481  }} alt="bild1"/> </div>
      <article className="breadText"><span className="bigger names">Timmy Johansson&nbsp;&nbsp;&nbsp;&nbsp;&&nbsp;&nbsp;&nbsp;&nbsp;Anton Josefsson </span><br></br><br></br>Vi är ett företag baserat i Jönköping som är grundat av två stycken webmasters. Vi lärde känna varandra i början av våra studier, där vårat starka gemensamma intresse för IT, programmering och webbutveckling förde oss samman.<br></br><br></br> Vi har studerat igenom följande program:<br></br><br></br><span className="smaller"><i>Högskolan Väst</i><br></br>2 år </span><span className="bigger">Webmaster</span><span className="smaller"><br></br>1 år </span><span className="bigger">Webbutvecklare</span><br></br><br></br><span className="smaller"><i>Jönköping University</i><br></br>2 år </span><span className="bigger">Mjukvaruutveckling och mobila plattformar</span><br></br><br></br><br></br>
      </article></div>
      <div className="flex bottomfill mobilefillshort">
      <article className="breadText"><h2>Våra Kunskaper</h2><br></br>Genom vår utbildning så har vi fått en bred kunskap inom olika webbtekniker, webbdesign och programmering. <br></br><br></br> <div className="flex-evenly"><p><span className="bigger"> Språk </span><br></br><span className="smaller">JavaScript<br></br>Java<br></br>Python<br></br>PHP<br></br>C#<br></br>C++<br></br>SQL</span></p><p><span className="bigger"> Miljöer </span><br></br><span className="smaller">React<br></br>WordPress<br></br>Node.js<br></br>Angular<br></br>.NET<br></br>MySQL<br></br>Photoshop</span></p></div> <br></br>Vi strävar efter att konstant hålla oss uppdaterade och införskaffar därför hela tiden ny kunskap om relevanta miljöer och språk.</article><div className="IMGsize"><Img fluid={{ ...data.images.nodes[1].fluid, aspectRatio: 0.7481  }} alt="bild2"/></div></div> 
      <div className="bottomfill"></div>
    </div>
    </Layout>
  </div>
  ) 
}