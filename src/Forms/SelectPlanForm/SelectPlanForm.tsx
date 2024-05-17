import SelectPlanFormHeader from "./components/SelectPlanFormHeader";
import PlanSelection from "./components/PlanSelection";
import MonthlyYearlyToggle from "./components/MontlyYearlyToggle";
import LargeScreenNav from "../../Navigation/LargeScreenNav";

export function SelectPlanForm() {
  return (
    <div className="flex flex-col ">
      <div className="sm:flex sm:flex-col sm:gap-10 outline sm:min-w-[700px] ">
        <SelectPlanFormHeader />
        <PlanSelection />
        <MonthlyYearlyToggle />
        <LargeScreenNav />
      </div>
    </div>
  );
}
