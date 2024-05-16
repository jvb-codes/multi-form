import SelectPlanFormHeader from "./components/SelectPlanFormHeader";
import PlanSelection from "./components/PlanSelection";
import MonthlyYearlyToggle from "./components/MontlyYearlyToggle";
import LargeScreenNav from "../../Navigation/LargeScreenNav";

export function SelectPlanForm() {
  return (
    <div className="flex flex-col sm:h-[85vh] sm:w-[50%] justify-between">
      <div className="sm:flex sm:flex-col sm:gap-10 ">
        <SelectPlanFormHeader />
        <PlanSelection />
        <MonthlyYearlyToggle />
      </div>
      <LargeScreenNav />
    </div>
  );
}
