import React from 'react'
import './footer.css'
import logo from '../assets/images/Kablue-name.jpg'
import home_icon from '../assets/images/home-icon-silhouette.png'
import phone from '../assets/images/telephone.png'
import email from '../assets/images/email.png'
import tiktok from '../assets/images/tik-tok.png'
import insta from '../assets/images/instagram.png'
import whatsapp from '../assets/images/whatsapp.png'
import facebook from '../assets/images/facebook.png'

function Footer() {
  return (
    <div>
    <div className='footer_page'>
      <div className="f_info">
<img className='image' src= {logo}/>
<p>
  quality is our priority<br></br>
  Be daring, be different, be you.
</p>
<h4>Follow us:</h4>
<a href='https://facebook.com'><img className='icons' src= {facebook} /></a>
<a href='https://whatsapp.com'><img className='icons' src= {whatsapp} /></a>
<a href='https://instagram.com'><img className='icons' src= {insta} /></a>
<a href='https://tiktok.com'><img className='icons' src= {tiktok} /></a> 



 </div>
 <div className="contact_us">
  
  <h2>Get in touch</h2>
  
  <p><img className='icons_' src= {phone} />:  0741854304</p>
  <p><img className='icons_' src= {email} />:  kablue@gmail.com</p>
  <p><img className='icons_' src= {home_icon} />:  kiamichiri,kutus</p>

  <h2>Opening time</h2>
  <p>Monday - Saturday: 9:00am - 8:00pm</p>
  <p>Sunday: Closed</p>
 </div>

 <div className="support">
  <h2>Support</h2>
  <p>AboutUs</p>
  <p>ContactUs</p>
 </div>
 </div>
      <p>© 2024 Kablue's Online Store. All rights reserved.</p>

    </div>
  )
}

export default Footer