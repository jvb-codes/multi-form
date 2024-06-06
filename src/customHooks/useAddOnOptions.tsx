import { useContext } from "react";
import { UserSelectionContext } from "../context/UserSelectionContext/userSelectionContext";

function useAddOnOptions() {
  const { addOns, setAddOns } = useContext(UserSelectionContext);

  function addOption(id: number) {
    const update = addOns.map((item) => {
      if (id === item.id) {
        return { ...item, isSelected: true };
      }
      return item;
    });

    setAddOns(update);
  }

  return [addOption];
}

export default useAddOnOptions;
