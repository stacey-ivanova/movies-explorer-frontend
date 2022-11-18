import React, { useCallback, useEffect, useState } from "react";

//хук управления формой
export default function useInput(initValue, validations) {
  const [values, setValues] = React.useState(initValue);
  const [isDirty, setDirty] = React.useState(false);
  const validate = useFormWithValidation(values, validations);
  const handleChange = (event) => {
    setValues(event.target.value);
  };
  const handleBlur = (event) => {
    setDirty(true);
  };

  return { values, handleChange, handleBlur, setValues, isDirty, ...validate };
}
function useFormWithValidation(value, validations) {
  const [isEmpty, setEmpty] = useState(true);
  const [isEmailError, setIsEmailError] = useState(false);

  useEffect(() => {
    for (const validatrion in validations) {
      console.log(validatrion);
      switch (validatrion) {
        case "isEmail":
          const re =
            /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
          re.test(String(value).toLowerCase())
            ? setIsEmailError(true)
            : setIsEmailError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
      }
    }
  }, [value]);
  return {
    isEmpty,
    isEmailError,
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
