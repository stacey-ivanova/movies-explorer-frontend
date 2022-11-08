import React from "react";
import { NavLink } from "react-router-dom";
import "./NavTab.css";

function NavTab(props) {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <NavLink className="menu__link" to="#project">
            О проекте
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink className="menu__link" to="#techs">
            Технологии
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink className="menu__link" to="#student">
            Студент
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
