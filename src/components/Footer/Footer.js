import React from "react";
import "./Footer.css";

function Footer(props) {
const {year} = props;
  return (
    <footer className="footer">
      <h4 className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h4>
      <hr className="line" />
      <div className="footer__container">
        <p className="footer__copyright">© {props.year}</p>
        <ul className="footer__links">
          <li className="footer__link">
            <a
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link-text"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__link">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link-text"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
