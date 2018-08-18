import React from 'react'
import Link from 'gatsby-link'
import './Header.css'


const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
    <Link to="/"> Logo here </Link>
    <Link to="/">About me</Link>
    <Link to="/">Contact</Link>
    <Link to="/">Profile</Link>

    <Link to="/"><button>Buy</button></Link>
    
    
    </div>

  </div>
)

export default Header
