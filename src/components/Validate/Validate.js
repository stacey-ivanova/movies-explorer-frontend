import React, { useCallback, useEffect, useState } from "react";

export default function useInput(initValue, validations, currentValue) {
  const [values, setValues] = React.useState(initValue);
  const [isDirty, setDirty] = React.useState(false);
  const validate = useFormWithValidation(values, validations, currentValue);
  const handleChange = (event) => {
    setValues(event.target.value);
  };
  const handleBlur = (event) => {
    setDirty(true);
  };

  return { values, handleChange, handleBlur, setValues, isDirty, ...validate };
}
function useFormWithValidation(value, validations, currentValue) {
  const [isEmpty, setEmpty] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isTextError, setIsTextError] = useState(false);
  const [sameValueError, setSameValueError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    console.log(value);
    for (const validatrion in validations) {
      switch (validatrion) {
        case "isEmail":
          const emailRegexp = new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/
          );
          emailRegexp.test(value)
            ? setIsEmailError(false)
            : setIsEmailError(true);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "isIdent":
          value !== currentValue
            ? setSameValueError(false)
            : setSameValueError(true);
          break;
        case "isText":
          const textRegexp = new RegExp(/^[а-яА-ЯёЁa-zA-Z\s]*$/);
          textRegexp.test(value) ? setIsTextError(false) : setIsTextError(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || isEmailError || sameValueError || isTextError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, isEmailError, sameValueError, isTextError]);
  return {
    isEmpty,
    isEmailError,
    inputValid,
    sameValueError,
    isTextError,
  };
}
