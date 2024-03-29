import React from 'react'
import useScreen from '../hooks/useScreen.ts'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
import Menu from '../assets/images/Menu Icon.png'
import './styles/header.scss'

const linkStyle: React.CSSProperties = { textDecoration: 'none', color: 'black' }

export default function Header() {
  const [width,] = useScreen();

  return <>
    <header>
      <nav className='navbar'>
        <img src={Logo} alt="Logo" />
        {width <= 768 ? <><img src={Menu} alt="Menu" className='menu-icon' /></>: <>
          <Link onClick={() => document.title = 'DineEase™'} style={linkStyle} to='/' className='navlink'>Home</Link>
          <Link onClick={() => document.title = 'DineEase™ - About'} style={linkStyle} to='/about' className='navlink'>About Us</Link>
          <Link onClick={() => document.title = 'DineEase™ - Contact'} style={linkStyle} to='/contact' className='navlink' >Contact</Link>
        </>}
      </nav>
    </header>
  </>
}