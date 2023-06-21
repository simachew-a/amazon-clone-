import Card from '../card/Card'
import React from 'react'
import('./survices.css')
import('../card/card.css')


function Survices() {
  return (
    <div className='survices'>
    <div className='awesome'>
<span>MY awesome Survices</span>
<span>Survices</span>
<span>Developing website using Reactjs Liberary</span>
<span>javascript developer</span>
<a href='./cv.pdf' download>
<button className='button s-button'> Download CV</button>
</a>
    </div>
    <div className='cards'>
    <Card />


    </div>
      
    </div>
  )
}

export default Survices
