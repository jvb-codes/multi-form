import { useContext } from "react";
import { UserSelectionContext } from "../context/UserSelectionContext/userSelectionContext";

function useAddPlan(id: number) {
  const { plans, setPlans } = useContext(UserSelectionContext);

  function addPlan() {
    const update = plans.map((item) => {
      if (item.id === id) {
        return { ...item, isSelected: true };
      }
      return { ...item, isSelected: false };
    });
    setPlans(update);
  }

  return { addPlan };
}

export default useAddPlan;
