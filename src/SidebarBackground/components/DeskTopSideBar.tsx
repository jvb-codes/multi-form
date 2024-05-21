import deskSideBar from "../../assets/images/bg-sidebar-desktop.svg";

function DeskTopSideBar() {
  return (
    <div className="hidden sm:block sm:min-w-[275px] ">
      <img
        className=" object-cover w-full h-full"
        src={deskSideBar}
        alt="Desktop Sidebar"
      />
    </div>
  );
}

export default DeskTopSideBar;
