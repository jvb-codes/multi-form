import { plans } from "../data/plans";
import { useContext } from "react";
import { UserSelectionContext } from "../../../context/UserSelectionContext/userSelectionContext";
import PlanSelectionContent from "./PlanSelectionComps/PlanSelectionContent";
import PlanSelectionContainer from "./PlanSelectionComps/PlanSelectionContainer";
import PlanSelectionIcon from "./PlanSelectionComps/PlanSelectionIcon";

function PlanSelection() {
  const { selectedId } = useContext(UserSelectionContext);

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      {plans.map((item) => {
        return (
          <PlanSelectionContainer
            key={item.planType}
            planType={item.planType}
            cost={item.price}
            planId={item.id}
            isSelected={selectedId === item.id}
          >
            <div className="flex items-center justify-center h-full gap-2 sm:pl-2 lg:pl-0 lg:flex-col lg:items-start lg:justify-around">
              <PlanSelectionIcon item={item} />
              <PlanSelectionContent item={item} />
            </div>
          </PlanSelectionContainer>
        );
      })}
    </div>
  );
}

export default PlanSelection;
