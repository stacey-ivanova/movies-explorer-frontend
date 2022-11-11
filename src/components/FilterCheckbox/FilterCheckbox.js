import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  return (
    <div className="checkbox__container">
      <label className="checkbox">
        <input type="checkbox" className="hidden-checkbox"></input>
        <span class="visible-checkbox"></span>
      </label>
      <p className="checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
