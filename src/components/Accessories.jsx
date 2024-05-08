import React from 'react'
import { useState } from 'react'
import './accessories.css'
// import './slideshow.jsx'
import sunglass from '../assets/images/accessories/glasses.1.webp'
import watch from '../assets/images/accessories/watch.5.jpg'
import perfume from '../assets/images/accessories/perfume.6.webp'
import ladieswatch from '../assets/images/accessories/lwatch.4.jpg'
import cutex from '../assets/images/accessories/cutex.webp'
import cap1 from '../assets/images/accessories/cap.1.webp'
import cap from '../assets/images/accessories/cap.jpg'
import glass1 from '../assets/images/accessories/sunglasses.4.jpg'
import glass3 from '../assets/images/accessories/glasses.3.jpg'
import lwatch1 from '../assets/images/accessories/lwatch.1.jpg'
import lwatch3 from '../assets/images/accessories/lwatch.3.webp'
import lwatch4 from '../assets/images/accessories/lwatch.2.jpeg'
import perfume1 from '../assets/images/accessories/perfume.4.webp'
import perfume2 from '../assets/images/accessories/perfume.2.jpg'
import perfume3 from '../assets/images/accessories/perfume.5.jpg'
import sunglass3 from '../assets/images/accessories/sunglasses.3.jpeg'
import sunglass2 from '../assets/images/accessories/sunglasses.2.jpg'
import sunglasses from '../assets/images/accessories/sunglasses.jpg'
import wallet from '../assets/images/accessories/wallet.jpg'
import glasses from '../assets/images/accessories/glasses.jpeg'
import watch1 from '../assets/images/accessories/watch.2.jpeg'
import watch2 from '../assets/images/accessories/watch.3.jpeg'
import watch3 from '../assets/images/accessories/watch.4.jpeg'

// function Accessories () {
  const Accessories = () => {
  // Array of images
  const images = [
    sunglass,
    ladieswatch,
    watch,
    perfume,
    cutex
  ];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to show the next image
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to show the previous image
  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  

  return (
  <div>
   <div className='slideshow'>  
     <div className="slide">
       <img className='img_slider' src={images[currentImageIndex]}  />
       </div>
       <button className='slider btn_left' onClick={prevSlide}>&larr;</button>
       <button className='slider btn_right' onClick={nextSlide}>&rarr;</button>
     </div>
    
   
     <div className='body_img'>
        <div>
          <img className="img" src= {glass1} alt="" />
          <p></p>
        </div>

        <div>
          <img className="img" src= {glass3} alt="" />
          <p></p>
        </div>
        <div>
          <img className="img" src= {glasses} alt="" />
          <p></p>
        </div>
        <div>
          <img className="img" src= {lwatch1} alt="" />
          <p></p>
        </div>

        <div>
          <img className="img" src= {lwatch3} alt="" />
          <p></p>
        </div>

        <div >
          <img className="img" src= {lwatch4} alt="" />
          <p></p>
        </div>

        <div>
          <img className="img" src= {perfume1} alt="" />
          <p></p>
        </div>

        <div>
          <img className="img" src= {perfume2} alt="" />
          <p></p>
        </div>

        <div>
          <img className="img" src= {perfume3} alt="" />
          <p></p>
        </div>

        <div>
          <img className="img" src= {sunglass3} alt="" />
          <p></p>
        </div>

        <div>
          <img className="img" src= {sunglass2} alt="" />
          <p></p>
        </div>
        <div>
          <img className="img" src= {sunglasses} alt="" />
          <p></p>
        </div>
        <div>
          <img className="img" src= {watch1} alt="" />
          <p></p>
        </div>
        <div>
          <img className="img" src= {watch2} alt="" />
          <p></p>
        </div>
        <div>
          <img className="img" src= {watch3} alt="" />
          <p></p>
        </div>
        
        <div>
          <img className="img" src= {wallet} alt="" />
          <p></p>
        </div>
        <div>
          <img className='img' src= {cap1} alt="" />
          <p></p>
        </div>

        <div>
          <img className="img" src= {cap} alt="" />
          <p></p>
        </div>

     </div>

  </div>
      
      
  )
}

export default Accessories;






