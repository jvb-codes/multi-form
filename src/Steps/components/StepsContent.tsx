import stepsData from "../data/StepsData";
import { useContext } from "react";
import { FormsContext } from "../../context/FormContext/formContext";

function StepsContent() {
  const { currentForm } = useContext(FormsContext);

  return (
    <>
      {stepsData.map((item, index) => {
        return (
          <div
            key={item.heading}
            className="flex gap-2 justify-start items-center"
          >
            <div
              className={`border-[2px] rounded-full w-[50px] h-[50px] flex justify-center items-center ${
                currentForm === index + 1
                  ? "bg-lightBlue text-denim font-bold border-none"
                  : null
              }`}
            >
              <div>{index + 1}</div>
            </div>
            <div className="hidden sm:flex sm:flex-col ">
              <p className="sm:text-lightBlue sm:text-[12px]">
                {item.heading.toUpperCase()}
              </p>
              <p className="text-[14px] font-bold">{item.step.toUpperCase()}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default StepsContent;
