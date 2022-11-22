import React, { useEffect, useState } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  const { submit } = props;
  const [check, setCheck] = useState(JSON.parse(localStorage.getItem("short")));
  function handleShortFilm(e) {
    const checkbox = document.querySelector(".hidden-checkbox").checked;

    console.log(`checkbox ${checkbox}`);
    console.log(`check ${check}`);
    if (checkbox) {
      console.log(`checkbox true`);
      localStorage.setItem("short", true);
      document.querySelector(".hidden-checkbox").checked = true;
      // check = !check;
      setCheck(true);
      submit();
    } else {
      console.log(`checkbox false`);
      // check = !check;
      setCheck(false);
      document.querySelector(".hidden-checkbox").checked = false;
      localStorage.setItem("short", false);
      submit();
    }
  }
  useEffect(() => {
    // let check = localStorage.getItem("short");
    console.log(`localstorage ${JSON.parse(localStorage.getItem("short"))}`);
    console.log(`check ${check}`);
    if (JSON.parse(localStorage.getItem("short"))) {
      console.log("short true");
      document.querySelector(".hidden-checkbox").checked = true;
      console.log(
        `checkbox ${document.querySelector(".hidden-checkbox").checked}`
      );
      console.log(`check ${check}`);
      setCheck(true);
      if (JSON.parse(localStorage.getItem("short")) != null) {
        submit();
      }
    } else {
      console.log("here");
      document.querySelector(".hidden-checkbox").checked = false;
      setCheck(false);
      console.log(
        `checkbox ${document.querySelector(".hidden-checkbox").checked}`
      );
      console.log(`check ${check}`);
      if (JSON.parse(localStorage.getItem("short")) != null) {
        submit();
      }
    }
  }, []);

  return (
    <div className="checkbox__container">
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={JSON.parse(localStorage.getItem("short"))}
          onClick={handleShortFilm}
          className={`hidden-checkbox ${check ? "hidden-checkbox-active" : ""}`}
        ></input>
        {/* <span className="visible-checkbox"></span> */}
      </label>
      <p className="checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
