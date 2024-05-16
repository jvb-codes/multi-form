import { plans } from "../data/plans";

function PlanSelection() {
  return (
    <div className="flex flex-col sm:flex-row  gap-4 sm:w-full">
      {plans.map((item) => {
        return (
          <div
            key={item.planType}
            className="border border-coolGray hover:border-purplishBlue flex sm:flex-col gap-2 sm:gap-4 p-2 sm:p-8 rounded-lg  items-center sm:items-start sm:flex-grow  sm:flex-shrink hover:bg-veryLightGray "
          >
            <div className="p-2 sm:px-0">
              <img src={item.icon} alt="plan type icon" />
            </div>
            <div>
              <p className="font-bold text-denim text-[16px]">
                {item.planType}
              </p>
              <p className="text-coolGray text-[14px]">
                ${item.price.monthly}/mo
              </p>
              <p className="text-[12px] text-denim">2 Months Free</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PlanSelection;
