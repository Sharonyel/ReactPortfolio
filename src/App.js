import React from 'react';
import Header from './components/Header';
import NavLinks from './components/NavLinks';

import About from './components/About';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import portfolioInfo from './portfolioInfo';

// import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header portfolioInfo={portfolioInfo}/>
      <NavLinks />
      <About portfolioInfo={portfolioInfo}/>
      <Experience portfolioInfo={portfolioInfo}/>
      <Education portfolioInfo={portfolioInfo}/>
      {/* <Projects portfolioInfo={portfolioInfo}/> */}
      {/* <Skills portfolioInfo={portfolioInfo}/> */}
      {/* <Contact portfolioInfo={portfolioInfo}/> */}

    </div>
  );
}


export default App;
