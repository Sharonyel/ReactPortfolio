import React from "react";
// import { NavLink } from "react-router-dom";

// import "./NavLinks.css";

const NavLinks = props => {
    return <ul className="nav-links">
        {
                    <ul id="menu" className="shadow">
                          <li><a href="#about">About</a></li>
                          <l1><a href="#experience">Experience</a></l1>
                          <l1><a href="#education">Education</a></l1>
                          <l1><a href="#projects">Projects</a></l1>
                          <l1><a href="#skills">Skills</a></l1>
                          <l1><a href="#contact">Contact</a></l1>
        
                      </ul>
        
        }
    </ul>
}

export default NavLinks;

