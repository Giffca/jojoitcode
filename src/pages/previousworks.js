import React from "react"
import Layout from "../components/layout"
import IsometricImage from "../components/isometricimage"
import JoJoIT from "../images/jojoit.png"
import MalinsGarderob from "../images/malinsgarderob.png"
import NaturalHealing from "../images/naturalhealing.png"
import ProteinBro from "../images/proteinbro.png"

export default function Contact() {
  return (
    
  <div>
    <Layout>
    <div className="graycontainer bottomfill">
    <h2 className="preamble">Våra Verk</h2>
      <p className="left">2020</p>
    <ul className="center">

    <li>
    <IsometricImage><a href="https://github.com/Giffca/jojoitcode" target="_blank" rel="noreferrer"><img alt="jojoit" src={JoJoIT}></img></a></IsometricImage>
    <div className="pt"><h2 className="font-normal">JoJo IT</h2> Gjord med Gatsby</div>
    </li>

    <li>
      <IsometricImage><a href="https://www.malinsgarderob.com/" target="_blank" rel="noreferrer"><img alt="malinsgarderob" src={MalinsGarderob}></img></a></IsometricImage>
      <div className="pt"><h2 className="font-normal">Malins Garderob</h2> Gjord med Elementor/WordPress.</div>
    </li>

    <li>
    </li>
    </ul>
    <p className="left"> 2019 </p>
    <ul className="center bottomfill">
    <li>
      <IsometricImage><a href="https://webbkurs.ei.hv.se/~tijo0010/wpTimmyCMS/" target="_blank" rel="noreferrer"><img alt="malinsgarderob" src={ProteinBro}></img></a></IsometricImage>
      <div className="pt"><h2 className="font-normal">ProteinBro</h2> Skoluppgift gjord med <br></br>Elementor/WordPress</div>
    </li>

    <li className="bottomfill">
      <IsometricImage><a href="https://webbkurs.ei.hv.se/~anjo0199/CMS200/" target="_blank" rel="noreferrer"><img alt="malinsgarderob" src={NaturalHealing}></img></a></IsometricImage>
      <div className="pt bottomfill"><h2 className="font-normal">Natural Healing</h2> Skoluppgift gjord med <br></br>Elementor/WordPress</div>
    </li>

    </ul>
    </div>
    </Layout>
  </div>
  ) 
}