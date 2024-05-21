import { useContext } from "react";
import { ToggleContext } from "../../../../context/ToggleContext/toggleContext";

type PlanSelectionProps = {
  item: {
    planType: string;
    price: {
      monthly: number;
      yearly: number;
    };
    icon: string;
  };
};

function PlanSelectionContent({ item }: PlanSelectionProps) {
  const { isChecked } = useContext(ToggleContext);
  return (
    <div className="lg:w-[100px] lg:h-[65px]">
      <p className="font-bold text-denim text-[16px]">{item.planType}</p>
      <p className="text-coolGray text-[14px]">
        {`$${
          isChecked ? item.price.yearly + "/yr" : item.price.monthly + "/mo"
        }`}
      </p>
      <p className="text-[12px] text-denim">{`${
        isChecked ? "2 Months Free" : ""
      }`}</p>
    </div>
  );
}
export default PlanSelectionContent;
