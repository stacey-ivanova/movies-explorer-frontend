import React, { useEffect, useState } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  const { setshort } = props;
const [checkboxStatus, setCheckboxStatus] = useState(false)


  function handleShortFilm(e) {
        const checkbox=document.querySelector(".hidden-checkbox").checked
    console.log(checkbox)
    if (checkbox)
    {setshort(true);
      setCheckboxStatus(true)}
    else {
      setCheckboxStatus(false)
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
        {/* <span className="visible-checkbox"></span> */}
      </label>
      <p className="checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
//
