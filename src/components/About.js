import React, { Component } from "react";

class About extends Component {
  render() {
    let portfolio = this.props.portfolioInfo;

    return (
    //   <React>
      <div id="about">
          <div className="container">
              <div className="row">
                  <div className="col-md-4 aboutImg">
          <img  src="../images/myphoto1.jpg" alt="pic of me"/>
          </div>
        <div className="col-md-1"></div>
        <div className="col-md-7">
          <h1 className="heading">About Me</h1>
        <p>{portfolio.about}</p>
        </div>
       
        </div>
        </div>
      </div>
    //  </React>
    );
  }
}

export default About;
