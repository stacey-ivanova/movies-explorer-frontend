import React from "react";
import "./MoviesCard.css";
import moviePhoto from "../../images/moviepic.svg";

function MoviesCard(props) {
  return (
    <div className="movie">
      <h2 className="movie__title">33 слова о дизайне</h2>
      <p className="movie__length">1ч 47м</p>
      <div className="movie__save-icon"></div>
      <div className="movie__delete-icon"></div>
      <img className="movie__photo" src={moviePhoto}></img>
    </div>
  );
}

export default MoviesCard;
