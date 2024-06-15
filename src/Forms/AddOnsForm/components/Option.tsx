import { OptionProps } from "../types/types";
import useAddOnOptions from "../../../customHooks/useAddOnOptions";
import "../css/checkbox.css";
import { useContext } from "react";
import { ToggleContext } from "../../../context/ToggleContext/toggleContext";

function Option({ id, type, description, price, isSelected }: OptionProps) {
  const [addOption] = useAddOnOptions();
  const { isChecked } = useContext(ToggleContext);

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
          <label className="cursor-pointer checkbox-container">
            <input
              onChange={() => addOption(id)}
              type="checkbox"
              checked={isSelected}
            />
            <span className="checkmark"></span>
          </label>
          <div className="flex flex-col ">
            <h1 className="font-bold text-denim text-[16px]">{type}</h1>
            <p className="text-[15px] text-coolGray">{description}</p>
          </div>
        </div>
        <p className=" text-purplishBlue">{`$${
          isChecked ? price.yearly + "/yr" : price.monthly + "/mo"
        }`}</p>
      </div>
    </div>
  );
}
export default Option;
