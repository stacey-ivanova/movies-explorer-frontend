import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import searchButton from "../../images/arrow.svg";
import searchButtonDisabled from "../../images/arrow_dis.svg";
import useInput from "../Validate/Validate";
// import React, { useEffect, useState } from "react";

function SearchForm(props) {
  const { getMovies, type, saveFilter, disableButton } = props;
  const [filterValue, setfilterValue] = React.useState(saveFilter || "");
  const formInput = useInput(filterValue, {
    // isEmpty: true,
    isText: true,
    // isIdent: true,
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (type == "movies") {
      localStorage.setItem("filter", filterValue);
    }
    getMovies(filterValue, type);
  }
  function handleCheck(e) {
    const findstr = document.querySelector(".searchform__item").value;
    // console.log(findstr);
    if (findstr) {
      setfilterValue(findstr);
    } else {
      setfilterValue("");
    }
    // console.log(filterValue);

    getMovies(filterValue, type);
  }
  function handleFindChange(e) {
    formInput.handleChange(e);
    setfilterValue(e.target.value);
  }

  React.useEffect(() => {
    console.log(`выводим filter ${saveFilter}`);
    if (saveFilter) {
      // setfilterValue(saveFilter);
      getMovies(saveFilter, type);
    }
    // getMovies());
  }, []);
  return (
    <div className="searchform">
      <form onSubmit={handleSubmit} className="searchform__container">
        <input
          className="searchform__item"
          name="film"
          placeholder="Фильм"
          onChange={handleFindChange}
          value={formInput.values}
        ></input>
        {formInput.isTextError && (
          <span className="searchform__item-error">
            Введены некоректные данные
          </span>
        )}
        <button
          type="submit"
          className="searchform__submit-button"
          style={{
            backgroundImage: `url(${
              formInput.inputValid ? searchButton : searchButtonDisabled
            })`,
          }}
          disabled={!formInput.inputValid || disableButton}
        ></button>
      </form>
      <FilterCheckbox submit={handleCheck} />
      <hr className="line"></hr>
    </div>
  );
}

export default SearchForm;
