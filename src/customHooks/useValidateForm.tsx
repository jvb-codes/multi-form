import { useContext, useEffect } from "react";
import { FormsContext } from "../context/FormContext/formContext";
import { UserSelectionContext } from "../context/UserSelectionContext/userSelectionContext";
function useValidateForm() {
  const { setIsFormValid, inputsData, currentForm } = useContext(FormsContext);

  const { plans } = useContext(UserSelectionContext);

  function validateForm(currentForm: number | null) {
    switch (currentForm) {
      case 1:
        inputsData.some((item) => item.isInputValid === false)
          ? setIsFormValid(false)
          : setIsFormValid(true);
        break;
      case 2:
        plans.some((item) => item.isSelected === true)
          ? setIsFormValid(true)
          : setIsFormValid(false);
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    validateForm(currentForm);
  }, [inputsData, plans]);

  return { validateForm };
}

export default useValidateForm;
