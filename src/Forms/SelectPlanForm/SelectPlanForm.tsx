import SelectPlanFormHeader from "./components/SelectPlanFormHeader";
import PlanSelection from "./components/PlanSelection";
import MonthlyYearlyToggle from "./components/MontlyYearlyToggle";
import LargeScreenNav from "../../Navigation/LargeScreenNav";

function SelectPlanForm() {
  return (
    <div className="formContainer">
      <div className="sm:w-full">
        <SelectPlanFormHeader />
        <PlanSelection />
        <MonthlyYearlyToggle />
      </div>
      <LargeScreenNav />
    </div>
  );
}

export default SelectPlanForm;
