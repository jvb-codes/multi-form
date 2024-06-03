import { UseAddOnOptionsArgs, AddOptionArgs } from "./types/types";
import {
  changeInputBackGround,
  updateSelectedAddOns,
} from "../Forms/AddOnsForm/utils/addOptionsUtils";

function useAddOnOptions({
  selectedAddOns,
  setSelectedAddOns,
}: UseAddOnOptionsArgs) {
  function addOption({ ev, id, type, price }: AddOptionArgs) {
    //change Input BG

    changeInputBackGround({
      ev,
      id,
      selectedAddOns,
      setSelectedAddOns,
    });

    //update add on state
    updateSelectedAddOns({
      ev,
      selectedAddOns,
      id,
      type,
      price,
      setSelectedAddOns,
    });
  }

  return [addOption];
}

export default useAddOnOptions;
