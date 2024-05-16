import deskSideBar from "../../assets/images/bg-sidebar-desktop.svg";

function DeskTopSideBar() {
  return (
    <div className="h-screen hidden sm:block sm:min-w-[250px] ">
      <img
        className=" object-cover w-full h-full"
        src={deskSideBar}
        alt="Desktop Sidebar"
      />
    </div>
  );
}

export default DeskTopSideBar;
