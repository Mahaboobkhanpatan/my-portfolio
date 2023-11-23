import React, { useState } from 'react'
import './navbar.css'
import desktoplogo from '../../assets/desktoplogo.webp'
import {Link} from 'react-scroll'
import contactImg from '../../assets/contactmeimg.webp'
import menu from '../../assets/menu-icon.png'

const NavBar=()=>{
  const [showMenu,setShowMenu]=useState(false)
  return(
    <nav className='navbar'>
      <img src={desktoplogo} alt='desktoplogo' className='desktopimg'/>
      <div className='desktopmenu'>
        <Link activeClass='active' to='introductionPart' spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItems'>Home</Link>
        <Link activeClass='active' to='skills-section' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItems'>About</Link>
        <Link activeClass='active' to='portfolio-section' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItems'>Portfolio</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItems'>Projects</Link>
      </div>
      <div>
        <button id='desktopbutton' onClick={()=>{
          document.getElementById('contact-section').scrollIntoView({behaviour:'smooth'} ,{duration:'500'}, {offset:'-100'})
        }}>
          <img src={contactImg} alt='button img' className='buttonimg'/>  contact me</button>
         
      </div>
      <img src={menu} alt='menuBar' className='menuBar' onClick={()=>setShowMenu(!showMenu)}/>
      <div className='navmenu' style={{display : showMenu? "flex":"none"}}>
        <Link activeClass='active' to='introductionPart' spy={true} smooth={true} offset={-100} duration={500}  className='menuListItems ' onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills-section' spy={true} smooth={true} offset={-100} duration={500} className='menuListItems'onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='portfolio-section' spy={true} smooth={true} offset={-100} duration={500} className='menuListItems'onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='m3enuListItems'onClick={()=>setShowMenu(false)}>Projects</Link>
      </div>


    </nav>

  )
}
export default NavBar