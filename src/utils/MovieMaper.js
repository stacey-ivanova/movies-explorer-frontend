const moviesMapper = (movies) => {
  return movies.map((movie) => {
    return {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: movie.image
        ? `https://api.nomoreparties.co/${movie.image.url}`
        : "",
      trailerLink: movie.trailerLink ?? "",
      thumbnail: movie.image
        ? `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`
        : "",
      movieId: String(movie.id),
      nameRU: movie.nameRU ?? "",
      nameEN: movie.nameEN ?? "",
    };
  });
};

export default moviesMapper;
