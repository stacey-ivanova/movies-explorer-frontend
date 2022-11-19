import React, { useEffect } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  const { setshort } = props;

  // const check = document.alert(parentNode.getElementsByName("hidden-checkbox"));
  // console.log(check);
  function handleShortFilm(e) {
    e.preventDefault();
    console.log(e.currentTarget.checked);
    if (e.currentTarget.checked) setshort(true);
    else {
      setshort(false);
    }
  }
  return (
    <div className="checkbox__container">
      <label className="checkbox">
        <input
          type="checkbox"
          onChange={handleShortFilm}
          className="hidden-checkbox"
        ></input>
        <span className="visible-checkbox"></span>
      </label>
      <p className="checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
//
