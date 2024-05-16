import { SetStateAction } from "react";

type NextFormParams = {
  setCurrentForm: React.Dispatch<SetStateAction<number>>;
  currentForm: number | null;
};

const useFormNavigation = ({ currentForm, setCurrentForm }: NextFormParams) => {
  function handleNextForm() {
    if (currentForm && currentForm < 5) {
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

  return { handleNextForm, handlePreviousForm };
};

export default useFormNavigation;
