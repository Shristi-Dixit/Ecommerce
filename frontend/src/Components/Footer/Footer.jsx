import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import ayushi from '../Assets/ayushi.jpeg'
import shubhGupta from '../Assets/shubhGupta.jpeg'
import shashwatTripathi from '../Assets/shashwatTripathi.jpeg'
 const Footer = () => {
  return (
    <div className="footer">
<div className="footer-logo">
    <img src={footer_logo} alt=''/>
    <p>BUYiT</p>
</div>
<ul className="footer-links">
    <li>Company</li>
    <li>Products</li>
    <li>Offices</li>
    <li>About</li>
    <li>Contact</li>
</ul>
<div>
<div className="footer-social-icon">

     <div className="footer-icons-container">
     <img src={instagram_icon} alt=''/>
</div>
<div className="footer-icons-container">
     <img src={pintester_icon} alt=''/>
</div>
<div className="footer-icons-container">
     <img src={whatsapp_icon} alt=''/>
</div>
</div>
<div className='about-us'>
    <div className="footer-icons-container1">
    <img src={ayushi} alt=''/>
    <h1>Shristi Dixit</h1>
</div>
<div className="footer-icons-container2">
    <img src={shubhGupta} alt='' />
    <h1>Shubh Gupta</h1>
</div>
<div className="footer-icons-container3">
    <img src={shashwatTripathi} alt=""/>
    <h1>Shashwat Tripathi</h1>
</div>
</div>
    <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2024 -All Rights Reserved.</p>
    </div>
    </div>
    </div>
  )
}
export default Footer