import { useContext } from "react";
import PersonalInfoForm from "./PersonalInfoForm/PersonalInfoForm";
import FormWrapper from "./component/FormContainer";
import { FormsContext } from "../context/FormContext/formContext";
import { SelectPlanForm } from "./SelectPlanForm/SelectPlanForm";
import ToggleContextProvider from "../context/ToggleContext/toggleContext";

function Form() {
  const { currentForm } = useContext(FormsContext);

  const forms = [
    { id: 1, component: <PersonalInfoForm /> },
    { id: 2, component: <SelectPlanForm /> },
    { id: 3, component: "Form 3" },
    { id: 4, component: "Form 4" },
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
