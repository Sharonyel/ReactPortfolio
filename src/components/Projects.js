import React, { Component } from "react";

class Projects extends Component {
  render() {
    // let portfolio = this.props.portfolioInfo;

    return (    
    <div id="projects" class="background-alt">
    <h2 class="heading">Projects</h2>
    <div class="container">


      <div class="card-deck">
      <div class="col-sm-4 projectcard">
          <div class="card cardborder">

              <img src="images/nutritionjournal.jpg" 
                  class="card-img-top projImg" alt="img"/>
              <div class="card-body">
                  <h5 class="card-title">Nutrition Journal</h5>
                  <p class="card-text">Track your calories by entering the food you have eaten
                      Enter your exercise to see the expected calories burned.</p>
              </div>
              <div class="card-footer">
                  <button class="card-btn"><a class="card-link" href="https://salty-ravine-80275.herokuapp.com/" 
                      target="_blank">See It</a></button>
                  <button class="card-btn"><a class="card-link" href="https://github.com/Sharonyel/project2" 
                      target="_blank">Github</a></button>
              </div>
          </div>
       </div>
      <div class="col-sm-4 projectcard">
          <div class="card cardborder">
              <img src="images/findit.jpg" class="card-img-top projImg"
                  alt="img"/>
              <div class="card-body">
                  <h5 class="card-title">Find It</h5>
                  <p class="card-text">This app let's you search a city to find things you like. You can search for restaurants, shopping malls, hotels, book stores, etc.</p>
              </div>
              <div class="card-footer">
                  <button class="card-btn"><a class="card-link" href="https://sharonyel.github.io/FindIt/" 
                      target="_blank">See It</a></button>
                  <button class="card-btn"><a class="card-link" href="https://github.com/Sharonyel/Findit" 
                      target="_blank">Github</a></button>

              </div>
          </div>
      </div>
      <div class="col-sm-4">
          <div class="card cardborder">
              <img src="images/burger.jpg" class="card-img-top projImg"
                  alt="img"/>
              <div class="card-body">
                  <h5 class="card-title">Eat Da Burger</h5>
                  <p class="card-text">An app that lets users input the names of burgers they would like to eat.
                      Click a button to "eat" it and it moves to the burgers eaten list.
                  </p>
              </div>
              <div class="card-footer">
                  <button class="card-btn"><a class="card-link" href="https://say-eatdaburger.herokuapp.com/" 
                      target="_blank">See It</a></button>
                  <button class="card-btn"><a class="card-link" href="https://github.com/Sharonyel/burger" 
                      target="_blank">Github</a></button>

              </div>
          </div>
      </div>
      <div class="card-deck">
                <div class="col-sm-4">
                    <div class="card cardborder">

                        <img src="images/codequiz1.jpg"
                            class="card-img-top projImg" alt="img"/>
                        <div class="card-body">
                            <h5 class="card-title">Code Quiz</h5>
                            <p class="card-text">Let's test your knowledge on HTML, CSS, and Javascript. Answer as many questions as you can before the time runs out. 
                                </p>
                        </div>
                        <div class="card-footer">
                            <button class="card-btn"><a class="card-link" href="https://sharonyel.github.io/code-quiz/" 
                                target="_blank">See It</a></button>
                            <button class="card-btn"><a class="card-link" href="https://github.com/Sharonyel/code-quiz" 
                                target="_blank">Github</a></button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card cardborder">
                        <img src="images/notetaker1.jpg"
                            class="card-img-top projImg" alt="img" />
                        <div class="card-body">
                            <h5 class="card-title">Note Taker</h5>
                            <p class="card-text">This app allows you to enter notes and log them to view later. 
                                The ability to edit and delete a note is available</p>
                        </div>
                        <div class="card-footer">
                            <button class="card-btn"><a class="card-link" href="https://powerful-coast-11169.herokuapp.com/" 
                                target="_blank">See It</a></button>
                            <button class="card-btn"><a class="card-link" href="https://github.com/Sharonyel/noteTaker" 
                                target="_blank">Github</a></button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card cardborder">
                        <img src="images/weatherdashboard.jpg"
                            class="card-img-top projImg" alt="img"/>
                        <div class="card-body">
                            <h5 class="card-title">Weather Dashboard</h5>
                            <p class="card-text">See the current weather condition in any City by entering the city name. Also view the 5-day Forecast.</p>
                        </div>
                        <div class="card-footer">
                            <button class="card-btn"><a class="card-link" href="https://sharonyel.github.io/weather_dashboard/" 
                                target="_blank">See It</a></button>
                            <button class="card-btn"><a class="card-link" href="https://github.com/Sharonyel/weather_dashboard/" 
                                target="_blank">Github</a></button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
     </div>

 </div>

    );
  }
}

export default Projects;


{/* <div id="projects" class="background-alt">
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
</div> */}
