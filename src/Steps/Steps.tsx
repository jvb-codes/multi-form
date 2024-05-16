import StepsContent from "./components/StepsContent";

function Steps() {
  return (
    <div className="absolute top-[5%] sm:top-[22%] left-[50%] sm:left-[115px] flex sm:flex-col sm:gap-8 gap-4 transform -translate-x-[50%] -translate-y-1/2 text-white  ">
      <StepsContent />
    </div>
  );
}

export default Steps;
