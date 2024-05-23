// import addOnsData from "../Forms/AddOnsForm/data/addOnsData";
import { AddOnsType } from "../Forms/AddOnsForm/types/types";

function useAddOnOptions(
  selectedAddOns: AddOnsType[],
  setSelectedAddOns: React.Dispatch<React.SetStateAction<AddOnsType[]>>
) {
  function addOption(
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
    type: string,
    price: number,
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    const checked = e.target.checked;

    setIsChecked(checked);
    const update = [
      ...selectedAddOns,
      { id: id, addOnType: type, addOnPrice: price },
    ];

    setSelectedAddOns(update);
  }

  return [addOption];
}

export default useAddOnOptions;
