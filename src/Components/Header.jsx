import React from 'react';
import Navbar from './Navbar'

function Header() {
  return (
    <div id='main'>
      <Navbar></Navbar>
      <div className='name'>
        <h1><span>Lauch Your App </span> <br></br>With Confidence And Creativity</h1>
        <p className='details'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam itaque explicabo similique enim iusto eveniet.</p>
        <a href="#" className='cv-btn'>Dowloand</a>
      
      </div>
    </div>
  )
}

export default Header;
