import {
  PropsWithChildren,
  createContext,
  useState,
  SetStateAction,
} from "react";

const defaultContextValue = {
  isChecked: null,
  setIsChecked: () => {},
};

type ToggleContextType = {
  isChecked: boolean | null;
  setIsChecked: React.Dispatch<SetStateAction<boolean>>;
};

export const ToggleContext =
  createContext<ToggleContextType>(defaultContextValue);

function ToggleContextProvider({ children }: PropsWithChildren) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <ToggleContext.Provider value={{ isChecked, setIsChecked }}>
      {children}
    </ToggleContext.Provider>
  );
}

export default ToggleContextProvider;
