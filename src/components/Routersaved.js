import React from 'react';
import Header from './components/Header';
import NavLinks from './components/NavLinks';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";


import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import portfolioInfo from './portfolioInfo';

import './App.css';

const App = () => {
  return (
    <Router>
    <div className="App">
      
      <NavLinks />
      <Switch>
        <Route path="/header">

            <Header portfolioInfo={portfolioInfo}/>
        </Route>
          <Route path="/about">
             <About portfolioInfo={portfolioInfo}/>
          </Route>
            <Route path="/experience">
              <Experience portfolioInfo={portfolioInfo}/>
            </Route>
          <Route path="/education">
              <Education portfolioInfo={portfolioInfo}/>
          </Route>
            <Route path="/projects">

              <Projects portfolioInfo={portfolioInfo}/>
            </Route>
            <Route path="/skills">

              <Skills portfolioInfo={portfolioInfo}/>
            </Route>
           <Route path="/contact">
              <Contact />
          </Route>

      <Footer />
      </Switch>
    </div>
    </Router>
  );
}


export default App;
