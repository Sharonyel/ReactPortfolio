import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaLinkedin, FaFile } from "react-icons/fa";
// import { faGithubSquare } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
  render() {
    // let portfolio = this.props.portfolioInfo;
    return (
      <div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-5"></div>
              <div className="col-sm-2 top">
                {/* <span id="to-top">
                  <i className="fa fa-chevron-up" aria-hidden="true"></i>
                </span> */}
              </div>
              <div className="col-sm-5"></div>
            </div>

            <div className="row">
              <div className="col-sm-1">
                <a href="https://github.com/Sharonyel" target="_blank">
                  <FaGithub size="4x" />
                </a>
                <br />
                <strong>Github</strong>
              </div>
              <div className="col-sm-1">
                <a
                  href="https://linkedin.com/in/sharon-yelverton-92758384"
                  target="_blank"
                >
                  <FaLinkedin size="4x" />
                </a>
                <br />
                <strong>Linkedin</strong>
              </div>
              <div className="col-sm-1">
                <a href="SharonYelverton.pdf" target="_blank">
                  <FaFile size="4x" />
                </a>
                <br />
                <strong>Resume</strong>
              </div>
              <div className="col-sm-5"></div>

              <div className="col-sm-4">
                <strong>Email: </strong>
                <a href="mailto:ladysharonyel@me.com">ladysharonyel@me.com</a>
                <br />
                <strong>Phone: </strong>704.622.5385
                <br />
              </div>
              <div className="container col-sm-4">
                <div className="row">
                  <div className="copyright">
                    <p>Copyright &copy; 2020 Sharon A. Yelverton</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
