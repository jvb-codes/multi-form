import { personalInfoData } from "../../data/formData";

function PersonalInfoInputs() {
  return (
    <>
      {personalInfoData.map((item) => (
        <>
          <div key={item.id} className="flex flex-col ">
            <label className="text-denim text-[12px]">{item.label}</label>
            <input
              className="p-2 border rounded-sm border-lightGray outline-none"
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
