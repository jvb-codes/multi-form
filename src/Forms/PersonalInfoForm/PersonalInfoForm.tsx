import PersonalInfoHeading from "./components/PersonalInfoHeading";
import PersonalInfoInputs from "./components/PersonalInfoInputs";
import LargeScreenNav from "../../Navigation/LargeScreenNav";

function PersonalInfoForm() {
  return (
    <div className="formContainer">
      <div className="sm:w-full">
        <PersonalInfoHeading />
        <PersonalInfoInputs />
      </div>
      <LargeScreenNav />
    </div>
  );
}

export default PersonalInfoForm;
