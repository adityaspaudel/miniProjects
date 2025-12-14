import { useState } from "react";

export function useFormInput({ initialValue = "", validate = () => "" } = {}) {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);

  const error = touched ? validate(value) : "";

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setTouched(true);
  };

  const reset = () => {
    setValue(initialValue);
    setTouched(false);
  };

  return {
    value,
    onChange,
    onBlur,
    reset,
    error,
    isValid: !error,
  };
}
