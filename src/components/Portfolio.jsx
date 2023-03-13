import React from 'react'
import "./styles/portfolio.css"

const Portfolio = () => {
  return (
    <div className="section section-portfolio" id="portfolio">
    <div className="box-content-portfolio">
      <span className="span-section ff-family-poppins-semi-b">My last projects</span>
      <div className="box-portfolio">
        <div className="box-projects">
          <div className="project">
            <div className="project-hover project-hover-1">
                <p>Responsive design of an ecommerce store with database and a payment gateway PayPal!
</p>
              <ul className="ff-family-sen">
                <li>NodeJS</li>
                <li>HTML-CSS</li>
                <li>JavaScript</li>
                <li>MySql</li>
              </ul>
            </div>
            <div className="project-title">
              <span className="ff-family-sen">E Commerce with BD</span>
            </div>
            <div className="project-img">
              <img src="./img/project-1.png" alt="project-1" />
            </div>
          </div>
          <div className="project">
            <div className="project-hover project-hover-2">
                <p>An application where you can create and play different casual games such as: hangman, memorama, word soup.
</p>
              <ul className="ff-family-sen">
                <li>Laravel</li>
                <li>PHP</li>
                <li>HTML-CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="project-title">
              <span className="ff-family-sen">Games Page</span>
            </div>
            <div className="project-img">
              <img src="./img/project-2.png" alt="project-2"/>
            </div>
          </div>
          {/* <!-- <div class="project">
            <div class="project-hover project-hover-3">
              <ul class="ff-family-sen">
                <li>PHP</li>
                <li>HTML-CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div class="project-title">
              <span class="ff-family-sen">Hotel reservation</span>
            </div>
            <div class="project-img">
              <img src="./src/img/project-3.png" alt="project-3">
            </div>
          </div> --> */}
          <div className="project">
            <div className="project-hover project-hover-4">
                <p>A wiki to list all dimensions and their characters from the series using the Rick and Morty API!</p>
              <ul className="ff-family-sen">
                <li>ReactJS</li>
                <li>HTML-CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="project-title">
              <span className="ff-family-sen">Wiki APP</span>
            </div>
            <div className="project-img">
              <img src="./img/wiki.PNG" alt="project-4"/>
            </div>
          </div>
          <div className="project">
            <div className="project-hover project-hover-5">
                <p>An application to visualize pokemon and their statistics using the poke API!.</p>
              <ul className="ff-family-sen">
                <li>ReactJS</li>
                <li>Redux</li>
                <li>HTML-CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="project-title">
              <span className="ff-family-sen">POKE DEX</span>
            </div>
            <div className="project-img">
              <img src="./img/poke.PNG" alt="project-5"/>
            </div>
          </div>
          <div className="project">
            <div className="project-hover project-hover-6">
                <p>Responsive design of an ecommerce store to simulate a virtual store with all its features using a products and cart API!</p>
              <ul className="ff-family-sen">
                <li>ReactJS</li>
                <li>Redux</li>
                <li>HTML-CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="project-title">
              <span className="ff-family-sen">E-Commerce with API</span>
            </div>
            <div className="project-img">
              <img src="./img/project-6.png" alt="project-6"/>
            </div>
          </div>
          <div className="project">
            <div className="project-hover project-hover-7">
                <p>A weather app to know the temperature and weather of your current location with a weather API!</p>
              <ul className="ff-family-sen">
                <li>ReactJS</li>
                <li>HTML-CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="project-title">
              <span className="ff-family-sen">WEATHER APP</span>
            </div>
            <div className="project-img">
              <img src="./img/project-7.png" alt="project-7"/>
            </div>
          </div>

          {/* <div class="project">
            <div class="project-hover project-hover-8">
                <p>An application where users are created, read, updated and removed from a database using a user API!</p>
              <ul class="ff-family-sen">
                <li>ReactJS</li>
                <li>HTML-CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div class="project-title">
              <span class="ff-family-sen"></span>
            </div>
            <div class="project-img">
              <img src="./img/project-8.png" alt="project-8"/>
            </div>
          </div> */}

          <div className="project">
            <div className="project-hover project-hover-9">
                <p>Responsive design of an ecommerce store using the LocalStorage!</p>
              <ul className="ff-family-sen">
                <li>HTML-CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="project-title">
              <span className="ff-family-sen">E commerce</span>
            </div>
            <div className="project-img">
              <img src="./img/project-9.png" alt="project-9"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  )
}

export default Portfolio