import SummaryFormHeader from "./components/SummarFormHeader";
import SelectedPlan from "./components/SelectedPlan";
import SelectedAddOns from "./components/SelectedAddOns";
import Total from "./components/Total";
import LargeScreenNav from "../../Navigation/LargeScreenNav";

function SummaryForm() {
  return (
    <div className=" formContainer">
      <div className="flex flex-col gap-8">
        <SummaryFormHeader />
        <div className="flex flex-col gap-4 bg-veryLightGray">
          <SelectedPlan />
          <SelectedAddOns />
        </div>
        <Total />
      </div>
      <LargeScreenNav />
    </div>
  );
}
export default SummaryForm;
