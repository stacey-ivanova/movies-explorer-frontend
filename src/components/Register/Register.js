import React from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import useInput from "../Validate/Validate";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

function Register(props) {
  const { loggedIn } = props;
  const history = useHistory();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const emailInput = useInput("", {
    isEmpty: true,
    isEmail: true,
  });
  const passwordInput = useInput("", {
    isEmpty: true,
    minLeng: true,
  });
  const nameInput = useInput("", {
    isEmpty: true,
  });

  function handleNameChange(e) {
    nameInput.handleChange(e);
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    emailInput.handleChange(e);
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    passwordInput.handleChange(e);
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    const name = nameInput.values;
    const email = emailInput.values;
    const password = passwordInput.values;
    e.preventDefault();
    props.handleRegister(name, email, password);
  }
  React.useEffect(() => {
    console.log(loggedIn);
    if (loggedIn) {
      history.push("/");
    }
  });
  return (
    <div className="form">
      <form className="form__container">
        <Link className="form__logo" to="/">
          <img src={logo} alt="логотип сайта" />
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
            value={nameInput.value}
            onChange={handleNameChange}
            onBlur={nameInput.handleBlur}
          />
          {nameInput.isDirty && nameInput.isEmpty && (
            <span className="form__item-error name-input-error">
              {nameInput.ErrorMsg}
            </span>
          )}
        </label>
        <label className="form__field">
          <p className="form__text">E-mail</p>
          <input
            className="form__item"
            name="email"
            id="email-input"
            value={emailInput.values}
            onBlur={emailInput.handleBlur}
            onChange={handleEmailChange}
          />
          {emailInput.isDirty &&
            (emailInput.isEmailError || emailInput.isEmpty) && (
              <span className="form__item-error email-input-error">
                {emailInput.ErrorMsg}
              </span>
            )}
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
            onBlur={passwordInput.handleBlur}
          />
          {passwordInput.isDirty &&
            (passwordInput.isEmpty || passwordInput.isMinimalLengthError) && (
              <span className="form__item-error pass-input-error">
                {passwordInput.ErrorMsg}
              </span>
            )}
        </label>
        <button
          onClick={handleSubmit}
          disabled={
            !emailInput.inputValid ||
            !nameInput.inputValid ||
            !passwordInput.inputValid
          }
          className="form__submit-button"
        >
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
