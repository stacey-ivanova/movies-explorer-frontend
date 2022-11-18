import React from "react";
import "../Register/Register.css";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    console.log("Хочу спать1");
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    console.log("Хочу спать2");
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    console.log("Хочу спать3");
    e.preventDefault();
    props.handleSignin(email, password);
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form__container">
        <Link className="form__logo" to="/">
          <img src={logo} alt="логотип проекта" />
        </Link>
        <p className="form__title">Рады видеть!</p>
        <label className="form__field">
          <p className="form__text">E-mail</p>
          <input
            className="form__item"
            name="email"
            type="email"
            id="email-input"
            value={email}
            onChange={handleEmailChange}
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
            value={password}
            onChange={handlePasswordChange}
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
    </div>
  );
}

export default Login;
