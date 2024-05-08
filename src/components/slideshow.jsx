import React from 'react'
import { useState } from 'react'
import './Slideshow.css'
import watch from '../assets/images/accessories/watch.3.jpeg'
import perfume from '../assets/images/accessories/perfume.6.webp'
import sunglass from '../assets/images/accessories/sunglasses.4.jpg'
import ladieswatch from '../assets/images/accessories/lwatch.2.jpeg'
import cutex from '../assets/images/accessories/cutex.webp'


function slideshow() {
    const images = [
        watch,
        perfume,
        sunglass,
        ladieswatch,
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
      <div className='slideshow'>  
     <div className="slide">
       <img className='img_slider' src={images[currentImageIndex]}  />
       </div>
       <button className='slider btn_left' onClick={prevSlide}>&larr;</button>
       <button className='slider btn_right' onClick={nextSlide}>&rarr;</button>
     </div>
    
  )
}

export default slideshow

   
  
   
    
  