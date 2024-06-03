import {
  ChangeInputBackGroundArgs,
  UpdateSelectedAddOnsArgs,
} from "../../../customHooks/types/types";
import addOnsData from "../data/addOnsData";

export function changeInputBackGround({
  ev,
  id,
  selectedAddOns,
  setSelectedAddOns,
}: ChangeInputBackGroundArgs) {
  const update = addOnsData.map((item) => {
    if (item.id === id) {
      return { ...item, isSelected: true }; // Return updated item
    }
    return item; // Return unchanged item
  });

  console.log(update); // Log the updated array
  setSelectedAddOns(update); // Update the state with the new array
}
export function updateSelectedAddOns({
  ev,
  selectedAddOns,
  id,
  type,
  price,
  setSelectedAddOns,
}: UpdateSelectedAddOnsArgs) {
  if (ev.target.checked) {
    const update = [
      ...selectedAddOns,
      { id: id, addOnType: type, addOnPrice: price },
    ];

    setSelectedAddOns(update);
  }

  if (!ev.target.checked) {
    const update = selectedAddOns.filter((item) => {
      return item.id !== id;
    });
    setSelectedAddOns(update);
  }
}
