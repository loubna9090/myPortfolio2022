import React from 'react'
import './navbar.css'
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <>
      {" "}
      <nav className="main-nav sticky">
        <ul className="menu">
          <li>
            <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="exper"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link to="educ" spy={true} smooth={true} offset={50} duration={500}>
              Education
            </Link>
          </li>
          <li>
            <Link
              to="works"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
