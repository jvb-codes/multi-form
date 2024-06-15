import { ValuesType } from "../../../context/FormContext/formContext";
import { InputsDataType } from "../../../context/FormContext/formContext";
import { useState } from "react";

interface InputsProps extends InputsDataType {
  value: ValuesType;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}

function Inputs(props: InputsProps) {
  const {
    label,
    errorMessage,
    isInputValid,
    id,
    value,
    handleOnChange,
    ...inputProps
  } = props;
  const [focus, setFocus] = useState(false);

  function handleFocus() {
    setFocus(true);
  }

  return (
    <div className="flex flex-col mt-7">
      <label className="text-denim text-[12px] font-bold flex justify-between">
        <p>{label}</p>
        <p
          className={`${
            focus && !isInputValid ? "block" : "hidden"
          } text-red-600 error-message`}
        >
          {errorMessage}
        </p>
      </label>

      <input
        className="p-2 border rounded-sm outline-none border-lightGray "
        {...inputProps}
        onChange={(e) => handleOnChange(e, id)}
        onBlur={handleFocus}
        focused={focus.toString()}
        value={value}
      />
    </div>
  );
}
export default Inputs;
