import React from 'react'
import './nav.css'


function Navbar() {
  return (
    <div className='n-wrapper'>
    <div className='n-left'>
    <div className='n-name'>Simachew</div>
    <span>Toggle</span>

    </div>
    <div className='n-right'>
<div className='n-list'>
  <ul style={{listStyleType:'none'}}>
    <li>Home</li>
    <li>Survices</li>
    <li>Experience</li>
    <li>Portfolio</li>
    <li>Testimonials</li>
  </ul>
</div>
<button className='button n-button'>Conact us</button>
</div>
  
    </div>
  )
}

export default Navbar
