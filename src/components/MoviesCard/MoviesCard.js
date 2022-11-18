import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import deleteIcon from "../../images/deleteicon.svg";
import saveIcon from "../../images/saveicon.svg";

function MoviesCard(props) {
  const { movie, onCardClick } = props;
  // const user = React.useContext(CurrentUserContext);
  // const movie = movie_array.movie;

  const baseImageUrl = `https://api.nomoreparties.co/${movie.image.url}`;

  // const isOwn = cardElement.owner === user._id;
  // console.log(isOwn);
  // const cardDeleteButtonClassName = `element__trash ${
  //   isOwn ? "" : "element_trash-inactive"
  // }`;

  // const isLiked = cardElement.likes.some((i) => i === user._id);
  // const cardLikeButtonClassName = `element__like-button ${
  //   isLiked ? "element__like-button_active" : ""
  // }`;
  function getOurs(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return hours + "ч " + minutes + "м";
  }
  function handleClick() {
    onCardClick(movie.trailerLink);
  }

  function handleLikeClick() {
    onCardLike(cardElement);
  }

  function handleDeleteClick() {
    onCardDelete(cardElement);
  }

  function changeIcon(props) {
    const location = useLocation();
    if (location.pathname === "/movies") {
      return saveIcon;
    }
    return deleteIcon;
  }

  return (
    <li className="movie">
      <div className="movie__container">
        <div className="movie__info">
          <h2 className="movie__title">{movie.nameRU}</h2>
          <p className="movie__length">{getOurs(movie.duration)}</p>
        </div>
        <button
          type="button"
          className="movie__icon"
          style={{ backgroundImage: `url(${changeIcon()})` }}
          onClick={changeIcon}
        ></button>
      </div>
      <img
        onClick={handleClick}
        className="movie__photo"
        src={baseImageUrl}
        alt={movie.nameRU}
      />
    </li>
  );
}

export default MoviesCard;
