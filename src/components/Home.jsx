import React from 'react'
import'./home.css'
import homeImg from '../assets/images/home bgimage.jpg'

function Home() {
  return (
    <div>
      <h1 className='title'>Welcome to Kablue's online store</h1>
      <div className="intro">
        <p className='introMessage'>Step into style with our exquisite collection of shoes! From sleek sneakers to elegant heels,<br></br>
           we have the perfect pair for every occasion. Explore our curated selection crafted with quality<br></br>
            materials and impeccable design. Whether you're strolling the streets or strutting the runway,<br></br>
             elevate your look with our footwear essentials.We are committed to providing<br></br>
            you with the best customer service and the best selection of products. Our goal<br></br>
            is to make sure you are completely satisfied with your experience at Kablue's
            online store.<br></br> 
            Start your journey to fashionable feet now!
</p>
<img src= {homeImg} alt="homeImg" className="homeImg" />
  </div>

<div className="makeOrders">

  
</div>
    </div>
  )
}

export default Home
