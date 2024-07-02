import React from 'react'
import './Offers.css'

import officialModel from '../Assets/officialModel.jpg'
 const Offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
<h1>Exclusive</h1>
<h1>Offers for You</h1>
<p>ONLY ON BEST SELLERS PRODUCTS</p>
<button>Check Now</button>
        </div>
        <div className="offers-right">
<img  src={officialModel} alt=''/>
        </div>
    </div>
  )
}
export  default Offers