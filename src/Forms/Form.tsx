import { useContext } from "react";
import FormWrapper from "./component/FormContainer";
import PersonalInfoForm from "./PersonalInfoForm/PersonalInfoForm";
import SelectPlanForm from "./SelectPlanForm/SelectPlanForm";
import AddOnsForm from "./AddOnsForm/AddOnsForm";
import { FormsContext } from "../context/FormContext/formContext";
import ToggleContextProvider, {
  ToggleContext,
} from "../context/ToggleContext/toggleContext";
import LargeScreenNav from "../Navigation/LargeScreenNav";

import { UserSelectionContext } from "../context/UserSelectionContext/userSelectionContext";

function SummaryForm() {
  const { selectedPlan, selectedAddOns } = useContext(UserSelectionContext);
  const { isChecked } = useContext(ToggleContext);

  const addOnTotal = selectedAddOns
    .map((item) => {
      return item.addOnPrice;
    })
    .reduce((accumulator, currentVal) => accumulator + currentVal, 0);

  const addOns = selectedAddOns.map((item) => {
    return (
      <div className="flex justify-between">
        <p className="formInstructions">{item.addOnType}</p>
        <p className=" text-denim">
          +${item.addOnPrice}/{isChecked ? "yr" : "mo"}
        </p>
      </div>
    );
  });
  return (
    <div className=" formContainer">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="formHeader">Finishing Up</h1>
          <p className="formInstructions">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-veryLightGray">
          <div className="">
            <div className="flex justify-between p-4 ">
              <div className="">
                <p className="font-bold text-denim">
                  {selectedPlan?.planType} ({isChecked ? "Yearly" : "Monthly"})
                </p>
                <p className="underline formInstructions">Change</p>
              </div>
              <p className="font-bold text-denim">
                ${selectedPlan?.cost}/{isChecked ? "yr" : "mo"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4">{addOns}</div>
        </div>
        <div className="flex justify-between p-4">
          <p className="formInstructions">
            Total (per {isChecked ? "year" : "month"})
          </p>
          <p className="text-purplishBlue text-[20px] font-bold">
            ${selectedPlan?.cost + addOnTotal}/{isChecked ? "yr" : "mo"}
          </p>
        </div>
      </div>
      <LargeScreenNav />
    </div>
  );
}

function Form() {
  const { currentForm } = useContext(FormsContext);

  const forms = [
    { id: 1, component: <PersonalInfoForm /> },
    { id: 2, component: <SelectPlanForm /> },
    { id: 3, component: <AddOnsForm /> },
    { id: 4, component: <SummaryForm /> },
  ];

  return (
    <ToggleContextProvider>
      <FormWrapper>
        {forms.map((item) => {
          if (item.id === currentForm) {
            return item.component;
          }
          return null;
        })}
      </FormWrapper>
    </ToggleContextProvider>
  );
}

export default Form;
