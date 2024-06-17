import { useContext } from "react";
import FormWrapper from "./component/FormContainer";
import PersonalInfoForm from "./PersonalInfoForm/PersonalInfoForm";
import SelectPlanForm from "./SelectPlanForm/SelectPlanForm";
import AddOnsForm from "./AddOnsForm/AddOnsForm";
import { FormsContext } from "../context/FormContext/formContext";
import ToggleContextProvider from "../context/ToggleContext/toggleContext";
import SummaryForm from "./SummaryForm/SummaryForm";
import CheckImage from "../assets/images/icon-thank-you.svg";

function Confirmation() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center">
      <img src={CheckImage} alt="check image" />
      <h1 className="text-2xl font-bold text-denim">Thank You!</h1>
      <p className=" text-coolGray max-w-[500px]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

function Form() {
  const { currentForm } = useContext(FormsContext);

  const forms = [
    { id: 1, component: <PersonalInfoForm key={1} /> },
    { id: 2, component: <SelectPlanForm key={2} /> },
    { id: 3, component: <AddOnsForm key={3} /> },
    { id: 4, component: <SummaryForm key={4} /> },
    { id: 5, component: <Confirmation key={5} /> },
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
