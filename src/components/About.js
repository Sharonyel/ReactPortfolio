import React, { Component } from "react";



class About extends Component {
  render() {

    return (
      <div id="about">
        <div className="container">
          <h1 className="heading">About Me</h1>

          <div className="row">
            <div className="col-md-4 aboutImg">
              <img src="../images/myphoto1.jpg" alt="pic of me" />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-7">
              <p>Sharon Yelverton is an all around loving person. She holds a degree in Computer Science from the University of North Carolina at Charlotte. Having worked as a Programmer Analyst, she has the innate abilities of thinking logically."
                </p>
              <br />
              <p>"She manages the day to day operations of a non-profit organization that gives back to the community. The love that she has for being around positive people makes her a great team player. Working in a positive environment allows her to excel in whatever she attempts to do."
              </p> 
              <br />
              <p>Sharon is looking to enhance her skill set to impact the lives of others. Her eagerness for knowledge and her determination has given her great success. Currently enrolled in the Coding Bootcamp at UNC Charlotte, she is learning more about becoming a Full Stack Developer. She would like to continue working in the technology field to explore the great world of coding. There are so many ideas that have yet to be revealed. Let her share her ideas with you." 
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}




export default About;
