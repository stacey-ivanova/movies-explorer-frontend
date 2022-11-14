import React from "react";
import "./AboutProject.css";

function AboutProject(props) {
  return (
    <section className="about-project" id="project">
      <h2 className="section-title">О проекте</h2>
      <hr className="line" />
      <div className="about-project__description">
        <div>
          <h3 className="section-subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className="section-subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__bar">
        <div className="about-project__bar-item1">
          <p className="about-project__bar-text about-project__bar-text_theme_black">
            1 неделя
          </p>
        </div>
        <div className="about-project__bar-item2">
          <p className="about-project__bar-text">4 недели</p>
        </div>
        <div>
          <p className="about-project__bar-text about-project__bar-text_theme_grey">
            Back-end
          </p>
        </div>
        <div>
          <p className="about-project__bar-text about-project__bar-text_theme_grey">
            Front-end
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
