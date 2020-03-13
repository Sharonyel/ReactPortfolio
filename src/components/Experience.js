import React, { Component } from "react";

class Experience extends Component {
  render() {
    let portfolio = this.props.portfolioInfo;

    return (
         <div id="experience" className="background-alt">
          <h2 className="heading">Experience</h2>
          <div id="experience-timeline">

            {
                portfolio.experience && portfolio.experience.map((work) => {
                    return(
                        <div>
                     <h3>{work.company}</h3>
                     <h4>{work.title}</h4>
                     <p>{work.jobDesc}</p>
                     </div>

                )}
                )}
      </div>
      </div>

    //  </React>
    );
  }
}

export default Experience;
