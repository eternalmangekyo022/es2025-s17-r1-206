import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
import Menu from '../assets/images/Menu Icon.png'

const linkStyle: React.CSSProperties = { textDecoration: 'none', color: 'black' }

export default function Header() {
  const [screen, setScreen] = useState<[number, number]>([window.innerWidth, window.innerHeight])

  useEffect(() => {
    window.onresize = () => {
      setScreen([innerWidth, innerHeight]);
    }
  }, [])

  return <>
    <header>
      <div className='navbar'>
        <img src={Logo} alt="Logo" />
        {screen[0] <= 768 ? <><img src={Menu} alt="Menu" className='menu-icon' /></>: <>
          <Link style={linkStyle} to='/' className='navlink'>Home</Link>
          <Link style={linkStyle} to='/about' className='navlink'>About Us</Link>
          <Link style={linkStyle} to='/contact' className='navlink' >Contact</Link>
        </>}
      </div>
    </header>
  </>
}