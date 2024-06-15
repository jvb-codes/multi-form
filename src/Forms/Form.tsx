import { useContext } from "react";
import FormWrapper from "./component/FormContainer";
import PersonalInfoForm from "./PersonalInfoForm/PersonalInfoForm";
import SelectPlanForm from "./SelectPlanForm/SelectPlanForm";
import AddOnsForm from "./AddOnsForm/AddOnsForm";
import { FormsContext } from "../context/FormContext/formContext";
import ToggleContextProvider from "../context/ToggleContext/toggleContext";
import SummaryForm from "./SummaryForm/SummarForm";

function Form() {
  const { currentForm } = useContext(FormsContext);

  const forms = [
    { id: 1, component: <PersonalInfoForm key={1} /> },
    { id: 2, component: <SelectPlanForm key={2} /> },
    { id: 3, component: <AddOnsForm key={3} /> },
    { id: 4, component: <SummaryForm key={4} /> },
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
