import React from "react";
import "./Portfolio.css";

function Portfolio(props) {
  return (
    <section className="portfolio">
      <p className="portfolio__subtitle">Портфолио</p>
      <ul className="portfolio__container">
        <li className="portfolio__item">
          <p className="portfolio__item-text">Статичный сайт</p>
          <div className="portfolio__link">↗</div>
        </li>
        <hr className="line" />
        <li className="portfolio__item">
          <p className="portfolio__item-text">Адаптивный сайт</p>
          <p className="portfolio__link">↗</p>
        </li>
        <hr className="line" />
        <li className="portfolio__item">
          <p className="portfolio__item-text">Одностраничное приложение</p>
          <div className="portfolio__link">↗</div>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
