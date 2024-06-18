import { useContext } from "react";
import { FormsContext } from "../../../context/FormContext/formContext";
import Inputs from "./Inputs";

function PersonalInfoInputs() {
  const { values, setValues, inputsData, setInputsData } =
    useContext(FormsContext);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>, id: number) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    const update = inputsData.map((item) => {
      if (item.id === id && e.target.validity.valid) {
        return { ...item, isInputValid: true };
      }
      if (item.id === id && !e.target.validity.valid) {
        return { ...item, isInputValid: false };
      }
      return item;
    });
    setInputsData(update);
  }

  return (
    <>
      {inputsData.map((input) => (
        <Inputs
          key={input.id}
          handleOnChange={handleOnChange}
          value={values[input.name]}
          id={input.id}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          label={input.label}
          errorMessage={input.errorMessage}
          required={input.required}
          isInputValid={input.isInputValid}
          pattern={input.pattern}
        />
      ))}
    </>
  );
}
export default PersonalInfoInputs;
