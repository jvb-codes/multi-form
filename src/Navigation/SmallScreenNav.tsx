import useFormNavigation from "../customHooks/useFormNavigation";
import { useContext } from "react";
import { FormsContext } from "../context/FormContext/formContext";
import PrevFormBtn from "./components/Buttons/PrevFormBtn";
import NextFormBtn from "./components/Buttons/NextFormBtn";
import ConfirmBtn from "./components/Buttons/ConfirmBtn";
import useValidateForm from "../customHooks/useValidateForm";

function SmallScreenNav() {
  const { currentForm, setCurrentForm, isFormValid } = useContext(FormsContext);

  const { handlePreviousForm, handleNextForm } = useFormNavigation({
    currentForm,
    setCurrentForm,
  });

  useValidateForm();

  return (
    <>
      {currentForm !== 5 && (
        <div
          className={` bg-white fixed bottom-0 w-full sm:hidden p-4 text-right flex items-center ${
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
          <ConfirmBtn
            isLastForm={currentForm}
            handleNextForm={handleNextForm}
          />
        </div>
      )}
    </>
  );
}
export default SmallScreenNav;
