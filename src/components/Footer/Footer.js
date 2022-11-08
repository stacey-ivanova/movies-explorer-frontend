import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <footer className="footer">
      <h4 className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h4>
      <hr className="line" />
      <div className="footer__container">
        <p className="footer__copyright">© 2020</p>
        <ul className="footer__links">
          <li className="footer__link">
            <a className="footer__link-text">Яндекс.Практикум</a>
          </li>
          <li className="footer__link">
            <a className="footer__link-text">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
