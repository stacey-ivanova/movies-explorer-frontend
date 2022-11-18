import React from "react";
import { Link } from "react-router-dom";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "./Profile.css";
import useInput from "../Validate/Validate";

function Profile(props) {
  const { mail, name, onUpdateUser, handleLogout } = props;
  const emailInput = useInput(mail, {
    isEmpty: true,
    isEmail: true,
  });
  const nameInput = useInput(name, {
    isEmpty: true,
  });
  // const user = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    console.log("Хочу спать0");
    console.log(emailInput.values);
    console.log(nameInput.values);
  }, [name, mail]);

  function handleNameChange(e) {
    nameInput.handleChange(e);
    // setName(e.target.value);
  }

  function handleEmailChange(e) {
    emailInput.handleChange(e);
    // setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const name = nameInput.values;
    const email = emailInput.values;
    onUpdateUser({ name, email });
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
              // minLength="5"
              // maxLength="15"
              value={nameInput.values}
              onChange={handleNameChange}
            ></input>
            {nameInput.isDirty ||
              (nameInput.isEmpty && (
                <span className="form__item-error_active">
                  Необходимо ввести e-mail
                </span>
              ))}
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
            {(emailInput.isDirty ||
              emailInput.isEmpty ||
              emailInput.isEmailError) && (
              <span className="form__item-error_active">
                Необходимо ввести e-mail
              </span>
            )}
          </label>
        </div>
        <button className="account__edit">Редактировать</button>
        <Link onClick={handleLogOut} className="account__exit" to="/">
          Выйти из аккаунта
        </Link>
      </form>
    </section>
  );
}

export default Profile;
