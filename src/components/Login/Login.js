import React from "react";
import "../Register/Register.css";
import "./Login.css";

function Login(props) {
  return (
    <form className="form__container" novalidate>
      <img className="form__logo" src="./logo.svg" alt="логотип сайта" />
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
          minlength="7"
        />
        <span className="form__item-error pass-input-error">
          Слишком короткий пароль
        </span>
      </label>
      <input
        className="form__submit-button form__submit-button_signin_m"
        type="submit"
        value="Войти"
      />
      <p className="form__subtext">
        Еще не зарегистрированы?
        <a className="form__link" href="#">
          Регистрация
        </a>
      </p>
    </form>
  );
}

export default Login;
