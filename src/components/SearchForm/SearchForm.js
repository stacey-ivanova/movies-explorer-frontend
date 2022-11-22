import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import searchButton from "../../images/arrow.svg";
import searchButtonDisabled from "../../images/arrow_dis.svg";
import useInput from "../Validate/Validate";

function SearchForm(props) {
  const { getMovies, type } = props;
  const [filterValue, setfilterValue] = React.useState("");
  const formInput = useInput(filterValue, {
    isEmpty: true,
    isText: true,
    isIdent: true,
  });
  // console.log(`istext: ${formInput.isTextError}`);
  // console.log(`forminput ${formInput.inputValid}`);
  // console.log(
  //   `disabledvalue ${
  //     document.querySelector(".searchform__submit-button").disabled
  //   }`
  // );

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("submit");
    getMovies(filterValue, type);
  }
  function handleCheck(e) {
    const findstr = document.querySelector(".searchform__item").value;
    // console.log(findstr);
    if (findstr) {
      // if ((type = "movie")) {
      //   localStorage.setItem("filter", findstr);
      // }
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

  return (
    <div className="searchform">
      <form onSubmit={handleSubmit} className="searchform__container">
        <input
          className="searchform__item"
          name="film"
          placeholder="Фильм"
          onChange={handleFindChange}
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
          disabled={!formInput.inputValid}
        ></button>
      </form>
      <FilterCheckbox submit={handleCheck} />
      <hr className="line"></hr>
    </div>
  );
}

export default SearchForm;
