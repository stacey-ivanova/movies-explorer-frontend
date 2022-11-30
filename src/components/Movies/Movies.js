import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import MoreButton from "../MoreButton/MoreButton";
import useResize from "../../utils/useResize";
import { BASE_COUNT_MOVIES, MORE_COUNT_MOVIES } from "../../conf/Const";

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
    saveFilter,
    disableButton,
    filterStatus,
  } = props;
  const isWindowSize = useResize();
  const [baseCountMovies, setBaseCountMovies] = React.useState(
    BASE_COUNT_MOVIES.big
  );
  const [moreCountMovies, setMoreCountMovies] = React.useState(
    MORE_COUNT_MOVIES.start
  );

  const [countIncr, setCountIncr] = React.useState(
    isWindowSize === "big" ? MORE_COUNT_MOVIES.big : MORE_COUNT_MOVIES.small
  );

  React.useEffect(() => {
    if (isWindowSize === "big") {
      setBaseCountMovies(BASE_COUNT_MOVIES.big);
      setCountIncr(MORE_COUNT_MOVIES.big);
    } else if (isWindowSize === "medium") {
      setBaseCountMovies(BASE_COUNT_MOVIES.medium);
      setCountIncr(MORE_COUNT_MOVIES.small);
    } else if (isWindowSize === "small") {
      setBaseCountMovies(BASE_COUNT_MOVIES.small);
      setCountIncr(MORE_COUNT_MOVIES.small);
    }
  }, [isWindowSize]);
  React.useEffect(() => {
    console.log(`filter status ${filterStatus}`);
  }, []);
  function handleMoreButtonClick() {
    setMoreCountMovies(moreCountMovies + countIncr);
  }
  return (
    <section className="movies">
      <SearchForm
        getMovies={getMovies}
        type={type}
        saveFilter={saveFilter}
        disableButton={disableButton}
      />
      {(() => {
        if (loader) {
          return <Preloader />;
        } else if (filterStatus) {
          return <p className="empty__cardlist">Ничего не найдено</p>;
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
        }
      })()}
    </section>
  );
}

export default Movies;
