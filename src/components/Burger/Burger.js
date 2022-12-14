import React from "react";
import "./Burger.css";
import { NavLink } from "react-router-dom";
import profile from "../../images/iconprofile.svg";
function MoreButton(props) {
  return (
    <div className="burger__container">
      <input type="checkbox" className="toggler"></input>
      <div className="hamburger">
        <div className="burgerline"></div>
      </div>
      <div className="menu__burger">
        <div>
          <ul className="menu__burger-list">
            <li>
              <NavLink to="/" className="menu__burger-list-item">
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className="menu__burger-list-item">
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink to="/saved-movies" className="menu__burger-list-item">
                Сохранённые
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="menu_burger-account">
          <NavLink
            to="/profile"
            className="nav-movie__link-profile"
            activeClassName="nav-movie__link-profile_active"
          >
            Аккаунт
          </NavLink>
          <div
            className="nav-movie__profile-logo"
            style={{ backgroundImage: `url(${profile})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default MoreButton;
