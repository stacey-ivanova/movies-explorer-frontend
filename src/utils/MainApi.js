class MainApi {
  constructor({ baseMainUrl }) {
    this._baseUrl = baseMainUrl;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }).then(this.handleResponse);
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }).then(this.handleResponse);
  }

  changeUserInfo(user) {
    const user_info = JSON.stringify({
      name: user.userName,
      email: user.userMail,
    });
    console.log(user_info);
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.userName,
        email: user.userMail,
      }),
    }).then(this.handleResponse);
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    }).then(this.handleResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }).then(this.handleResponse);
  }

  changeMovieStatus(movieId, isLiked) {
    if (isLiked) {
      this.deleteMovie(movieId);
    } else {
      this.saveMovie(movieId);
    }
  }

  handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка");
  };
}

const mainApi = new MainApi({
  baseMainUrl: "https://api.movie.stacey.nomoredomains.icu",
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});

export default mainApi;
