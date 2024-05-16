import { useContext } from "react";
import PersonalInfoForm from "./PersonalInfoForm/PersonalInfoForm";
import FormContainer from "./component/FormContainer";
import { FormsContext } from "../context/FormContext/formContext";
import { SelectPlanForm } from "./SelectPlanForm/SelectPlanForm";

function Form() {
  const { currentForm } = useContext(FormsContext);

  const forms = [
    { id: 1, component: <PersonalInfoForm /> },
    { id: 2, component: <SelectPlanForm /> },
    { id: 3, component: "Form 3" },
    { id: 4, component: "Form 4" },
  ];

  return (
    <FormContainer>
      {forms.map((item) => {
        if (item.id === currentForm) {
          return item.component;
        }
        return null;
      })}
    </FormContainer>
  );
}

export default Form;
