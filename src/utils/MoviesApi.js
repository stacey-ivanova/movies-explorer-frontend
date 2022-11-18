class MoviesApi {
  constructor({ baseMovieUrl }) {
    this._baseUrl = baseMovieUrl;
  }

  getMovies() {
    return fetch(this._baseUrl, {
      headers: {
        // authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }).then(this.handleResponse);
  }

  handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка");
  };
}

const moviesApi = new MoviesApi({
  baseMovieUrl: "https://api.nomoreparties.co/beatfilm-movies",
  // baseMovieUrl: "https://localhost:3001",
  headers: {
    // authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});

export default moviesApi;
