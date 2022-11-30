import React from "react";
import signin from "../../images/signedIn.svg";
import denied from "../../images/denied.svg";
import "./InfoTooltip.css";

function InfoTooltip(props) {
  const { sigin, isOpen, success, onClose, history } = props;

  function handleRedirect() {
    if (success) {
      onClose();
      const email = localStorage.getItem("email");
      const pass = localStorage.getItem("password");
      sigin(email, pass);
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      // history.push("/movie");
    } else {
      onClose();
    }
  }

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className={"popup__content popup__content_type_tooltip"}>
        <button
          type="button"
          className="popup__close-button"
          onClick={handleRedirect}
        ></button>
        {success ? (
          <>
            <img className="popup__icon" src={signin} />
            <h2 className={"popup__title  popup__title_type_tooltip"}>
              Вы успешно зарегистрировались!
            </h2>
          </>
        ) : (
          <>
            <img className="popup__icon" src={denied} />
            <h2 className={"popup__title  popup__title_type_tooltip"}>
              Что-то пошло не так! Попробуйте ещё раз.
            </h2>
          </>
        )}
      </div>
    </div>
  );
}
export default InfoTooltip;
