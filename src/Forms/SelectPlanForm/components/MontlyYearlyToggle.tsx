function MonthlyYearlyToggle() {
  return (
    <div className="flex justify-center gap-4 mt-4 bg-veryLightGray p-4">
      <p className="font-bold text-coolGray">Monthly</p>
      <label className=" relative inline-block w-[60px] h-[34px]">
        <input className=" opacity-0 w-0 h-0" type="checkbox" />
        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-slate-700 transition-[4s]   before:absolute content-none"></span>
      </label>

      <p className="font-bold text-coolGray">Yearly</p>
    </div>
  );
}
export default MonthlyYearlyToggle;
