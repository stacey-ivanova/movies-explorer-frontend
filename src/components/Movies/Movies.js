import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import MoreButton from "../MoreButton/MoreButton";
import useResize from "../../utils/useResize";

function Movies(props) {
  const {
    getMovies,
    movies,
    onCardClick,
    onCardLike,
    onCardDelete,
    loader,
    type,
    saveMovies,
  } = props;
  const isWindowSize = useResize();
  const [baseCountMovies, setBaseCountMovies] = React.useState(12);
  const [moreCountMovies, setMoreCountMovies] = React.useState(0);

  const [countIncr, setCountIncr] = React.useState(
    isWindowSize === 3 ? count1 : 2
  );

  React.useEffect(() => {
    if (isWindowSize === "big") {
      setBaseCountMovies(12);
      setCountIncr(3);
    } else if (isWindowSize === "medium") {
      setBaseCountMovies(8);
      setCountIncr(2);
    } else if (isWindowSize === "small") {
      setBaseCountMovies(5);
      setCountIncr(2);
    }
  }, [isWindowSize]);

  function handleMoreButtonClick() {
    setMoreCountMovies(moreCountMovies + countIncr);
  }
  return (
    <section className="movies">
      <SearchForm getMovies={getMovies} type={type} />
      {(() => {
        if (loader) {
          return <Preloader />;
        } else if (movies.length != 0) {
          return (
            <>
              <MoviesCardList
                movies={movies}
                onCardClick={onCardClick}
                saveMovies={saveMovies}
                triger="On"
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
                countMovies={baseCountMovies + moreCountMovies}
              />
              {baseCountMovies + moreCountMovies < movies.length && (
                <MoreButton handleMoreButtonClick={handleMoreButtonClick} />
              )}
            </>
          );
        } else {
          return <p className="empty__cardlist">Ничего не найдено</p>;
        }
      })()}
    </section>
  );
}

export default Movies;
