import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  return (
    <div className="page-content">
      <div className="page">
        <Switch>
          <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
            <Header />
          </Route>
          <Route path={["/signup", "/signin"]}> </Route>
        </Switch>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Switch>
          <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
            <Footer />
          </Route>
          <Route path={["/signup", "/signin"]}> </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
