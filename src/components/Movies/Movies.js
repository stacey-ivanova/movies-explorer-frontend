import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import MoreButton from "../MoreButton/MoreButton";

function Movies(props) {
  const { getMovies, movies, onCardClick, setshort, loader, type } = props;

  return (
    <section className="movies">
      <SearchForm getMovies={getMovies} setshort={setshort} type={type} />
      {(() => {
        if (loader) {
          return <Preloader />;
        } else if (movies.length != 0) {
          return (
            <>
              <MoviesCardList movies={movies} onCardClick={onCardClick} />
              <MoreButton />
            </>
          );
        } else {
          return <p className="empty__cardlist">Тут еще ничего нет</p>;
        }
      })()}
    </section>
  );
}

export default Movies;
