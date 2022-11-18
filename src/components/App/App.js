import React from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "../../utils/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import * as auth from "../../utils/Auth.js";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isInfoTooltipPopupOpen, setIsTooltipPopupOpen] = React.useState(false);
  const [isSuccessRegister, setIsSuccessRegister] = React.useState(false);
  const history = useHistory();
  const [userEmail, setUserEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [short, setshort] = React.useState(false);
  const [movies, setMovies] = React.useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
  const [saveMovies, setSaveMovies] = React.useState(
    JSON.parse(localStorage.getItem("saved-movies")) || []
  );
  const [loader, setLoader] = React.useState(false);
  const year = new Date().getFullYear();

  React.useEffect(() => {
    handleTokenCheck();
    // console.log(short);
  }, [handleTokenCheck, loggedIn]);

  function getMovies(filter, type) {
    if (JSON.parse(localStorage.getItem("movies"))) {
      if (filter || short) {
        filterFilms(filter, short);
      } else {
        const movemaper = JSON.parse(localStorage.getItem("movies"));
        setMovies(movemaper);
      }
    } else {
      if (type === "movies") {
        setLoader(true);
        moviesApi
          .getMovies()
          .then((mov) => {
            const movemaper = mov.map((movie_iter) => {
              return movie_iter;
            });
            localStorage.setItem("movies", JSON.stringify(movemaper));
            if (filter) {
              setMovies(movemaper);
              filterFilms(filter, "movies");
            } else {
              setMovies(movemaper);
            }
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoader(false);
          });
      } else if ((type = "saved-movies")) {
        setLoader(true);
        mainApi
          .getMovies()
          .then((mov) => {
            const movemaper = mov.map((movie_iter) => {
              return movie_iter;
            });
            localStorage.setItem("saved-movies", JSON.stringify(movemaper));
            if (filter) {
              setSaveMovies(movemaper);
              filterFilms(filter);
            } else {
              setSaveMovies(movemaper);
            }
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoader(false);
          });
      }
    }
  }

  function handleInfoTooltipPopupOpen(success) {
    setIsTooltipPopupOpen(true);
    setIsSuccessRegister(success);
  }
  function closePopup() {
    setIsTooltipPopupOpen(false);
  }
  function filterFilms(filter, isShort, page) {
    let moviesfilter = JSON.parse(localStorage.getItem(page));
    if (isShort) {
      console.log(moviesfilter);
      moviesfilter = moviesfilter.filter((m) => m.duration <= 40);
    }

    const filtredMovies = moviesfilter.filter(
      (m) => m.nameRU.indexOf(filter) !== -1
    );
    if (page === "movies") {
      setMovies(filtredMovies);
    } else {
      setSaveMovies(filtredMovies);
    }
  }

  function handleRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then((res) => {
        if (res) {
          handleInfoTooltipPopupOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
        handleInfoTooltipPopupOpen(false);
      });
  }

  function handleSignin(email, password) {
    auth
      .login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("name", data.name);
          localStorage.setItem("email", data.email);
          setUserEmail(localStorage.getItem("email"));
          setUserName(localStorage.getItem("name"));
          handleLogin();
          history.push("/movies");
        }
      })
      .catch((err) => console.log(err));
  }

  function handleLogin() {
    setLoggedIn(true);
  }
  function handleLogout() {
    console.log("logout");
    setLoggedIn(false);
    localStorage.removeItem("movies");
    localStorage.removeItem("token");
  }

  function handleTokenCheck() {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      console.log(`выводим токен ${token}`);
      if (token) {
        auth
          .getContent(token)
          .then((res) => {
            if (res) {
              setLoggedIn(true);
              setUserEmail(res.email);
              setUserName(res.name);
              history.push("/movies");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setLoggedIn(true);

        setUserEmail(localStorage.getItem("email"));
        setUserName(localStorage.getItem("name"));
        history.push("/movies");
      }
    }
  }

  function onCardClick(url) {
    window.open(url, "_blank");
  }

  function handleUpdateUser(user) {
    console.log(user);
    mainApi
      .changeUserInfo(user)
      .then((data) => {
        setCurrentUser(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardLike(movie) {
    const isLiked = movie.likes.some((i) => i._id === currentUser._id);
    mainApi
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // function handleCardDelete(card) {
  //   api
  //     .deleteCard(card._id)
  //     .then((deleteCard) => {
  //       const newCards = cards.filter((c) => c._id !== card._id);
  //       setCards(newCards);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // React.useEffect(() => {
  //   handleTokenCheck();
  // }, [handleTokenCheck, loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page-content">
        <div className="page">
          <Switch>
            <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
              <Header />
            </Route>
            <Route path={["/signup", "/signin"]}> </Route>
          </Switch>
          <Switch>
            <ProtectedRoute
              exact
              path="/"
              loggedIn={loggedIn}
              component={Main}
            ></ProtectedRoute>
            <Route path="/signup">
              <InfoTooltip
                isOpen={isInfoTooltipPopupOpen}
                success={isSuccessRegister}
                onClose={closePopup}
                history={history}
              ></InfoTooltip>
              <Register handleRegister={handleRegister} history={history} />
            </Route>
            <Route path="/signin">
              <Login handleSignin={handleSignin} />
            </Route>
            <ProtectedRoute
              path="/movies"
              loggedIn={loggedIn}
              component={Movies}
              movies={movies}
              getMovies={getMovies}
              onCardClick={onCardClick}
              setshort={setshort}
              loader={loader}
              type="movies"
              onLike={handleCardLike}
            ></ProtectedRoute>
            <ProtectedRoute
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              movies={saveMovies}
              getMovies={getMovies}
              onCardClick={onCardClick}
              setshort={setshort}
              type="saved-movies"
            ></ProtectedRoute>
            <ProtectedRoute
              path="/profile"
              loggedIn={loggedIn}
              component={Profile}
              mail={userEmail}
              name={userName}
              onUpdateUser={handleUpdateUser}
              handleLogout={handleLogout}
            ></ProtectedRoute>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Switch>
            <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
              <Footer year={year} />
            </Route>
            <Route path={["/signup", "/signin"]}> </Route>
          </Switch>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
