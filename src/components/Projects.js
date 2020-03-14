import React, { Component } from "react";

class Projects extends Component {
  render() {
    let portfolio = this.props.portfolioInfo;

    return (
      <div id="projects" class="background-alt">
          <h2 className="heading">Projects</h2>
         <div className="container">
          <div className="row">
            {
                portfolio.projects.map((project) => {
                    return(
                        <div className="col-md-4 col-sm-6 projectcard">
                            <div className="card cardborder">
                                <img src={project.projectImg} className="card-img-top projImg" alt={project.name}></img>
                                <div className="card-body">
                                    <h5 className="card-title">{project.name}</h5>
                                    <p className="card-text">{project.desc}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="card-btn"><a className="card-link"
                                    href={project.seeIt} target="_blank">See It</a></button>
                                    <button className="card-btn"><a className="card-link"
                                    href={project.github} target="_blank">Github</a></button>
                                </div>
                    </div>
                    </div>
                )}
                )}
                </div>
      </div>
      </div>
    );
  }
}

export default Projects;
