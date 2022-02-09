import React from 'react'
import './header.css'
import Logo from '../../assets/img/logo60x60.png'
import Menu from '../../assets/img/menu.png'

export default function Header(props){
    return(
        <header>   
                <a onClick={()=>{props.showSideBar ? props.setShowSideBar(false) : props.setShowSideBar(true)}}><img className='menuLogo' src={Menu} alt='logo'/></a>
                <img src={Logo} alt='logo'/>
                <h1>PIZZA TASTE</h1>
        </header>
    )
}