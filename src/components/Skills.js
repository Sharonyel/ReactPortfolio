import React, { Component } from "react";

class Skills extends Component {
  render() {
    let portfolio = this.props.portfolioInfo;

    return (
      <div id="skills">
          <h2 className="heading">Skills</h2>
         <ul>
            {
                portfolio.skList.map((skill) => {
                    return(
                      <li>{skill.skills}</li>
                    
                )}
                )}
                </ul>
      </div>

    );
  }
}

export default Skills;
