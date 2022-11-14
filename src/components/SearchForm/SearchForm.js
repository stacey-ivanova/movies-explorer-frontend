import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import searchButton from "../../images/arrow.svg";

function SearchForm(props) {
  return (
    <div className="searchform">
      <form className="searchform__container">
        <input
          className="searchform__item"
          name="film"
          placeholder="Фильм"
        ></input>
        <button
          type="submit"
          className="searchform__submit-button"
          style={{ backgroundImage: `url(${searchButton})` }}
        ></button>
      </form>
      <FilterCheckbox />
      <hr className="line"></hr>
    </div>
  );
}

export default SearchForm;
