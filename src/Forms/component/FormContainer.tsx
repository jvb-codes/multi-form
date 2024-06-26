import { PropsWithChildren } from "react";

function FormContainer({ children }: PropsWithChildren) {
  return (
    <div className="rounded-md bg-white gap-8 p-8 w-[365px] min-h-[475px] top-[375px] left-[50%] transform -translate-x-1/2 -translate-y-1/2  absolute sm:top-[0] sm:left-[0] sm:relative sm:transform-none sm:flex sm:w-full sm:justify-center sm:py-0">
      {children}
    </div>
  );
}

export default FormContainer;
