import React, { Component } from "react";

class Header extends Component {
  render() {
    let portfolio = this.props.portfolioInfo;

    return (
        <div id="lead">
          <div id="lead-content">
            <h1>{portfolio.name}</h1>
            <h2>{portfolio.role}</h2>
          </div>
          <div id="lead-overlay">
          </div>
        </div>
    );
  }
}

export default Header;
