import React from 'react'
import './header.css'
import kablueLogo from "../assets/images/kablue-logo.jpg"
import kablueName from "../assets/images/kablue-name.jpg"

function Header() {
  return (
    <div>

<div className="header">
  <p className="phone">call us: +254741854304.</p>


        <img className='logo'
        src={kablueLogo} alt="Kablue Logo" />

        {/* <img className='logo-name'
        src={kablueName} alt="Kablue Name" /> */}

</div>

    </div>
  )
}

export default Header

