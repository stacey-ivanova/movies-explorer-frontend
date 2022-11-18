import React, { useEffect } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  const { setshort } = props;

  // const check = document.alert(parentNode.getElementsByName("hidden-checkbox"));
  // console.log(check);
  // function handleShortFilm(e) {
  //   e.preventDefault();
  //   if (e.currentTarget.checked) setshort(false);
  //   else {
  //     setshort(true);
  //   }
  // }
  return (
    <div className="checkbox__container">
      <label className="checkbox">
        <input type="checkbox" className="hidden-checkbox"></input>
        <span className="visible-checkbox"></span>
      </label>
      <p className="checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
//
