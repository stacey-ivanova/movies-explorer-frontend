import React from "react";
import "../Register/Register.css";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <form action="/movies" className="form__container" noValidate>
      <Link to="/">
        <img className="form__logo" src={logo} alt="логотип сайта" />
      </Link>
      <p className="form__title">Рады видеть!</p>
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
      <button
        className="form__submit-button form__submit-button_signin_m"
        type="submit"
      >
        Войти
      </button>
      <p className="form__subtext">
        Еще не зарегистрированы?{" "}
        <Link className="form__link" to="/signup">
          Регистрация
        </Link>
      </p>
    </form>
  );
}

export default Login;
