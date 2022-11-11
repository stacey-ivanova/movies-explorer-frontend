import React from "react";
import "./NavigationMovie.css";
import { NavLink } from "react-router-dom";
import profile from "../../images/iconprofile.svg";

function NavigationMovie(props) {
  return (
    <div className="nav-movie">
      <div className="nav-movie__container">
        <NavLink
          to="/movies"
          className="nav-movie__link"
          activeClassName="nav-movie__link_active"
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className="nav-movie__link"
          activeClassName="nav-movie__link_active"
        >
          Сохраненные фильмы
        </NavLink>
      </div>
      <div className="nav-movie__profile">
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
  );
}

export default NavigationMovie;
