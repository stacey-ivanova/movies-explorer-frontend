import React from "react";
import "./AboutMe.css";
import userPhoto from "../../images/userPhoto.svg";

function AboutMe(props) {
  return (
    <section className="about-me" id="student">
      <h2 className="section-title">Студент</h2>
      <hr className="line" />
      <div className="about-me__container">
        <div
          className="about-me__photo"
          style={{ backgroundImage: `url(${userPhoto})` }}
        ></div>
        <h3 className="about-me__title">Виталий</h3>
        <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
        <p className="about-me__text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a className="about-me__link">Github</a>
      </div>
    </section>
  );
}

export default AboutMe;
