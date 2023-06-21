
import React from 'react'
import Floating from './floating/Floating'
import ('./intro.css')
//import Instagram from "../../img/instagram.png";
function Intro() {
  return (
    <div className='intro'>
    <div className='i-left'>
    <div className='i-name'>
        <span>I AM </span>
        <span>SIMACHEW ANMAW</span>
        <span>Frontend Developer with High Level
         of Experience in Web Development ,
       And Producing The quality Work</span>
    </div>
<button className='button i-button'>Hire me</button>
<div className="i-icons">
<img src='../../img/twitter.avif' alt='' />
<img src='../../img/Linkedin.png' alt='' />
<img src='../../img/instagram.png' alt='' />
        </div>
    </div>
    <div className="i-right">
    <div className="pro">
      <img 
      className='pro'
      src = '../../img/siim.jpg' alt='i am sim
      achew' />
      </div>
      <br />
      <Floating />
      <div>
    
      </div>
      </div>
 
      
    </div>
  )
}

export default Intro
