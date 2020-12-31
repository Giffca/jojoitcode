import React from 'react'

import Navbar from "./navbar"
import Footer from "./footer"
import '../styles/index.css'

export default function Layout({children}){
    return <div className="background">
        <div className="wrapper">
        <Navbar/>
    {children}
    </div>
    <Footer/>
    </div>
}