import { useContext } from "react";
import { UserSelectionContext } from "../context/UserSelectionContext/userSelectionContext";
import { ToggleContext } from "../context/ToggleContext/toggleContext";

function useAddPlan(
  planId: number,
  planType: string,
  cost: { monthly: number; yearly: number }
) {
  const { selectedPlan, setSelectedPlan, setSelectedId } =
    useContext(UserSelectionContext);
  const { isChecked } = useContext(ToggleContext);

  function addPlan() {
    const update = {
      id: planId,
      planType: planType,
      cost: isChecked ? cost.yearly : cost.monthly,
    };

    setSelectedPlan(update);

    setSelectedId(planId);
  }

  console.log(selectedPlan);

  return { addPlan };
}

export default useAddPlan;
