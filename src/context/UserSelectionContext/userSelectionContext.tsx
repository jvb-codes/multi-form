import { PropsWithChildren, createContext, useState } from "react";
import { AddOnsType } from "../../Forms/AddOnsForm/types/types";
import addOnsData from "../../Forms/AddOnsForm/data/addOnsData";
import { plansData } from "../../Forms/SelectPlanForm/data/plans";
const initialState = {
  isSelected: false,
  setIsSelected: () => {},
  addOns: [{ id: 0, type: "", price: 0, description: "", isSelected: false }],
  setAddOns: () => {},
  plans: [
    {
      id: 0,
      planType: "",
      price: { monthly: 0, yearly: 0 },
      icon: "",
      isSelected: false,
    },
  ],
  setPlans: () => {},
};

type UserSelectionType = {
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  addOns: AddOnsType[];
  setAddOns: React.Dispatch<React.SetStateAction<AddOnsType[]>>;
  plans: PlansType[];
  setPlans: React.Dispatch<React.SetStateAction<PlansType[]>>;
};

export const UserSelectionContext =
  createContext<UserSelectionType>(initialState);

type PlansType = {
  id: number;
  planType: string;
  price: { monthly: number; yearly: number };
  icon: string;
  isSelected: boolean;
};

export function UserSelectionContextProvider({ children }: PropsWithChildren) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [addOns, setAddOns] = useState<AddOnsType[]>(addOnsData);
  const [plans, setPlans] = useState<PlansType[]>(plansData);

  return (
    <UserSelectionContext.Provider
      value={{
        isSelected,
        setIsSelected,
        addOns,
        setAddOns,
        plans,
        setPlans,
      }}
    >
      {children}
    </UserSelectionContext.Provider>
  );
}
