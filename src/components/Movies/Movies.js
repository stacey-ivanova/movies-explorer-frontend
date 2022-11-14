import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import MoreButton from "../MoreButton/MoreButton";

function Movies(props) {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList />
      <MoreButton />
      <Preloader />
    </section>
  );
}

export default Movies;
