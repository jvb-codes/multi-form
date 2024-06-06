import { useContext } from "react";
import { UserSelectionContext } from "../../../context/UserSelectionContext/userSelectionContext";

function PlanType() {
  const { plans } = useContext(UserSelectionContext);

  const selectedPlan = plans.map((item) =>
    item.isSelected ? <p>{item.planType}</p> : null
  );
  return (
    <div className="">
      <p className="font-bold text-denim">{selectedPlan}</p>
      <p className="underline formInstructions">Change</p>
    </div>
  );
}
export default PlanType;
