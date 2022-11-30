import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound(props) {
  return (
    <div className="error__content">
      <p className="error__num">404</p>
      <p className="error__text">Страница не найдена</p>
      <Link className="error__link" to="/">
        Назад
      </Link>
    </div>
  );
}

export default PageNotFound;
