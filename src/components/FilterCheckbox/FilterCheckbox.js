import React, { useEffect, useState } from "react";
import "./FilterCheckbox.css";
import { useLocation } from "react-router-dom";

function FilterCheckbox(props) {
  const location = useLocation();
  const { submit } = props;
  const [check, setCheck] = useState(JSON.parse(localStorage.getItem("short")));
  function handleShortFilm(e) {
    const checkbox = document.querySelector(".hidden-checkbox").checked;

    // console.log(`checkbox ${checkbox}`);
    // console.log(`check ${check}`);
    if (checkbox) {
      // console.log(`checkbox true`);
      if (location.pathname === "/saved-movies") {
        localStorage.setItem("short_saved-movies", true);
      } else {
        localStorage.setItem("short_movies", true);
      }
      document.querySelector(".hidden-checkbox").checked = true;
      // check = !check;
      setCheck(true);
      submit();
    } else {
      // console.log(`checkbox false`);
      // check = !check;
      setCheck(false);
      document.querySelector(".hidden-checkbox").checked = false;
      if (location.pathname === "/saved-movies") {
        localStorage.setItem("short_saved-movies", false);
      } else {
        localStorage.setItem("short_movies", false);
      }
      submit();
    }
  }
  useEffect(() => {
    // let check = localStorage.getItem("short");
    console.log(`localstorage ${JSON.parse(localStorage.getItem("short"))}`);
    console.log(location.pathname);
    if (
      JSON.parse(localStorage.getItem("short_movies")) &&
      location.pathname === "/movies"
    ) {
      console.log("short true");
      document.querySelector(".hidden-checkbox").checked = true;
      // console.log(
      //   `checkbox ${document.querySelector(".hidden-checkbox").checked}`
      // );
      // console.log(`check ${check}`);
      localStorage.setItem("short", true);
      setCheck(true);
      // if (JSON.parse(localStorage.getItem("short")) != null) {
      // submit();
      // }
    } else if (location.pathname === "/saved-movies") {
      document.querySelector(".hidden-checkbox").checked = false;
      setCheck(false);
      localStorage.setItem("short_saved-movies", false);
      submit();
    } else {
      // console.log("here");

      document.querySelector(".hidden-checkbox").checked = false;
      setCheck(false);
      // localStorage.setItem("short_movies", false);
      // console.log(
      //   `checkbox ${document.querySelector(".hidden-checkbox").checked}`
      // );
      console.log(JSON.parse(localStorage.getItem("short")));
      // if (JSON.parse(localStorage.getItem("short")) != null) {
      console.log("here");
      // submit();
      // }
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
