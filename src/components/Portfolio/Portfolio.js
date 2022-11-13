import React from "react";
import "./Portfolio.css";

function Portfolio(props) {
  return (
    <section className="portfolio">
      <p className="portfolio__subtitle">Портфолио</p>
      <ul className="portfolio__container">
        <li className="portfolio__item">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__link"
          >
            <p className="portfolio__link-text">Статичный сайт</p>

            <p className="portfolio__link-arrow">↗</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__link"
          >
            <p className="portfolio__link-text">Адаптивный сайт</p>

            <p className="portfolio__link-arrow">↗</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__link"
          >
            <p className="portfolio__link-text">Одностраничное приложение</p>

            <p className="portfolio__link-arrow">↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
