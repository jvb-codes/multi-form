import "../css/toggle.css";
import { useContext } from "react";
import { ToggleContext } from "../../../context/ToggleContext/toggleContext";
import useUpdateCostOnToggle from "../../../customHooks/useUpdateCostOnToggle";

function MonthlyYearlyToggle() {
  const { isChecked, setIsChecked } = useContext(ToggleContext);

  useUpdateCostOnToggle();

  function handleCheck() {
    setIsChecked((prev) => !prev);
  }

  return (
    <div className="flex justify-center gap-4 p-4 mt-4 bg-veryLightGray">
      <p className="font-bold text-coolGray ">Monthly</p>
      <label className="switch ">
        <input
          onChange={handleCheck}
          value={isChecked}
          type="checkbox"
          className="switch input"
        />
        <span className="slider"></span>
      </label>

      <p className="font-bold text-coolGray">Yearly</p>
    </div>
  );
}
export default MonthlyYearlyToggle;
