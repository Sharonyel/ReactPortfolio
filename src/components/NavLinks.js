import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Sharon Yelverton</Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about"
            className={window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"} >
                      About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/experience"
              className={window.location.pathname === "/experience" 
              ? "nav-link active" : "nav-link"}>
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/education"
              className={window.location.pathname === "/education" 
              ? "nav-link active" : "nav-link"}>
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={window.location.pathname === "/projects" 
              ? "nav-link active" : "nav-link"}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/skills"
              className={window.location.pathname === "/skills" 
              ? "nav-link active" : "nav-link"}>
              Skills
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" 
              ? "nav-link active" : "nav-link"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavLinks;







// import React from "react";

// const NavLinks = () => {
//     return (
//         <header>
//             <ul>
//                 <li><a href="#about">About</a></li>
//                 <l1><a href="#experience">Experience</a></l1>
//                 <l1><a href="#education">Education</a></l1>
//                 <l1><a href="#projects">Projects</a></l1>
//                 <l1><a href="#skills">Skills</a></l1>
//                 <l1><a href="#contact">Contact</a></l1>
//             </ul>
//             </header>

//         )
  
// }

// export default NavLinks;

