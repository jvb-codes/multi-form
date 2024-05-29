import { PropsWithChildren, createContext, useState } from "react";
import { AddOnsType } from "../../Forms/AddOnsForm/types/types";

const initialState = {
  isSelected: false,
  setIsSelected: () => {},
  selectedAddOns: [],
  setSelectedAddOns: () => {},
  selectedPlan: { id: 0, planType: "", cost: 0 },
  setSelectedPlan: () => {},
  selectedId: 0,
  setSelectedId: () => {},
};

type UserSelectionType = {
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  selectedAddOns: AddOnsType[];
  setSelectedAddOns: React.Dispatch<React.SetStateAction<AddOnsType[]>>;
  selectedPlan: SelectedPlanType | undefined;
  setSelectedPlan: React.Dispatch<
    React.SetStateAction<SelectedPlanType | undefined>
  >;
  selectedId: number;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
};

export const UserSelectionContext =
  createContext<UserSelectionType>(initialState);

type SelectedPlanType = {
  id: number;
  planType: string;
  cost: number;
};

export function UserSelectionContextProvider({ children }: PropsWithChildren) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [selectedAddOns, setSelectedAddOns] = useState<AddOnsType[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlanType>();
  const [selectedId, setSelectedId] = useState<number>(0);

  return (
    <UserSelectionContext.Provider
      value={{
        isSelected,
        setIsSelected,
        selectedAddOns,
        setSelectedAddOns,
        selectedPlan,
        setSelectedPlan,
        selectedId,
        setSelectedId,
      }}
    >
      {children}
    </UserSelectionContext.Provider>
  );
}
