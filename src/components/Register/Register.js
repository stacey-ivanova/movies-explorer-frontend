import React from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  console.log(props);
  function handleNameChange(e) {
    console.log("Хочу спать1");
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    console.log("Хочу спать2");
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    console.log("Хочу спать3");
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    console.log("Хочу спать4");
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
            value={name}
            onChange={handleNameChange}
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
          // onClick={() => props.history.push("/signin")}
          onClick={handleSubmit}
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
