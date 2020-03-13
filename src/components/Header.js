import React, { Component } from 'react';

class Header extends Component {
    render () {
    let portfolio = this.props.portfolioInfo;

    return (
        <React.Fragment>
        <div>
        <header id="menu">
            <nav id="nav-wrap">
              {/* <a>Show Navigation</a>
              <a> Hide Navigation</a> */}
              <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#about">About</a></li>
                  <l1><a className="smoothscroll" href="#experience">Experience</a></l1>
                  <l1><a className="smoothscroll" href="#educion">Education</a></l1>
                  <l1><a className="smoothscroll" href="#projects">Projects</a></l1>
                  <l1><a className="smoothscroll" href="#skills">Skills</a></l1>
                  <l1><a className="smoothscroll" href="#contact">Contact</a></l1>

              </ul>
            </nav>

            <div className="row banner">
                <div className="banaaner-text">
                    <h1>{portfolio.name}</h1>
                    <h2>{portfolio.role}</h2>

                </div>

            </div>

        </header>
        </div>
        </React.Fragment>
    )
    }
};



export default Header;