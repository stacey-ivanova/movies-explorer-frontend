import React from "react";
import "../Register/Register.css";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import useInput from "../Validate/Validate";

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const emailInput = useInput('', {
    isEmpty: true,
    isEmail: true,
  });
  const passwordInput = useInput('', {
    isEmpty: true,
  });

  function handleEmailChange(e) {
    emailInput.handleChange(e);
    // setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    passwordInput.handleChange(e);
    // setPassword(e.target.value);
  }

  function handleSubmit(e) {
    const email=emailInput.values
    const password =passwordInput.values
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
            value={emailInput.values}
            onChange={handleEmailChange}
          />
          {(emailInput.isDirty && emailInput.isEmpty && emailInput.isEmail) && (
          <span className="form__item-error email-input-error">
            Необходимо ввести e-mail
          </span>)}
        </label>
        <label className="form__field">
          <p className="form__text">Пароль</p>
          <input
            type="password"
            className="form__item"
            name="password"
            id="pass-input"
            minLength="7"
            value={passwordInput.values}
            onChange={handlePasswordChange}
          />
          {(passwordInput.isDirty || passwordInput.isEmpty) && (
          <span className="form__item-error pass-input-error">
            Слишком короткий пароль
          </span>)}
        </label>
        <button
          className="form__submit-button form__submit-button_signin_m"
          disabled={!emailInput.inputValid || !passwordInput.inputValid}
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
