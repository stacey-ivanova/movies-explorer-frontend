import React from "react";
import "./NavigationMain.css";
import { NavLink } from "react-router-dom";

function NavigationMain(props) {
  return (
    <div className="nav-main">
      <NavLink to="/signup" className="nav-main__link-signup">
        Регистрация
      </NavLink>
      <NavLink className="nav-main__link" to="/signin">
        <p className="nav-main__link-signin">Войти</p>
      </NavLink>
    </div>
  );
}

export default NavigationMain;
