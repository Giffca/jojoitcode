import React from 'react'

import Navbar from "./navbar"
import Footer from "./footer"
import "./fontawesome"
import '../styles/index.css'

export default function Layout({children}){
    return <div className="pageContainer">
    <Navbar/>
        <div className="wrapper">
            {children}
        </div>
    <Footer/>
    </div>
}