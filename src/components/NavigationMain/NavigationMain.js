import React from "react";
import "./NavigationMain.css";
import { NavLink } from "react-router-dom";

function NavigationMain(props) {
  return (
    <div className="nav-main">
      <NavLink to="/signup" className="nav-main__link-signup">
        Регистрация
      </NavLink>
      <div className="nav-main__link">
        <NavLink to="/signin" className="nav-main__link-signin">
          Войти
        </NavLink>
      </div>
    </div>
  );
}

export default NavigationMain;
