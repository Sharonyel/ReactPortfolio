import React, { Component } from "react";

class Footer extends Component {
    render() {
        // let portfolio = this.props.portfolioInfo;
        return (
            <footer>
                <div classNameName="container">
                    <div classNameName="row">
                        <div classNameName="col-sm-5"></div>
                        <div classNameName="col-sm-2 top">
                            <span id="to-top">
                                <i className="fa fa-chevron-up" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div classNameName="col-sm-5"></div>
                    </div>

                    <div classNameName="row">
                        <div className="col-sm-1">
                            <a href="https://github.com/Sharonyel" target="_blank">
                                <i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
                            <br />
                            {/* <strong style="color:rgb(18, 97, 170)">Github</strong> */}
                        </div>
                        <div className="col-sm-1">
                            <a href="https://linkedin.com/in/sharon-yelverton-92758384" target="_blank">
                                <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i></a>
                            <br />
                            {/* <strong style="color:rgb(18, 97, 170)">linkedin</strong> */}
                        </div>
                        <div className="col-sm-1">
                            <a href="SharonYelverton.pdf" target="_blank">
                                <i className="fa fa-file fa-3x" aria-hidden="true"></i></a>
                            <br />
                            {/* <strong style="color:rgb(18, 97, 170)">Resume</strong> */}
                        </div>
                        <div className="col-sm-5"></div>

                        <div className="col-sm-4">
                            <strong>Email: </strong>
                            <a href="mailto:ladysharonyel@me.com">ladysharonyel@me.com</a>
                            <br />
                            <strong>Phone: </strong>704.622.5385<br />

                        </div>

                        <div className="row">

                            <div className="copyright">
                                <p>Copyright &copy; 2020 Sharon A. Yelverton</p>
                            </div>
                        </div>
                    </div>
                    </div>
            </footer>
    )};
        }
export default Footer;
