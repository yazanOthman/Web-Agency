import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/" className="logo">
            web agency <FontAwesomeIcon icon={faArrowDown} />{" "}
          </a>
        </li>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/">Skills</a>
        </li>
        <li>
          <a href="/">services</a>
        </li>
        <li>
          <a href="/">portfolio</a>
        </li>
        <li>
          <a href="/">work</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
