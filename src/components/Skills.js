import React, { Component } from "react";

class Skills extends Component {
  render() {
    let portfolio = this.props.portfolioInfo;

    return (
      <div id="skills">
          <h2 className="heading">Skills</h2>
         
            {
                portfolio.skList && portfolio.skList.map((skill) => {
                    return(
                        <div>
                     <ul>
                     <li>{skill.skills}</li>
                    </ul>
                    </div>
                )}
                )}
      </div>

    );
  }
}

export default Skills;
