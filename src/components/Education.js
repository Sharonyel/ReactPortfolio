import React, { Component } from "react";

class Education extends Component {
  render() {
    // let portfolio = this.props.portfolioInfo;

    return (
      <div id="education">
      <h2 class="heading">Education</h2>
      <div class="education-block">
          <h3>University of North Carolina at Charlotte</h3>
          <span class="education-date">April 2020</span>
          <h4>Full Stack Coding Bootcamp</h4>
          <p>
              A Full Stack Developer program focused on gaining technical programming skills in computer science using
              Browser Based Technologies, Deployment, Databases, Server Side Development and Quality Assurance.
          </p>
      </div>

      <div class="education-block">
          <h3>University of North Carolina at Charlotte</h3>
          <span class="education-date"></span>
          <h4>Bachelor of Arts in Computer Science</h4>
      </div>
  </div>
    );
  }
}

export default Education;
{/* <div id="education">
<h2 className="heading"><span>Education</span></h2>
  {
      portfolio.education.map((school) => {
          return(
           <div className="education-block">
           <h3>{school.univName}</h3>
           <h4>{school.univType}</h4>
           <p>{school.eduDesc}</p>
          </div>
      )}
      )}
</div> */}
