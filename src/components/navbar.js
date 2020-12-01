import React from 'react'
import { Link } from 'gatsby'

export default function Navbar(){
    return (
        <div className="nav-bar font-normal">
            <div className="titel"><Link to ={`/`}><span><p>JoJo IT Handelsbolag</p></span></Link></div>
        <div className="nav-bar-buttons">
            <div className="box-effect"><Link to ={`/about`}><span><p>Om oss</p></span></Link></div>
            <div className="box-effect"><Link to ={`/previousworks`}><span><p>Våra verk</p></span></Link></div>
            <div className="box-effect"><Link to ={`/contact`}><span><p>Kontakt</p></span></Link></div>
        </div>
            
        </div>

    )
    
}
