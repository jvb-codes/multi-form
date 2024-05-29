import { useEffect, useContext } from "react";
import { plans } from "../Forms/SelectPlanForm/data/plans";
import { UserSelectionContext } from "../context/UserSelectionContext/userSelectionContext";
import { ToggleContext } from "../context/ToggleContext/toggleContext";

function useUpdateCostOnToggle() {
  const { selectedPlan, setSelectedPlan } = useContext(UserSelectionContext);
  const { isChecked } = useContext(ToggleContext);

  function updateCostOnToggle() {
    const findPrice = plans.filter((item) => {
      return item.planType === selectedPlan?.planType;
    })[0]?.price;

    if (selectedPlan && isChecked) {
      const update = { ...selectedPlan, cost: findPrice?.yearly };

      setSelectedPlan(update);
    }

    if (selectedPlan && !isChecked) {
      const update = { ...selectedPlan, cost: findPrice?.monthly };

      setSelectedPlan(update);
    }
  }

  useEffect(() => {
    updateCostOnToggle();
  }, [isChecked]);
  return;
}

export default useUpdateCostOnToggle;
