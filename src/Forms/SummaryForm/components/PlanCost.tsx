import { useContext } from "react";
import { UserSelectionContext } from "../../../context/UserSelectionContext/userSelectionContext";
import { ToggleContext } from "../../../context/ToggleContext/toggleContext";

function PlanCost() {
  const { plans } = useContext(UserSelectionContext);
  const { isChecked } = useContext(ToggleContext);

  const cost = plans.map((item) =>
    item.isSelected ? (
      isChecked ? (
        <p>${item.price.yearly}/yr</p>
      ) : (
        <p>${item.price.monthly}/mo</p>
      )
    ) : null
  );

  return <p className="font-bold text-denim">{cost}</p>;
}
export default PlanCost;
