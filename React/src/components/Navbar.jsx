import React from 'react'


function Navbar({image}) {
  return (
    <div className='navbar'>
      <img src={image} alt="gtt" />
      <div className='menu-items'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Services</p>
        <p>Projects</p>
      </div>
    </div>
  )
}

export default Navbar
