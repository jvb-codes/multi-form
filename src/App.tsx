import SideBar from "./SidebarBackground/SideBar";
import Steps from "./Steps/Steps";
import SmallScreenNav from "./Navigation/SmallScreenNav";
import Form from "./Forms/Form";
import FormContextProvider from "./context/FormContext/formContext";
import { UserSelectionContextProvider } from "./context/UserSelectionContext/userSelectionContext";

function App() {
  return (
    <div className="h-screen sm:flex bg-lightGray">
      <SideBar />
      <FormContextProvider>
        <UserSelectionContextProvider>
          <Steps />
          <Form />
          <SmallScreenNav />
        </UserSelectionContextProvider>
      </FormContextProvider>
    </div>
  );
}

export default App;
