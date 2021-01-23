/*}import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function About() {

    const data = useStaticQuery(graphql`
        query Image {
          images: allImageSharp(filter: {fixed: {originalName: {glob: "about*"}}}) {
            nodes { fixed{ ...GatsbyImageSharpFixed }
            }
          }
        } 
    `)

console.log(data);
  return (
  <div>
    <Layout>
    <div className="graycontainer">
      <Img fixed={data.images.nodes[0].fixed} alt="bild1"/>
      <Img fixed={data.images.nodes[1].fixed} alt="bild2"/>
    </div>
    </Layout>
  </div>
  ) 
}

*/