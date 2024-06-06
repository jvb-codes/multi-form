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
import SelectedAddOns from "./SummaryForm/SelectedAddOns";
import SelectedPlan from "./SummaryForm/SelectedPlan";

function SummaryForm() {
  const { addOns, plans } = useContext(UserSelectionContext);
  const { isChecked } = useContext(ToggleContext);

  const getTotal = () => {
    const addOnTotal = addOns.reduce((sum, item) => {
      if (item.isSelected) {
        return sum + item.price;
      }
      return sum;
    }, 0);

    const selectedPlan = plans.find((item) => item.isSelected);
    if (selectedPlan && isChecked) {
      return selectedPlan.price.yearly + addOnTotal;
    }
    if (selectedPlan && !isChecked) {
      return selectedPlan.price.monthly + addOnTotal;
    }
    return null;
  };

  const total = getTotal();

  function Total() {
    return <></>;
  }

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
          <SelectedPlan />
          <SelectedAddOns />
        </div>
        <div className="flex justify-between p-4 outline">
          <p className="formInstructions">
            Total (per {isChecked ? "year" : "month"})
          </p>
          <p className="text-purplishBlue text-[20px] font-bold">
            +${total}/{isChecked ? "yr" : "mo"}
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
