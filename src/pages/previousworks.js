import React from "react"
import Layout from "../components/layout"
import JoJoIT from "../images/jojoit.png"
import MalinsGarderob from "../images/malinsgarderob.png"
import NaturalHealing from "../images/naturalhealing.png"
import ProteinBro from "../images/proteinbro.png"

export default function Contact() {
  return (
    
  <div>
    <Layout>
    <div className="scrollable">
      <p className="left"> 2020 </p>
    <ul className="center">
      <li><h2 className="font-normal">JoJo IT</h2> <a className="v2" href="https://github.com/Giffca/jojoitcode" target="_blank" rel="noreferrer">https://github.com/Giffca/jojoitcode</a> <br></br><div className="flex"><a className="tooltip"  href={JoJoIT}><img alt="jojoit" src={JoJoIT} className="tooltipimage"></img> Bild</a> Gjord med hjälp av Gatsby </div></li>
      <li><h2 className="font-normal">Malins Garderob Huskvarna</h2> <a className="v2" href="https://www.malinsgarderob.com/" target="_blank" rel="noreferrer">https://www.malinsgarderob.com/</a> <br></br><div className="flex"><a className="tooltip"  href={MalinsGarderob}><img alt="malinsgarderob" src={MalinsGarderob} className="tooltipimage"></img> Bild</a>  Gjord med hjälp av WordPress.</div></li>
      </ul>
      <p className="left"> 2019 </p>
      <ul className="center bottomfill">
      <li><h2 className="font-normal">ProteinBro</h2> <a className="v2" href="https://webbkurs.ei.hv.se/~tijo0010/wpTimmyCMS/" target="_blank" rel="noreferrer">https://webbkurs.ei.hv.se/~tijo0010/wpTimmyCMS/</a> <br></br><div className="flex"><a className="tooltip"  href={ProteinBro}><img alt="proteinbro" src={ProteinBro} className="tooltipimage"></img> Bild</a>  Skoluppgift gjord med hjälp av Elementor/WordPress </div></li>
      <li><h2 className="font-normal">Natural Healing</h2> <a className="v2" href="https://webbkurs.ei.hv.se/~anjo0199/CMS200/" target="_blank" rel="noreferrer">https://webbkurs.ei.hv.se/~anjo0199/CMS200/</a> <br></br><div className="flex"><a className="tooltip"  href={NaturalHealing}><img alt="naturalhealing" src={NaturalHealing} className="tooltipimage"></img> Bild</a>  Skoluppgift gjord med hjälp av Elementor/WordPress </div></li>
      </ul>
      </div>
    </Layout>
  </div>
  ) 
}