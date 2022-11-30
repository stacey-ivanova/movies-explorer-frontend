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
import moviesMapper from "../../utils/MovieMaper";
import { SHORT_VIDEO_SIZE } from "../../conf/Const";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isInfoTooltipPopupOpen, setIsTooltipPopupOpen] = React.useState(false);
  const [isSuccessRegister, setIsSuccessRegister] = React.useState(false);
  const history = useHistory();
  const [userEmail, setUserEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(() => {
    const token = localStorage.getItem("token");
    return token !== null;
  });
  const [disableButton, setDisableButton] = React.useState(false);
  const [movies, setMovies] = React.useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
  const [saveMovies, setSaveMovies] = React.useState(
    JSON.parse(localStorage.getItem("saved-movies")) || []
  );
  const [loader, setLoader] = React.useState(false);
  const year = new Date().getFullYear();
  const [changeMsg, setChangeMsg] = React.useState("");
  const [filterStatus, setFilterStatus] = React.useState(false);
  function getMovies(filter, type) {
    // console.log(type);
    // console.log(`massive ${localStorage.getItem(`${type}`) != null}`);
    // console.log(`short ${JSON.parse(localStorage.getItem("short"))}`);
    // console.log(`filter ${filter}`);
    // console.log(localStorage.getItem("short"));
    if (
      // type != "saved-movies" &&
      JSON.parse(localStorage.getItem(`short_${type}`)) &&
      localStorage.getItem(`${type}`) != null
    ) {
      console.log("1");
      setDisableButton(true);
      // console.log(filter);
      filterFilms(filter, type);
    } else {
      if (type === "movies") {
        console.log("2");
        if (JSON.parse(localStorage.getItem("movies"))) {
          console.log("5");
          if (filter || filter != "") {
            console.log("5_1");
            console.log("go to filter");
            filterFilms(filter, type);
          } else {
            console.log("5_0");
            console.log("get without filter");
            setMovies(JSON.parse(localStorage.getItem("movies")));
            setFilterStatus(false);
          }
        } else {
          console.log("6");

          setDisableButton(true);
          setLoader(true);
          moviesApi
            .getMovies()
            .then((mov) => {
              const movemaper = moviesMapper(mov);
              localStorage.setItem("movies", JSON.stringify(movemaper));
              // console.log(`filter in movies ${filter}`);

              if (filter != null && filter != "") {
                console.log("6_1");
                setMovies(movemaper);
              } else {
                console.log("6_0");
                filterFilms(filter, type);
              }
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
              setDisableButton(false);
              setLoader(false);
            });
        }
      } else if (type === "saved-movies") {
        console.log("3");
        setDisableButton(true);
        setLoader(true);
        mainApi
          .getMovies()
          .then((mov) => {
            const movemaper = mov.map((movie_iter) => {
              return movie_iter;
            });
            localStorage.setItem("saved-movies", JSON.stringify(movemaper));

            if (filter) {
              console.log("4_1");
              filterFilms(filter, type);
            } else {
              console.log("4_0");
              setSaveMovies(movemaper);
              setFilterStatus(false);
            }
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoader(false);
            setDisableButton(false);
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
  function filterFilms(filter, page) {
    let moviesfilter = JSON.parse(localStorage.getItem(`${page}`));

    console.log(`short_ ${JSON.parse(localStorage.getItem(`short_${page}`))}`);
    if (JSON.parse(localStorage.getItem(`short_${page}`))) {
      // console.log(`moviesfilter ${moviesfilter}`);
      moviesfilter = moviesfilter.filter((m) => m.duration <= SHORT_VIDEO_SIZE);
      // console.log(moviesfilter);
    } else {
      console.log(" notshort");
      moviesfilter = moviesfilter;
      // console.log(moviesfilter);
    }
    const filtredMovies = moviesfilter.filter(
      (m) => m.nameRU.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    );
    console.log(filtredMovies.length);
    if (filtredMovies.length === 0) {
      setFilterStatus(true);
    } else {
      setFilterStatus(false);
    }
    localStorage.setItem("filtredMovies", JSON.stringify(filtredMovies));
    // console.log(`выводим локалстор ${localStorage.getItem("filtredMovies")}`);
    if (page === "movies") {
      setMovies(filtredMovies);
      setDisableButton(false);
    } else {
      setSaveMovies(filtredMovies);
      setDisableButton(false);
    }
    //
  }

  function handleRegister(name, email, password) {
    setDisableButton(true);
    auth
      .register(name, email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
          handleInfoTooltipPopupOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
        handleInfoTooltipPopupOpen(false);
      })
      .finally(() => {
        setDisableButton(false);
      });
  }

  function handleSignin(email, password) {
    setDisableButton(true);
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
          getMovies("", "saved-movies");
          history.push("/movies");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setDisableButton(false);
      });
  }

  function handleLogin() {
    setLoggedIn(true);
  }
  function handleLogout() {
    setLoggedIn(false);
    localStorage.clear();
    setSaveMovies([]);
    setMovies([]);
    history.push("/signin");
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
            }
          })
          .catch((err) => {
            handleLogout();
            console.log(err);
          });
      } else {
        handleLogout();
      }
    }
  }

  function onCardClick(url) {
    window.open(url, "_blank");
  }

  function handleUpdateUser(user) {
    console.log("handle");
    setDisableButton(true);
    mainApi
      .changeUserInfo(user)
      .then((data) => {
        setCurrentUser(data);
        localStorage.setItem("name", data.name);
        localStorage.setItem("email", data.email);
        setUserEmail(data.email);
        setUserName(data.name);
        setChangeMsg("Данные успешно обновлены");
        setTimeout(() => setChangeMsg(""), 1000);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setDisableButton(false);
      });
  }

  function handleCardLike(movie) {
    mainApi
      .saveMovie(movie)
      .then((newCard) => {
        if (newCard) {
          setSaveMovies((prevState) => [...prevState, newCard]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    mainApi
      .deleteMovie(card)
      .then((deleteCard) => {
        const saveMoviesDel = saveMovies.filter((movie) => {
          return movie._id !== card;
        });
        setSaveMovies(saveMoviesDel);
        localStorage.setItem("saved-movies", JSON.stringify(saveMoviesDel));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  React.useEffect(() => {
    handleTokenCheck();
    setChangeMsg("");
  }, [loggedIn]);

  // React.useEffect(() => {
  //   const filter = localStorage.getItem("filter");
  //   console.log(`выводим filter ${filter}`);
  //   // getMovies());
  // }, []);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page-content">
        <div className="page">
          <Switch>
            <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
              <Header loggedIn={loggedIn} />
            </Route>
            <Route path={["/signup", "/signin"]}> </Route>
          </Switch>
          <Switch>
            <Route exact path="/" loggedIn={loggedIn} component={Main}></Route>
            <Route path="/signup">
              <InfoTooltip
                sigin={handleSignin}
                isOpen={isInfoTooltipPopupOpen}
                success={isSuccessRegister}
                onClose={closePopup}
                history={history}
              ></InfoTooltip>
              <Register
                handleRegister={handleRegister}
                history={history}
                loggedIn={loggedIn}
              />
            </Route>
            <Route path="/signin">
              <Login handleSignin={handleSignin} loggedIn={loggedIn} />
            </Route>
            <ProtectedRoute
              path="/movies"
              loggedIn={loggedIn}
              component={Movies}
              movies={movies}
              getMovies={getMovies}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              loader={loader}
              saveMovies={saveMovies}
              disableButton={disableButton}
              filterStatus={filterStatus}
              saveFilter={localStorage.getItem("filter")}
              type="movies"
            ></ProtectedRoute>
            <ProtectedRoute
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              movies={saveMovies}
              getMovies={getMovies}
              onCardClick={onCardClick}
              disableButton={disableButton}
              filterStatus={filterStatus}
              onCardDelete={handleCardDelete}
              type="saved-movies"
            ></ProtectedRoute>
            <ProtectedRoute
              path="/profile"
              currentUser={currentUser}
              changeMsg={changeMsg}
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
          </Switch>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
