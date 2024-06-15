import { SetStateAction } from "react";
import { useContext } from "react";
import { FormsContext } from "../context/FormContext/formContext";

type NextFormParams = {
  setCurrentForm: React.Dispatch<SetStateAction<number>>;
  currentForm: number | null;
};

const useFormNavigation = ({ currentForm, setCurrentForm }: NextFormParams) => {
  const { setIsFormValid } = useContext(FormsContext);

  function handleNextForm() {
    if (currentForm && currentForm < 5) {
      if (currentForm < 2) {
        setIsFormValid(false);
      }
      setCurrentForm((prevForm: number) => prevForm + 1);
    } else {
      setCurrentForm(1);
    }
  }

  function handlePreviousForm() {
    if (currentForm === 1) {
      return;
    }
    setCurrentForm((form) => form - 1);
  }

  function handleRevisePlan() {
    setCurrentForm(2);
  }

  return { handleNextForm, handlePreviousForm, handleRevisePlan };
};

export default useFormNavigation;
