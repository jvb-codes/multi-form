import LargeScreenNav from "../../Navigation/LargeScreenNav";
import Option from "./components/Option";
import addOnsData from "./data/addOnsData";

function AddOnsForm() {
  return (
    <div className="formContainer ">
      <div>
        <div className="my-4">
          <h1 className="formHeader">Pick Add Ons</h1>
          <p className=" formInstructions">
            Add-ons help enhance your gaming experience.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {addOnsData.map((item) => {
            return (
              <Option
                id={item.id}
                type={item.type}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
      <LargeScreenNav />
    </div>
  );
}

export default AddOnsForm;
