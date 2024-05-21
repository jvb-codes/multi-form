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
    <div
      className={`flex items-center sm:w-full ${
        currentForm === 1 ? "justify-end" : "justify-between"
      }`}
    >
      {currentForm !== 1 && (
        <p
          onClick={handlePreviousForm}
          className="hidden cursor-pointer sm:block text-denim "
        >
          Go back
        </p>
      )}
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
