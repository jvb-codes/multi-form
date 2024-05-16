import Button from "../reusuables/Button";
import useFormNavigation from "../customHooks/useFormNavigation";
import { useContext } from "react";
import { FormsContext } from "../context/FormContext/formContext";

function SmallScreenNav() {
  const { currentForm, setCurrentForm } = useContext(FormsContext);
  const { handlePreviousForm } = useFormNavigation({
    currentForm,
    setCurrentForm,
  });
  return (
    <div className="bg-white absolute bottom-[0] w-full sm:hidden p-4 text-right flex justify-between items-center">
      <p onClick={handlePreviousForm} className="text-denim cursor-pointer">
        Go Back
      </p>
      <Button />
    </div>
  );
}
export default SmallScreenNav;
