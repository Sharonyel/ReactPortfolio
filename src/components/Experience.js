import React, { Component } from "react";

class Experience extends Component {
  render() {
    let portfolio = this.props.portfolioInfo;

    return (
         <div id="experience" className="background-alt">
          <h2 className="heading">Experience</h2>

            {
                portfolio.experience.map((work) => {
                    return(
                   <div className="education-block">
                     <h3>{work.company}</h3>
                     <h4>{work.title}</h4>
                     <p>{work.jobDesc}</p>
                    </div>
                )}
                )}
      </div>
      

    );
  }
}

export default Experience;
