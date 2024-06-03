import { OptionProps } from "../types/types";
import { useContext } from "react";
import useAddOnOptions from "../../../customHooks/useAddOnOptions";
import { UserSelectionContext } from "../../../context/UserSelectionContext/userSelectionContext";
import "../css/checkbox.css";

function Option({ id, type, description, price, isSelected }: OptionProps) {
  const { selectedAddOns, setSelectedAddOns } =
    useContext(UserSelectionContext);

  const [addOption] = useAddOnOptions({ selectedAddOns, setSelectedAddOns });

  console.log(isSelected);
  return (
    <div className="flex flex-col gap-8">
      <div
        className={`flex justify-between px-6 py-4 border rounded-lg ${
          isSelected
            ? "border-purplishBlue bg-veryLightGray "
            : "border-coolGray"
        } `}
      >
        <div className="flex gap-8">
          <label className="checkbox-container">
            <input
              onChange={(ev) => addOption({ ev, id, type, price })}
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
