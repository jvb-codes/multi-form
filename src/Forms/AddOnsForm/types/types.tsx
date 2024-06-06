export type AddOnsType = {
  id: number;
  type: string;
  description: string;
  price: number;
  isSelected: boolean;
};

export type OptionProps = {
  id: number;
  type: string;
  description: string;
  price: number;
  isSelected: boolean;
  setAddOns: React.Dispatch<React.SetStateAction<AddOnsType[]>>;
};
