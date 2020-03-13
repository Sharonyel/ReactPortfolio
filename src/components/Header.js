import React, { Component } from "react";

class Header extends Component {
  render() {
    let portfolio = this.props.portfolioInfo;

    return (
      <React.Fragment>
        <div id="lead">
          <div id="lead-content">
            <h1>{portfolio.name}</h1>
            <h2>{portfolio.role}</h2>
          </div>
          <div id="lead-overlay">
            <div id="lead-down">
              <span>
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
