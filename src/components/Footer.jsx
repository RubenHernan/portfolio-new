import React from 'react'
import "./styles/footer.css"

const Footer = () => {
  return (
    <>  
    
  <div className="footer">
    <ul className="footer-links">
      <li><a className="github" href="https://github.com/RubenHernan/" target="blank"><img src="./img/git.png" alt="github" /></a></li>
      <li><a className="linkedin" href="https://www.linkedin.com/in/rubén-hernández-6642a2253" target="blank"><img src="./img/in.png" alt="linkedin"/></a></li>
      <li><a className="ig" href="https://www.instagram.com/Rube.nz/" target="blank"><img src="./img/ig.png" alt="instagram"/></a></li>
    </ul>
  </div>

  {/* <div class="footer-text">
    <h3 class="ff-family-poppins-semi-b">Web Developer</h3>
    <p class="ff-family-sen"><span class="full ff-family-poppins-semi-b">FULL</span> Stack</p>
  </div>
   */}
  </>
  )
}

export default Footer