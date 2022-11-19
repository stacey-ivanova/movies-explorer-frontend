import React, { useCallback, useEffect, useState } from "react";

//хук управления формой
export default function useInput(initValue, validations,currentValue) {
  const [values, setValues] = React.useState(initValue);
  const [isDirty, setDirty] = React.useState(false);
  const validate = useFormWithValidation(values, validations,currentValue);
  const handleChange = (event) => {
    setValues(event.target.value);
  };
  const handleBlur = (event) => {
    setDirty(true);
  };

  return { values, handleChange, handleBlur, setValues, isDirty, ...validate };
}
function useFormWithValidation(value, validations,currentValue) {
  const [isEmpty, setEmpty] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [sameValueError, setSameValueError] = useState(false);
  const [inputValid, setInputValid] = useState(false);


  useEffect(() => {
    for (const validatrion in validations) {
      console.log(validatrion);
      switch (validatrion) {
        case "isEmail":
          const emailRegexp = new RegExp(
            // /[\w]+@[a-z.]+/
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/
          );
          // )
          // // const re =
          // //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;

          // // // /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
          // value.match(
          //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/
          // )
          emailRegexp.test(value)
            ? setIsEmailError(false)
            : setIsEmailError(true);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
          case "isIdent":
            console.log(value)
            console.log(currentValue)
            console.log(value!==currentValue)
          value!==currentValue ? setSameValueError(false) : setSameValueError(true);
          break;
      }
    }
  }, [value]);
  useEffect(() => {
    if (isEmpty || isEmailError||sameValueError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, isEmailError,sameValueError]);
  return {
    isEmpty,
    isEmailError,
    inputValid,
    sameValueError,
  };
}
//хук управления формой и валидации формы
// export function useFormWithValidation() {
//   const [values, setValues] = React.useState({});
//   const [errors, setErrors] = React.useState({});
//   const [isValid, setIsValid] = React.useState(false);

//   const handleChange = (event) => {
//     const target = event.target;
//     const name = target.name;
//     const value = target.value;
//     setValues({ ...values, [name]: value });
//     setErrors({ ...errors, [name]: target.validationMessage });
//     setIsValid(target.closest("form").checkValidity());
//   };

//   const resetForm = useCallback(
//     (newValues = {}, newErrors = {}, newIsValid = false) => {
//       setValues(newValues);
//       setErrors(newErrors);
//       setIsValid(newIsValid);
//     },
//     [setValues, setErrors, setIsValid]
//   );

//   return { values, handleChange, errors, isValid, resetForm };
// }
