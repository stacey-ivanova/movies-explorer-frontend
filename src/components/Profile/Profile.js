import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile(props) {
  return (
    <section className="account">
      <div className="account__content">
        <h2 className="account__title">Привет, Виталий!</h2>
        <div className="account__data-row">
          <p className="account__data-row-text">Имя</p>
          <p className="account__data-row-text">Виталий</p>
        </div>
        <div className="account__data-row">
          <p className="account__data-row-text">E-mail</p>
          <p className="account__data-row-text">pochta@yandex.ru</p>
        </div>
        <p className="account__edit">Редактировать</p>
        <Link className="account__exit" to="/">
          Выйти из аккаунта
        </Link>
      </div>
    </section>
  );
}

export default Profile;
