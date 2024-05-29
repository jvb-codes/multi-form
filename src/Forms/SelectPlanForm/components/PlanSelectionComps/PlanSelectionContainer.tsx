import { PlanSelectionContainerProps } from "../../types/types";

import useAddPlan from "../../../../customHooks/useAddPlan";

function PlanSelectionContainer({
  children,
  planId,
  planType,
  cost,
  isSelected,
}: PlanSelectionContainerProps) {
  const { addPlan } = useAddPlan(planId, planType, cost);

  return (
    <div
      onClick={() => addPlan()}
      className={`border border-coolGray flex items-center h-[75px] rounded-lg lg:flex-col lg:justify-around gap-2 lg:gap-4 p-2 lg:p-8 lg:items-start lg:flex-grow lg:min-h-[250px] lg:min-w-[200px] sm:min-h-[100px] outline ${
        isSelected
          ? "bg-red-500 border-purplishBlue"
          : "hover:border-purplishBlue hover:bg-veryLightGray "
      }`}
    >
      {children}
    </div>
  );
}
export default PlanSelectionContainer;
