import {
  useState,
  createContext,
  SetStateAction,
  PropsWithChildren,
} from "react";

import { inputs } from "../../Forms/PersonalInfoForm/data/inputsData";

const initialValues = { name: "", email: "", phoneNumber: "" };

const defaultContextValue = {
  currentForm: null,
  setCurrentForm: () => {},
  inputsData: [
    {
      id: 0,
      name: "",
      type: "",
      placeholder: "",
      label: "",
      errorMessage: "",
      required: true,
      isInputValid: false,
    },
  ],
  setInputsData: () => {},
  values: { name: "", email: "", phoneNumber: "" },
  setValues: () => {},
  isFormValid: false,
  setIsFormValid: () => {},
};

type FormContextType = {
  currentForm: number | null;
  setCurrentForm: React.Dispatch<SetStateAction<number>>;
  inputsData: InputsDataType[];
  setInputsData: React.Dispatch<SetStateAction<InputsDataType[]>>;
  values: ValuesType;
  setValues: React.Dispatch<SetStateAction<ValuesType>>;
  isFormValid: boolean;
  setIsFormValid: React.Dispatch<SetStateAction<boolean>>;
};

export type InputsDataType = {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  label: string;
  errorMessage: string;
  required: boolean;
  isInputValid: boolean;
};

export type ValuesType = {
  name: string;
  email: string;
  phoneNumber: string;
  [key: string]: string;
};

const FormsContext = createContext<FormContextType>(defaultContextValue);

function FormContextProvider({ children }: PropsWithChildren) {
  const [currentForm, setCurrentForm] = useState<number>(1);
  const [inputsData, setInputsData] = useState<InputsDataType[]>(inputs);
  const [values, setValues] = useState<ValuesType>(initialValues);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  return (
    <FormsContext.Provider
      value={{
        currentForm,
        setCurrentForm,
        inputsData,
        setInputsData,
        values,
        setValues,
        isFormValid,
        setIsFormValid,
      }}
    >
      {children}
    </FormsContext.Provider>
  );
}

export default FormContextProvider;
export { FormsContext };
