import { useContext } from "react";
import { UserSelectionContext } from "../../../context/UserSelectionContext/userSelectionContext";
import useFormNavigation from "../../../customHooks/useFormNavigation";
import { FormsContext } from "../../../context/FormContext/formContext";

function PlanType() {
  const { plans } = useContext(UserSelectionContext);
  const { currentForm, setCurrentForm } = useContext(FormsContext);
  const { handleRevisePlan } = useFormNavigation({
    currentForm,
    setCurrentForm,
  });

  const selectedPlan = plans.map((item) =>
    item.isSelected ? <p>{item.planType}</p> : null
  );
  return (
    <div>
      <p className="font-bold text-denim">{selectedPlan}</p>
      <p
        onClick={handleRevisePlan}
        className="underline cursor-pointer formInstructions"
      >
        Change
      </p>
    </div>
  );
}
export default PlanType;
