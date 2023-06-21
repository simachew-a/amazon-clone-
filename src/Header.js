import React from 'react'
import './Header.css';

function Header() {
  return (
    <div>
    <div className='header__div'>
      <div className='logo'>
        <img src='data:image/png;base64,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' alt ='logo'></img>
      </div>
      <div className='search'>
      <form className=''>
        <input type='text'></input>
      </form>
       
       
        </div>
        <div>
        <h2>home</h2>
        </div>
        <div>
        <h2>Friands</h2>
        </div>
        <div>
        <h2>Chat</h2>
        </div>
        <div>
        <h2>notification</h2>
        </div>
        <div>
        <h2>acount</h2>
        </div>
        
    </div>
    <div className='hr'>
        <hr />
    </div>
    </div>
  )
}

export default Header
