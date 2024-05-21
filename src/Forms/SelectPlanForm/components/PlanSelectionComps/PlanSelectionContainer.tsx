import { PropsWithChildren } from "react";
function PlanSelectionContainer({ children }: PropsWithChildren) {
  return (
    <div className="border border-coolGray hover:border-purplishBlue flex items-center h-[75px] hover:bg-veryLightGray rounded-lg lg:flex-col lg:justify-around gap-2 lg:gap-4 p-2 lg:p-8 lg:items-start lg:flex-grow lg:min-h-[250px] lg:min-w-[200px] sm:min-h-[100px]">
      {children}
    </div>
  );
}
export default PlanSelectionContainer;
