import {
  ChangeInputBackGroundArgs,
  UpdateSelectedAddOnsArgs,
} from "../../../customHooks/types/types";

export function changeInputBackGround({
  ev,
  setIsChecked,
}: ChangeInputBackGroundArgs) {
  const checked = ev.target.checked;
  setIsChecked(checked);
  return;
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
