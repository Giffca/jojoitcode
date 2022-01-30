import React from 'react'
import { Link } from 'gatsby'

export default function Footer(){
    return <footer className="footer font-normal">
        <div className="footerwrapper">
            <div className="footertext">jojoit.contact@gmail.com</div> 
            <div className="sitemap">
                <Link to ={`/`}>Hem</Link>
                <Link to ={`/about`}>Om oss</Link>
                {/* <Link to ={`/previousworks`}>Våra verk</Link> */}
                <Link to ={`/contact`}>Kontakt</Link>
            </div>
            <div className="footertext">JoJo IT Handelsbolag © {new Date().getFullYear()}</div>
        </div>
         </footer>
}
