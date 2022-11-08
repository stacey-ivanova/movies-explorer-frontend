import React from "react";
import "./Register.css";

function Register(props) {
  return (
    <form className="form__container" novalidate>
      <img className="form__logo" src="./logo.svg" alt="логотип сайта" />
      <p className="form__title">Добро пожаловать!</p>
      <label className="form__field">
        <p className="form__text">Имя</p>
        <input
          className="form__item"
          name="name"
          id="name-input"
          minlength="5"
          maxlength="15"
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
          minlength="7"
        />
        <span className="form__item-error pass-input-error">
          Слишком короткий пароль
        </span>
      </label>
      <input
        className="form__submit-button"
        type="submit"
        value="Зарегистрироваться"
      />
      <p className="form__subtext">
        Уже зарегистрированы?{" "}
        <a className="form__link" href="#">
          Войти
        </a>
      </p>
    </form>
  );
}

export default Register;
