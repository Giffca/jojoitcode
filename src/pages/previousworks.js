import React from "react"
import Layout from "../components/layout"
import IsometricImage from "../components/isometricimage"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Works() {

  const data = useStaticQuery(graphql`
  query works {
    images: allImageSharp(filter: {fixed: {originalName: {glob: "!about*"}}}) {
      nodes {
        fixed(width: 370){ ...GatsbyImageSharpFixed }
      }
    }
  } 
`)


  return (    
  <div>
    <Layout>
    <div className="graycontainer bottomfill">
    <h2 className="preamble">Våra Verk</h2>
      <p className="left">2020</p>
    <ul className="center">

    <li>
    <IsometricImage><a href="https://github.com/Giffca/jojoitcode" target="_blank" rel="noreferrer"><Img fixed={data.images.nodes[0].fixed} className="imageshadow" alt="JoJo IT"/></a></IsometricImage>
    <div className="pt"><h2 className="font-normal">JoJo IT</h2> Gjord med Gatsby</div>
    </li>

    <li>
      <IsometricImage><a href="https://www.malinsgarderob.com/" target="_blank" rel="noreferrer"><Img fixed={data.images.nodes[2].fixed} className="imageshadow" alt="Malins Garderob"/></a></IsometricImage>
      <div className="pt"><h2 className="font-normal">Malins Garderob</h2> Gjord med Elementor/WordPress.</div>
    </li>

    <li>
    </li>
    </ul>
    <p className="left"> 2019 </p>
    <ul className="center bottomfill">
    <li>
      <IsometricImage><a href="https://webbkurs.ei.hv.se/~tijo0010/wpTimmyCMS/" target="_blank" rel="noreferrer"><Img fixed={data.images.nodes[1].fixed} className="imageshadow" alt="ProteinBro"/></a></IsometricImage>
      <div className="pt"><h2 className="font-normal">ProteinBro</h2> Skoluppgift gjord med <br></br>Elementor/WordPress</div>
    </li>

    <li className="bottomfill">
      <IsometricImage><a href="https://webbkurs.ei.hv.se/~anjo0199/CMS200/" target="_blank" rel="noreferrer"><Img fixed={data.images.nodes[3].fixed} className="imageshadow" alt="Natural Healing"/></a></IsometricImage>
      <div className="pt bottomfill"><h2 className="font-normal">Natural Healing</h2> Skoluppgift gjord med <br></br>Elementor/WordPress</div>
    </li>

    </ul>
    </div>
    </Layout>
  </div>
  ) 
}