import {
  useState,
  createContext,
  SetStateAction,
  PropsWithChildren,
} from "react";

const defaultContextValue = {
  currentForm: null,
  setCurrentForm: () => {},
};

type FormContextType = {
  currentForm: number | null;
  setCurrentForm: React.Dispatch<SetStateAction<number>>;
};

const FormsContext = createContext<FormContextType>(defaultContextValue);

function FormContextProvider({ children }: PropsWithChildren) {
  const [currentForm, setCurrentForm] = useState<number>(1);

  return (
    <FormsContext.Provider value={{ currentForm, setCurrentForm }}>
      {children}
    </FormsContext.Provider>
  );
}

export default FormContextProvider;
export { FormsContext };
