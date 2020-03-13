import React, { Component } from "react";

class Contacts extends Component {
  render() {
    // let portfolio = this.props.portfolioInfo;

    return (
        <div id="contact">
        <h2>Get in Touch</h2>
        <div id="contact-form">
            <i className="fa fa-envelope fa-5x mailit" aria-hidden="true"></i>
{/* <br> */}
            <form method="POST" action="mailto:ladysharonyel@me.com?subject=Contact From Portfolio"
                enctype="text/plain">
                <input type="email" placeholder="Your email" required />
                <button type="submit">Send</button>
            </form>
        </div>
    </div>

    );
  }
}

export default Contacts;
