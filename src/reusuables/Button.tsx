import { useContext } from "react";
import { FormsContext } from "../context/FormContext/formContext";
import useFormNavigation from "../customHooks/useFormNavigation";

function Button() {
  const { currentForm, setCurrentForm } = useContext(FormsContext);
  const { handleNextForm } = useFormNavigation({ currentForm, setCurrentForm });

  return (
    <button
      onClick={handleNextForm}
      className="font-regular bg-denim rounded-sm px-4 py-2 text-white text-[14px]"
    >
      Next Step
    </button>
  );
}

export default Button;
