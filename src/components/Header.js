import React, { Component } from 'react';

class Header extends Component {
    render () {
    let portfolio = this.props.portfolioInfo;

    return (
        <React.Fragment>
        {/* <div> */}
        <header>
            <ul id="menu" className="shadow">
                  <li><a href="#about">About</a></li>
                  <l1><a href="#experience">Experience</a></l1>
                  <l1><a href="#education">Education</a></l1>
                  <l1><a href="#projects">Projects</a></l1>
                  <l1><a href="#skills">Skills</a></l1>
                  <l1><a href="#contact">Contact</a></l1>

              </ul>
            </header>

            <div className="row banner">
                <div className="banner-text">
                    <h1>{portfolio.name}</h1>
                    <h2>{portfolio.role}</h2>

                </div>

            </div>

        {/* </div> */}
        </React.Fragment>
    )
    }
};



export default Header;