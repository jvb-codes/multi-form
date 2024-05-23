import { PropsWithChildren, createContext, useState } from "react";
import { AddOnsType } from "../../Forms/AddOnsForm/types/types";

const initialState = {
  isSelected: false,
  setIsSelected: () => {},
  selectedAddOns: [],
  setSelectedAddOns: () => {},
};

type UserSelectionType = {
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  selectedAddOns: AddOnsType[];
  setSelectedAddOns: React.Dispatch<React.SetStateAction<AddOnsType[]>>;
};

export const UserSelectionContext =
  createContext<UserSelectionType>(initialState);

export function UserSelectionContextProvider({ children }: PropsWithChildren) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [selectedAddOns, setSelectedAddOns] = useState<AddOnsType[]>([]);

  return (
    <UserSelectionContext.Provider
      value={{ isSelected, setIsSelected, selectedAddOns, setSelectedAddOns }}
    >
      {children}
    </UserSelectionContext.Provider>
  );
}
