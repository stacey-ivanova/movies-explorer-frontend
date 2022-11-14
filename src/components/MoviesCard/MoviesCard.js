import React from "react";
import "./MoviesCard.css";
import moviePhoto from "../../images/moviepic.svg";
import { useLocation } from "react-router-dom";
import deleteIcon from "../../images/deleteicon.svg";
import saveIcon from "../../images/saveicon.svg";

function changeIcon(props) {
  const location = useLocation();
  if (location.pathname === "/movies") {
    return saveIcon;
  }
  return deleteIcon;
}

function MoviesCard(props) {
  return (
    <li className="movie">
      <div className="movie__container">
        <div className="movie__info">
          <h2 className="movie__title">33 слова о дизайне</h2>
          <p className="movie__length">1ч 47м</p>
        </div>
        <button
          type="button"
          className="movie__icon"
          style={{ backgroundImage: `url(${changeIcon()})` }}
        ></button>
      </div>
      <img className="movie__photo" src={moviePhoto} alt="постер фильма" />
    </li>
  );
}

export default MoviesCard;
