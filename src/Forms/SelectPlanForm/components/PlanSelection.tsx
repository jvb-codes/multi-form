import { plans } from "../data/plans";
import { useContext } from "react";
import { ToggleContext } from "../../../context/ToggleContext/toggleContext";

function PlanSelection() {
  const { isChecked } = useContext(ToggleContext);

  return (
    <div className="flex flex-col sm:flex-row  gap-4 sm:min-w-[700px] outline">
      {plans.map((item) => {
        return (
          <div
            key={item.planType}
            className="border border-coolGray hover:border-purplishBlue flex sm:flex-col gap-2 sm:gap-4 p-2 sm:p-8 rounded-lg  items-center sm:items-start sm:flex-grow  sm:flex-shrink hover:bg-veryLightGray sm:outline sm:min-h-[250px] sm:min-w-[200px]"
          >
            <div className="p-2 sm:px-0">
              <img src={item.icon} alt="plan type icon" />
            </div>
            <div>
              <p className="font-bold text-denim text-[16px]">
                {item.planType}
              </p>
              <p className="text-coolGray text-[14px]">
                {`$${
                  isChecked
                    ? item.price.yearly + "/yr"
                    : item.price.monthly + "/mo"
                }`}
              </p>
              <p className="text-[12px] text-denim">{`${
                isChecked ? "2 Months Free" : ""
              }`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PlanSelection;
