import { useContext } from "react";
import { ToggleContext } from "../../../context/ToggleContext/toggleContext";
import { UserSelectionContext } from "../../../context/UserSelectionContext/userSelectionContext";

function Total() {
  const { isChecked } = useContext(ToggleContext);
  const { addOns, plans } = useContext(UserSelectionContext);

  const getTotal = () => {
    const addOnTotal = addOns.reduce((sum, item) => {
      if (item.isSelected) {
        return sum + item.price;
      }
      return sum;
    }, 0);

    const selectedPlan = plans.find((item) => item.isSelected);
    if (selectedPlan && isChecked) {
      return selectedPlan.price.yearly + addOnTotal;
    }
    if (selectedPlan && !isChecked) {
      return selectedPlan.price.monthly + addOnTotal;
    }
    return null;
  };

  const total = getTotal();

  return (
    <div className="flex justify-between p-4 ">
      <p className="formInstructions">
        Total (per {isChecked ? "year" : "month"})
      </p>
      <p className="text-purplishBlue text-[20px] font-bold">
        +${total}/{isChecked ? "yr" : "mo"}
      </p>
    </div>
  );
}
export default Total;
