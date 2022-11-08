import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип сайта" />
      <div className="header__container">
        <NavLink to="/signup" className="header__link-signup">
          Регистрация
        </NavLink>

        <div className="header__link">
          <NavLink to="/signin" className="header__link-signin">
            Войти
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
