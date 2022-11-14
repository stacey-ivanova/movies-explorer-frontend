import React from "react";
import "./PageNotFound.css";

function PageNotFound(props) {
  return (
    <div className="error__content">
      <p className="error__num">404</p>
      <p className="error__text">Страница не найдена</p>
      <a className="error__link" href="#">
        Назад
      </a>
    </div>
  );
}

export default PageNotFound;
