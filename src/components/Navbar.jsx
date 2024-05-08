import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='parentNav'>
        <Link to= "/">Home</Link>
        <Link to= "/Newarrivals">NEW ARRIVALS</Link>
        <Link to= "/Accessories">ACCESSORIES</Link>
        <Link to= "/Footwear">FOOTWEAR</Link>
    </div>
  )
}

export default Navbar

// import React, { useState } from 'react';
// import './Navbar.css'; // Import your CSS file for styling

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="menu-icon" onClick={toggleMenu}>
//         <i className="fas fa-bars"></i>
//       </div>
//       <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">About</a></li>
//         <li><a href="#">Services</a></li>
//         <li><a href="#">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
