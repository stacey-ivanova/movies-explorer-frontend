import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import NavigationMain from "../NavigationMain/NavigationMain";
import NavigationMovie from "../NavigationMovie/NavigationMovie";

function changeHeader(props) {
  const location = useLocation();
  if (
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile"
  ) {
    return "header header_type_black";
  }
  return "header";
}

function Header(props) {
  return (
    <header className={changeHeader()}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="логотип сайта" />
      </Link>
      <div className="header__container">
        <Switch>
          <Route exact path="/">
            <NavigationMain />
          </Route>
          <Route path={["/movies", "/saved-movies", "/profile"]}>
            <NavigationMovie />
          </Route>
        </Switch>
      </div>
    </header>
  );
}

export default Header;
