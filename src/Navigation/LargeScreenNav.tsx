import useHandleForm from "../customHooks/useFormNavigation";
import { useContext } from "react";
import { FormsContext } from "../context/FormContext/formContext";
import PrevFormBtn from "./components/Buttons/PrevFormBtn";
import NextFormBtn from "./components/Buttons/NextFormBtn";
import ConfirmBtn from "./components/Buttons/ConfirmBtn";
import useValidateForm from "../customHooks/useValidateForm";

function LargeScreenNav() {
  const { currentForm, setCurrentForm, isFormValid } = useContext(FormsContext);

  const { handleNextForm, handlePreviousForm } = useHandleForm({
    currentForm,
    setCurrentForm,
  });

  useValidateForm();

  return (
    <div
      className={`hidden sm:flex items-center sm:w-full ${
        currentForm === 1 ? "justify-end" : "justify-between"
      }`}
    >
      <PrevFormBtn
        isFirstForm={currentForm}
        handlePreviousForm={handlePreviousForm}
      />
      <NextFormBtn
        handleNextForm={handleNextForm}
        validation={!isFormValid}
        isLastForm={currentForm}
      />
      <ConfirmBtn isLastForm={currentForm} handleNextForm={handleNextForm} />
    </div>
  );
}

export default LargeScreenNav;
