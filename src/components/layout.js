import React from 'react'
import { Helmet } from "react-helmet"
import Navbar from "./navbar"
import Footer from "./footer"
import "./fontawesome"
import '../styles/index.css'

export default function Layout({children}){
    return <div className="pageContainer" id="outer-container">
        <Helmet htmlAttributes={{ lang: 'sv-SE'}}>
          <title>JoJo IT</title>
          <link rel="canonical" href="https://jojoit.tk" />
        </Helmet>
    <Navbar/>
        <div className="wrapper" id="page-wrap">
            {children}
        </div>
    <Footer/>
    </div>
}