import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-text">
        <h3>Copyright &copy; 2024. All right are reserved.</h3>
      </div>
      <div className="footer-icons">
        <span className="icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </span>
        <span className="icon">
          <FontAwesomeIcon icon={faTwitter} />
        </span>
        <span className="icon">
          <FontAwesomeIcon icon={faInstagram} />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
