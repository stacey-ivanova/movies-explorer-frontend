import React from "react";
import "./Promo.css";
import promoLogo from "../../images/promoLogo.svg";

function Promo(props) {
  return (
    <section className="promo">
      <div
        className="promo__logo"
        style={{ backgroundImage: `url(${promoLogo})` }}
      >
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </section>
  );
}

export default Promo;
