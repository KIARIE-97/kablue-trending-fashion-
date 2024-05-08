import React from 'react'
import './newarrivals.css'
import airforce2 from '../assets/images/kablue pictures/airforce.2.jpg'
import airforce from '../assets/images/kablue pictures/airforce.jpg'
import bape2 from '../assets/images/kablue pictures/bape.2.jpg'
import amiri from '../assets/images/kablue pictures/amiri.jpg'
import converse2 from '../assets/images/kablue pictures/converse 2.jpg'
import airmax from '../assets/images/kablue pictures/airmax.jpg'
import foamcleaner from '../assets/images/kablue pictures/foam cleaner.jpg'
import giftbox from '../assets/images/kablue pictures/giftbox 2.jpg'
import shoeprotector from '../assets/images/kablue pictures/shoe protector.jpg'
import lv1 from '../assets/images/kablue pictures/lv.1.jpg'
import lvcream from '../assets/images/kablue pictures/lv cream 2.jpg'
import airforce5 from '../assets/images/kablue pictures/airforce.5.jpg'

function Newarrivals() {
  return (
    <div className='newarrivals'>

<div><img className="shoes" src={airforce5}/>
       <p>airforce</p>
       </div>

       <div><img className="shoes" src={airforce2}/>
       <p>airforce</p>
       </div>

       <div><img className="shoes" src={airforce}/>
       <p>airforce size: 40/ 41/42/43/44/45</p>
       </div>
       
       <div><img className="shoes" src={bape2} />
       <p>bape star</p>
       </div>

      <div> <img className="shoes" src={amiri}/>
      <p>amiri</p>
      </div>

       <div><img className="shoes" src={converse2} />
       <p>chunk tylor</p>
       </div>

      <div> <img className="shoes" src={airmax} />
      <p>airmax</p>
      </div>

      <div> <img className="shoes" src={shoeprotector} />
      <p>shoeprotectors available</p>
      </div>

       <div><img className="shoes" src={lv1} />
       <p>luis vuiton (lv)</p>
       </div>

      <div> <img className="shoes" src={lvcream}/>
      </div>

       <div><img className="shoes" src={foamcleaner} />
       <p>foamcleaners</p>
       </div>

      <div> <img className="shoes" src={giftbox}/>
      <p>giftboxes</p>
      </div>

    </div>
  )
}

export default Newarrivals