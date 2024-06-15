import { useContext } from "react";
import { UserSelectionContext } from "../../../context/UserSelectionContext/userSelectionContext";
import PlanSelectionContent from "./PlanSelectionComps/PlanSelectionContent";
import PlanSelectionContainer from "./PlanSelectionComps/PlanSelectionContainer";
import PlanSelectionIcon from "./PlanSelectionComps/PlanSelectionIcon";

function PlanSelection() {
  const { plans } = useContext(UserSelectionContext);

  return (
    <div className="flex flex-col gap-4 cursor-pointer lg:flex-row">
      {plans.map((item) => {
        return (
          <PlanSelectionContainer
            key={item.id}
            planType={item.planType}
            cost={item.price}
            id={item.id}
            isSelected={item.isSelected}
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
