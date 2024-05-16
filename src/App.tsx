import SideBar from "./SidebarBackground/SideBar";
import Steps from "./Steps/Steps";
import SmallScreenNav from "./Navigation/SmallScreenNav";
import Form from "./Forms/Form";
import FormContextProvider from "./context/FormContext/formContext";

function App() {
  return (
    <div className=" h-screen sm:flex bg-lightGray">
      <SideBar />
      <FormContextProvider>
        <Steps />
        <Form />
        <SmallScreenNav />
      </FormContextProvider>
    </div>
  );
}

export default App;
