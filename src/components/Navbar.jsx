import React, { useState } from 'react'
import "./styles/navbar.css"

const Navbar = ({isLight, setIsLight}) => {
    const [isMenu, setIsMenu] = useState(false)


const handleMenu = () => {
    setIsMenu(!isMenu)
}


const handleDarkMode = () => {
setIsLight(!isLight)
}

  return (
    <nav className="navbar ff-family-poppins-regular">
    <div className="box-navbar">
      <div className="box-switch">
          <label className="switch">
              <input type="checkbox" onClick={handleDarkMode}/>
              <span className="slider"></span>
          </label>
      </div>
      <div className={`icon-menu ${isMenu && "icon-menu-res"}`} onClick={handleMenu}>
        <img src="./img/icon.png" alt="Logo"/>
      </div>
      <div className="logo-r ff-family-logo">
        <span className='ff-family-kalam box-name'>R</span>
      </div>
    </div>
    <ul className={`box-menu ${isMenu && "box-menu-res"}`}>
      <li><a className="box-menu-a" href="#about">ABOUT</a></li>
      <li><a className="box-menu-a" href="#portfolio">ROJECTS</a></li>
      <li><a className="box-menu-a" href="#contact">CONTACT</a></li>
    </ul>
  </nav>
  )
}

export default Navbar