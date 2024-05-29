import { AddOnsType } from "../../Forms/AddOnsForm/types/types";

export type AddOptionArgs = {
  ev: React.ChangeEvent<HTMLInputElement>;
  id: number;
  type: string;
  price: number;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UseAddOnOptionsArgs = {
  selectedAddOns: AddOnsType[];
  setSelectedAddOns: React.Dispatch<React.SetStateAction<AddOnsType[]>>;
};

export type UpdateSelectedAddOnsArgs = {
  ev: React.ChangeEvent<HTMLInputElement>;
  selectedAddOns: AddOnsType[];
  id: number;
  type: string;
  price: number;
  setSelectedAddOns: React.Dispatch<React.SetStateAction<AddOnsType[]>>;
};

export type ChangeInputBackGroundArgs = {
  ev: React.ChangeEvent<HTMLInputElement>;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
};
