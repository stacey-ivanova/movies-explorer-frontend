import React from "react";
import "./NavTab.css";
import { HashLink as Link } from "react-router-hash-link";
function NavTab(props) {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link className="menu__link" to="#project">
            О проекте
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="#techs">
            Технологии
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="#student">
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
