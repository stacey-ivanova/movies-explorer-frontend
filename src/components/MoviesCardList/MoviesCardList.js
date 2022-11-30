import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const {
    movies,
    onCardClick,
    saveMovies,
    onCardLike,
    onCardDelete,
    triger,
    countMovies,
  } = props;

  return (
    <ul className="movies__container">
      {movies
        .filter((item, id) => id < countMovies)
        .map((movie) => (
          <MoviesCard
            key={movie.movieId}
            movie={movie}
            onCardClick={onCardClick}
            saveMovies={saveMovies}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
            triger={triger}
          />
        ))}
    </ul>
  );
}

export default MoviesCardList;
