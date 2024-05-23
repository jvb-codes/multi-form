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
    <div
      className={`bg-white absolute bottom-[0] w-full sm:hidden p-4 text-right flex items-center ${
        currentForm === 1 ? "justify-end" : "justify-between"
      }`}
    >
      {currentForm !== 1 && (
        <p onClick={handlePreviousForm} className="cursor-pointer text-denim">
          Go Back
        </p>
      )}
      <Button />
    </div>
  );
}
export default SmallScreenNav;
