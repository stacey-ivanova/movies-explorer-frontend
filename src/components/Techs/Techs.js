import React from "react";
import "./Techs.css";

function Techs(props) {
  return (
    <section className="techs" id="techs">
      <h2 className="section-title">Технологии</h2>
      <hr className="line" />
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__container">
        <li className="techs__container-item">
          <p className="techs__container-item-text">HTML</p>
        </li>
        <li className="techs__container-item">
          <p className="techs__container-item-text">CSS</p>
        </li>
        <li className="techs__container-item">
          <p className="techs__container-item-text">JS</p>
        </li>
        <li className="techs__container-item">
          <p className="techs__container-item-text">React</p>
        </li>
        <li className="techs__container-item">
          <p className="techs__container-item-text">Git</p>
        </li>
        <li className="techs__container-item">
          <p className="techs__container-item-text">Express.js</p>
        </li>
        <li className="techs__container-item">
          <p className="techs__container-item-text">mongoDB</p>
        </li>
      </ul>
    </section>
  );
}

export default Techs;
