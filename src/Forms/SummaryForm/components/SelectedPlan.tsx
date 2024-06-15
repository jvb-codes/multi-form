import PlanType from "../components/PlanType";
import PlanCost from "../components/PlanCost";

function SelectedPlan() {
  return (
    <div className="flex justify-between p-4">
      <PlanType />
      <PlanCost />
    </div>
  );
}

export default SelectedPlan;
