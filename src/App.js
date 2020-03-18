import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import NavLinks from './components/NavLinks';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import portfolioInfo from '../portfolioInfo';

import './App.css';

const App = () => {
  return (
    <Router>
    <div className="App">
      <NavLinks />
      {/* <Wrapper> */}
        <Route exact path='/' component={Header} />
        <Route exact path='/about' component={About} />
        <Route exact path='/experience' component={Experience} />
        <Route exact path='/education' component={Education} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/contact' component={Contact} />
      {/* </Wrapper> */}
      <Footer />

    </div>
    </Router>
  );
}

{/* <div className="App">
<NavLinks />
<Header portfolioInfo={portfolioInfo}/>
<About portfolioInfo={portfolioInfo}/>
<Experience portfolioInfo={portfolioInfo}/>
<Education portfolioInfo={portfolioInfo}/>
<Projects portfolioInfo={portfolioInfo}/>
<Skills portfolioInfo={portfolioInfo}/>
<Contact />
<Footer />

</div> */}





export default App;
