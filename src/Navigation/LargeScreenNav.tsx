import useHandleForm from "../customHooks/useFormNavigation";
import { useContext } from "react";
import { FormsContext } from "../context/FormContext/formContext";

function LargeScreenNav() {
  const { currentForm, setCurrentForm } = useContext(FormsContext);

  const { handleNextForm, handlePreviousForm } = useHandleForm({
    currentForm,
    setCurrentForm,
  });

  return (
    <div className="flex justify-between items-center">
      <p
        onClick={handlePreviousForm}
        className="hidden sm:block text-denim cursor-pointer "
      >
        Go back
      </p>
      <button
        onClick={handleNextForm}
        className=" font-regular bg-denim rounded-sm px-4 py-2 text-white text-[14px] hidden sm:block self-end"
      >
        Next Step
      </button>
    </div>
  );
}

export default LargeScreenNav;
