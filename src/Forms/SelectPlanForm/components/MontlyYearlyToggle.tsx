import "../css/toggle.css";
import { useContext } from "react";
import { ToggleContext } from "../../../context/ToggleContext/toggleContext";

function MonthlyYearlyToggle() {
  const { isChecked, setIsChecked } = useContext(ToggleContext);

  function handleCheck() {
    setIsChecked((prev) => !prev);
  }

  return (
    <div className="flex justify-center gap-4 mt-4 bg-veryLightGray p-4">
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
