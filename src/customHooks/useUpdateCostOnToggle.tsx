import { useEffect, useContext } from "react";
import { UserSelectionContext } from "../context/UserSelectionContext/userSelectionContext";
import { ToggleContext } from "../context/ToggleContext/toggleContext";

function useUpdateCostOnToggle() {
  const { plans, setPlans } = useContext(UserSelectionContext);
  const { isChecked } = useContext(ToggleContext);

  function updateCostOnToggle() {
    const findPrice = plans.filter((item) => {
      return item.planType === plans?.planType;
    })[0]?.price;

    if (plans && isChecked) {
      const update = { ...plans, cost: findPrice?.yearly };

      setPlans(update);
    }

    if (plans && !isChecked) {
      const update = { ...plans, cost: findPrice?.monthly };

      setPlans(update);
    }
  }

  // useEffect(() => {
  //   updateCostOnToggle();
  // }, [isChecked]);
  return;
}

export default useUpdateCostOnToggle;
