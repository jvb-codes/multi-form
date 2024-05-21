import { personalInfoData } from "../../data/formData";

function PersonalInfoInputs() {
  return (
    <>
      {personalInfoData.map((item) => (
        <>
          <div key={item.id} className="flex flex-col mt-7 ">
            <label className="text-denim text-[12px] font-bold">
              {item.label}
            </label>
            <input
              className="p-2 border rounded-sm outline-none border-lightGray "
              placeholder={item.placeholder}
              type={item.type}
            />
          </div>
        </>
      ))}
    </>
  );
}

export default PersonalInfoInputs;
