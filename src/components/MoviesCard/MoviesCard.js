import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import deleteIcon from "../../images/deleteicon.svg";
import saveIcon from "../../images/saveicon.svg";
import likegreen from "../../images/likegreen.svg";

function MoviesCard(props) {
  const {
    movie,
    onCardClick,
    saveMovies,
    triger = "off",
    onCardLike,
    onCardDelete,
  } = props;

  const baseImageUrl = movie.image;
  // movie._id ||
  const [id, setId] = React.useState(movie._id || "");

  React.useEffect(() => {
    console.log(triger);
    // console.log(movie.movieId);
    if (triger == "On") {
      setId(checkMovieStatus(movie, saveMovies));
    }
  }, [saveMovies, movie, triger]);

  function checkMovieStatus(movie, savedMovies) {
    let id = "";
    savedMovies.forEach((item) => {
      if (item.movieId == movie.movieId) {
        id = item._id;
      }
    });
    return id;
  }

  function getOurs(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return hours + "ч " + minutes + "м";
  }
  function handleClick() {
    onCardClick(movie.trailerLink);
  }

  function handleLikeClick(movieElement) {
    console.log("лайкаем");
    onCardLike(movieElement);
  }

  function handleDeleteClick(movieElement) {
    console.log("удаляем");
    onCardDelete(movieElement);
  }

  function changeIcon(props) {
    const location = useLocation();
    // console.log("changeicon");
    // console.log(id);

    if (location.pathname === "/movies") {
      if (id) {
        return likegreen;
      } else {
        return saveIcon;
      }
    }
    return deleteIcon;
  }

  function handlerChangeClick(e) {
    e.preventDefault();
    console.log("handlerChangeClick");
    console.log(id);
    if (id) {
      handleDeleteClick(id);
    } else {
      handleLikeClick(movie);
    }
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
          className={
            "movie__icon"
            // triger === "On"
            //   ? id
            //     ? "movie__icon-button-empty"
            //     : "movie__icon"
            //   : "movie__icon-button"
          }
          style={{ backgroundImage: `url(${changeIcon()})` }}
          onClick={handlerChangeClick}
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
