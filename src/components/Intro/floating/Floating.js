import React from 'react'
import ('./floating.css')

function Floating() {
  return (
    <div className='bg-img'>
    <div className='floating'>
    <img src='../../img/crown.png' alt='' /> 
    <div style={{top:'-4%',left:'68%'}}>
     <span>Frontend</span>
 <br/>
 <span>Developer</span>
 </div>
 </div>
 <div className='f-buttom'>
<img src='../../img/glassesimoji.png' alt='szsz' />
<div className='alxpro'>
<span className=''>ALX Software Engineering</span> 
<br></br>
<span className='alxp'>Student</span>

</div>
 </div>
    </div>
  )
}

export default Floating
