import PersonalInfoHeading from "./components/PersonalInfoHeading";
import PersonalInfoInputs from "./components/PersonalInfoInputs";
import LargeScreenNav from "../../Navigation/LargeScreenNav";

function PersonalInfoForm() {
  return (
    <div className="flex flex-col gap-8">
      <PersonalInfoHeading />
      <PersonalInfoInputs />
      <LargeScreenNav />
    </div>
  );
}

export default PersonalInfoForm;
