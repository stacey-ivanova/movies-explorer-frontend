import React from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import useInput from "../Validate/Validate";

function Register(props) {
  // const [name, setName] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");

 const emailInput = useInput('', {
    isEmpty: true,
    isEmail: true,
  });
  const passwordInput = useInput('', {
    isEmpty: true,
  });
  const nameInput = useInput('', {
    isEmpty: true,
  });

  function handleNameChange(e) {

    nameInput.handleChange(e);
    // setName(e.target.value);
  }

  function handleEmailChange(e) {

    emailInput.handleChange(e);
    // setEmail(e.target.value);
  }

  function handlePasswordChange(e) {

    passwordInput.handleChange(e);
    // setPassword(e.target.value);
  }

  function handleSubmit(e) {
    const name= nameInput.values
    const email= emailInput.values
    const password = passwordInput.values
    e.preventDefault();
    props.handleRegister(name, email, password);
  }

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
          />
          {(nameInput.isDirty && nameInput.isEmpty) && (
          <span className="form__item-error name-input-error">
            Необходимо ввести имя
          </span>)}
        </label>
        <label className="form__field">
          <p className="form__text">E-mail</p>
          <input
            className="form__item"
            name="email"
            // type="email"
            id="email-input"
            value={emailInput.values}
            onChange={handleEmailChange}
          />
          {(emailInput.isDirty && emailInput.isEmpty ) && (
          <span className="form__item-error email-input-error">
            Необходимо ввести e-mail
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
          />
          {(passwordInput.isDirty || passwordInput.isEmpty) && (
          <span className="form__item-error pass-input-error">
            Слишком короткий пароль
          </span>
          )}
        </label>
        <button
          // onClick={() => props.history.push("/signin")}
          onClick={handleSubmit}
          disabled={!emailInput.inputValid || !nameInput.inputValid || !passwordInput.inputValid}
          className="form__submit-button"
          // type="button"
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
