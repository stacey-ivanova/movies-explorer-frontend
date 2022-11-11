import React from "react";
import "./Portfolio.css";

function Portfolio(props) {
  return (
    <section className="portfolio">
      <p className="portfolio__subtitle">Портфолио</p>
      <ul className="portfolio__container">
        <li className="portfolio__item">
          <p className="portfolio__item-text">Статичный сайт</p>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__link"
          >
            ↗
          </a>
        </li>
        <hr className="line" />
        <li className="portfolio__item">
          <p className="portfolio__item-text">Адаптивный сайт</p>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__link"
          >
            ↗
          </a>
        </li>
        <hr className="line" />
        <li className="portfolio__item">
          <p className="portfolio__item-text">Одностраничное приложение</p>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__link"
          >
            ↗
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
