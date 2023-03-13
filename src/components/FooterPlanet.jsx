import React from 'react'
import "./styles/footerPlanet.css"

const FooterPlanet = () => {
  return (
    <div id="saturn">
        <div className="planet planet-bg">
          <div className='planet__box'>
            <div className='planet__item'>
              <p className='planet__text ff-family-sen'> 
          You want to know more about me or colaborate in a project?
          Feel free to contact me via direct email at 
          <span> hernandezz07@hotmail.com</span>
          </p>
          </div>
          <div className='planet__item'>
            <p className='planet__social ff-family-sen'>or send me a message on social networks:</p>
              <ul className='planet__list'>
                <li><a className="linkedin" href="https://www.linkedin.com/in/rubén-hernández-6642a2253" target="blank"><i className='bx bxl-linkedin'></i></a></li>
                <li><a className="ig" href="https://www.instagram.com/Rube.nz/" target="blank"><i className='bx bxl-instagram-alt' ></i></a></li>
                <li><a className="github" href="https://github.com/RubenHernan/" target="blank"><i className='bx bxl-github' ></i></a></li>
              </ul>

          </div>
          </div>
          <div className='planet__copy ff-family-kalam'>© 2023 Rubén Hernández.</div>
        </div>
    </div>
  )
}

export default FooterPlanet