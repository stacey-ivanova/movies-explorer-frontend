import React from "react";
import "./MoreButton.css";

function MoreButton(props) {
  const { handleMoreButtonClick } = props;
  return (
    <button
      onClick={handleMoreButtonClick}
      type="submit"
      className="more-button"
    >
      Ещё
    </button>
  );
}

export default MoreButton;
