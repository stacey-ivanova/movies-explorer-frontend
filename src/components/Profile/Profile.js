import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "./Profile.css";
import useInput from "../Validate/Validate";

function Profile(props) {
  const { mail, name, onUpdateUser, handleLogout, changeMsg } = props;
  console.log(`name ${name}`);
  console.log(`mail ${mail}`);
  const [userMail, setUserEmail] = useState(
    mail ? mail : localStorage.getItem("email")
  );
  console.log(`userMail ${userMail}`);
  const [userName, setUserName] = useState(
    name ? name : localStorage.getItem("name")
  );

  const emailInput = useInput(
    userMail,
    {
      isEmpty: true,
      isEmail: true,
      isIdent: true,
    },
    userMail
  );
  const nameInput = useInput(
    userName,
    {
      isEmpty: true,
      isIdent: true,
    },
    userName
  );

  function handleNameChange(e) {
    nameInput.handleChange(e);
  }

  function handleEmailChange(e) {
    emailInput.handleChange(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserName(nameInput.values);
    setUserEmail(emailInput.values);
    console.log(`name2 ${name}`);
    console.log(`userMail2 ${userMail}`);
    onUpdateUser({ userName, userMail });
  }

  function handleLogOut(e) {
    e.preventDefault();
    handleLogout();
  }

  return (
    <section className="account">
      <form onSubmit={handleSubmit} className="account__content">
        <h2 className="account__title">Привет, {nameInput.values}!</h2>
        <div className="account__data-row">
          <p className="account__data-row-text">Имя</p>
          <label className="account__input-lable">
            <input
              className="account__data-row-text"
              name="name"
              value={nameInput.values}
              onChange={handleNameChange}
            ></input>
            {nameInput.isEmpty && nameInput.isIdent && (
              <span className="form__item-error_active">
                Введены некоректные данные
              </span>
            )}
          </label>
        </div>
        <div className="account__data-row">
          <p className="account__data-row-text">E-mail</p>
          <label className="account__input-lable">
            <input
              className="account__data-row-text"
              name="email"
              type="email"
              onBlur={(e) => emailInput.handleBlur(e)}
              value={emailInput.values}
              onChange={handleEmailChange}
            ></input>
            {emailInput.isEmpty &&
              emailInput.isEmailError &&
              emailInput.isIdent && (
                <span className="form__item-error_active">
                  Введены некоректные данные
                </span>
              )}
          </label>
        </div>
        <label className="account__button-lable">
          {changeMsg && (
            <span className="form__item-msg_active">{changeMsg}</span>
          )}
          <button
            disabled={
              !emailInput.inputValid &&
              !nameInput.inputValid &&
              (!emailInput.inputValid || !nameInput.inputValid)
            }
            className="account__edit"
          >
            Редактировать
          </button>
        </label>
        <Link onClick={handleLogOut} className="account__exit" to="/">
          Выйти из аккаунта
        </Link>
      </form>
    </section>
  );
}

export default Profile;
