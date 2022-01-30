import React from 'react'

import Navbar from "./navbar"
import Footer from "./footer"
import "./fontawesome"
import '../styles/index.css'

export default function Layout({children}){
    return <div className="pageContainer" id="outer-container">
    <Navbar/>
        <div className="wrapper" id="page-wrap">
            {children}
        </div>
    <Footer/>
    </div>
}