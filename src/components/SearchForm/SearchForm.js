import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import searchButton from "../../images/arrow.svg";

function SearchForm(props) {
  const { setshort, getMovies, type } = props;
  const [filterValue, setfilterValue] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(type);
    getMovies(filterValue, type);
  }

  function handleFindChange(e) {
    setfilterValue(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="searchform">
      <form onSubmit={handleSubmit} className="searchform__container">
        <input
          className="searchform__item"
          name="film"
          placeholder="Фильм"
          onChange={handleFindChange}
        ></input>
        <button
          type="submit"
          className="searchform__submit-button"
          style={{ backgroundImage: `url(${searchButton})` }}
        ></button>
      </form>
      <FilterCheckbox setshort={setshort} />
      <hr className="line"></hr>
    </div>
  );
}

export default SearchForm;
