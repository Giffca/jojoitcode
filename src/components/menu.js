import { push as Menu } from 'react-burger-menu'
import { Link } from 'gatsby'
import * as React from "react"

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '30px',
      height: '24px',
      right: '36px',
      top: '28px'
    },
    bmBurgerBars: {
      background: '#f8f8f8',
      height: '3px'
    },
    bmBurgerBarsHover: {
      background: '#ffffff'
    },
    bmCrossButton: {
        top: '22px',
        right: '36px',
      height: '28px',
      width: '28px'
    },
    bmCross: {
        height: '32px',
        top: '-2px',
        background: '#fff'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#252525',
      padding: '2.5em 1em 0',
      fontSize: '24px',
      fontFamily: 'Abhaya Libre, serif',
      overflow: 'hidden',
    },
    bmMorphShape: {
       fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'flex',
      flexDirection: 'columns',
      color: 'rgb(228, 228, 228)'
    },
    bmOverlay: {
       background: 'rgba(0, 0, 0, 0)'
    }
  }


class MobileNav extends React.Component {


    render () {
      return (
        <Menu disableAutoFocus class="mobileNav" pageWrapId={ "page-wrap" } right styles={ styles }>
        <Link to ={`/`} id="home" className="menu-item"><span><p>Hem</p></span></Link>
        <Link to ={`/about`} id="about" className="menu-item"><span><p>Om oss</p></span></Link>
        <Link to ={`/contact`} id="contact" className="menu-item"> <span><p>Kontakt</p></span></Link>
        </Menu>
      );
    }
  }
  
  export default MobileNav