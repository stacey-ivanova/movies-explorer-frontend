import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const { movies, onCardClick } = props;
  return (
    <ul className="movies__container">
      {movies.map((movie) => (
        <MoviesCard
          key={movie.id}
          movie={movie}
          onCardClick={onCardClick}
          // onCardLike={onCardLike}
          // onCardDelete={onCardDelete}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
