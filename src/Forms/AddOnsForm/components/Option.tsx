import { OptionProps } from "../types/types";
import { useContext, useState } from "react";
import useAddOnOptions from "../../../customHooks/useAddOnOptions";
import { UserSelectionContext } from "../../../context/UserSelectionContext/userSelectionContext";
import "../css/checkbox.css";

function Option({ id, type, description, price }: OptionProps) {
  const { selectedAddOns, setSelectedAddOns } =
    useContext(UserSelectionContext);

  const [isChecked, setIsChecked] = useState(false);

  const [addOption] = useAddOnOptions({ selectedAddOns, setSelectedAddOns });

  return (
    <div className="flex flex-col gap-8">
      <div
        className={`flex justify-between px-6 py-4 border rounded-lg ${
          isChecked
            ? "border-purplishBlue bg-veryLightGray "
            : "border-coolGray"
        } `}
      >
        <div className="flex gap-8">
          <label className="checkbox-container">
            <input
              onChange={(ev) =>
                addOption({ ev, id, type, price, setIsChecked })
              }
              type="checkbox"
            />
            <span className="checkmark"></span>
          </label>
          <div className="flex flex-col ">
            <h1 className="font-bold text-denim text-[16px]">{type}</h1>
            <p className="text-[15px] text-coolGray">{description}</p>
          </div>
        </div>
        <p className=" text-purplishBlue">+{price}/mo</p>
      </div>
    </div>
  );
}
export default Option;
