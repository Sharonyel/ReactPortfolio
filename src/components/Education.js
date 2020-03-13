import React, { Component } from "react";

class Education extends Component {
  render() {
    let portfolio = this.props.portfolioInfo;

    return (
      <div id="education">
          <h2 className="heading"><span>Education</span></h2>
         
            {
                portfolio.education && portfolio.education.map((school) => {
                    return(
                     <div className="education-block">
                     <h3>{school.univName}</h3>
                     <h4>{school.univType}</h4>
                     <p>{school.eduDesc}</p>
                    </div>
                )}
                )}
      </div>

    );
  }
}

export default Education;
