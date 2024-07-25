import React from "react";
import "../styles/components/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="webpage-info">
        <h6 className="brand-name">Sparkles</h6>
        <div className="attribution">
          <p>Images:</p>
          <p>
            <a
              className="link"
              rel="noreferrer"
              href="https://pixabay"
              target="_blank"
            >
              Pixabay
            </a>
          </p>
        </div>
        <div className="creator">
          <p>Created by arpita 2024</p>
          <div className="creator-links">
            <a
              className="link"
              rel="noreferrer"
              
              target="_blank"
            >
              <p className="sr-only">Jewellerly</p>
              <i className="fa fa-github fa-lg" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
