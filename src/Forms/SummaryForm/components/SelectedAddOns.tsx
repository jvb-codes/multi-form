import { useContext } from "react";
import { UserSelectionContext } from "../../../context/UserSelectionContext/userSelectionContext";
import { ToggleContext } from "../../../context/ToggleContext/toggleContext";

function SelectedAddOns() {
  const { addOns } = useContext(UserSelectionContext);
  const { isChecked } = useContext(ToggleContext);

  const selectedAddOns = addOns.map((item) =>
    item.isSelected ? (
      <div className="flex justify-between">
        <p className="formInstructions">{item.type}</p>
        {isChecked ? (
          <p className="text-denim">+${item.price}/yr</p>
        ) : (
          <p className="text-denim">+${item.price}/mo</p>
        )}
      </div>
    ) : null
  );

  return <div className="flex flex-col gap-2 p-4 ">{selectedAddOns}</div>;
}
export default SelectedAddOns;
