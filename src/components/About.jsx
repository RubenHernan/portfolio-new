import React from 'react'
import "./styles/about.css"

const About = ({isLight}) => {
  return (
    <div className="section" id="about">
    <div className={`star ${isLight ? "sun" :"moon"}`}></div>
    <div className="box-content box-about">
      <span className="span-section span-about ff-family-poppins-semi-b">About me</span>
      <div className="figure figure-about">
            <img className='svg-avatar' src={`./img/${ isLight ? "avatar2.svg" : "avatar.svg"}`} alt="" />
      </div>
      <div className="box-info">
        <div className="box-text">
          <h1 className="ff-family-poppins-semi-b">Hi, I am <span className='box-name'>Rubén</span></h1>
          <p className="ff-family-sen">Im a web developer, committed, responsible and
            professional. With the ability to learn
            quickly, adapt to changes,
            good communication and friendly to
            work in a team! I will be happy to talk with you!</p>
          <div className="box_icons">
            <img src="./img/icon-html.png" alt="Logo" />
            <img src="./img/icon-css.png" alt="Logo" />
            <img src="./img/icon-js.png" alt="Logo" />
            <img src="./img/icon-react.png" alt="Logo"/>
            <img src="./img/icon-node.png" alt="Logo"/>
            <img src="./img/icon-laravel.png" alt="Logo"/>

          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default About