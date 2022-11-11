import React from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register(props) {
  return (
    <div class="form">
      <form action="/signin" className="form__container" noValidate>
        <Link to="/">
          <img className="form__logo" src={logo} alt="логотип сайта" />
        </Link>
        <p className="form__title">Добро пожаловать!</p>
        <label className="form__field">
          <p className="form__text">Имя</p>
          <input
            className="form__item"
            name="name"
            id="name-input"
            minLength="5"
            maxLength="15"
          />
          <span className="form__item-error name-input-error">
            Необходимо ввести имя
          </span>
        </label>
        <label className="form__field">
          <p className="form__text">E-mail</p>
          <input
            className="form__item"
            name="email"
            type="email"
            id="email-input"
          />
          <span className="form__item-error email-input-error">
            Необходимо ввести e-mail
          </span>
        </label>
        <label className="form__field">
          <p className="form__text">Пароль</p>
          <input
            type="password"
            className="form__item"
            name="password"
            id="pass-input"
            minLength="7"
          />
          <span className="form__item-error pass-input-error">
            Слишком короткий пароль
          </span>
        </label>
        <button className="form__submit-button" type="submit">
          Зарегистрироваться
        </button>
        <p className="form__subtext">
          Уже зарегистрированы?{" "}
          <Link className="form__link" to="/signin">
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
