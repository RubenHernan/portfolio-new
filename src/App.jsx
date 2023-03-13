
import { useState } from 'react';
// import { IntlProvider,FormattedMessage } from 'react-intl';
import './App.css'
import About from './components/About'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio';
import "../src/utils/languajes/esp-PE.json"
import FooterPlanet from './components/FooterPlanet';

function App() {
  const [isLight, setIsLight] = useState(false);

  return (
    //<IntlProvider locale='en-US' messages={{}}>
      <div className={`App ${isLight && "light-mode"}`}>
        <Navbar isLight={isLight} setIsLight={setIsLight}></Navbar>
        <About isLight={isLight}></About>
        <Footer></Footer>
        <Portfolio></Portfolio>
      <Contact></Contact>
        <FooterPlanet></FooterPlanet>
      </div>

    //</IntlProvider>
  )
}

export default App
