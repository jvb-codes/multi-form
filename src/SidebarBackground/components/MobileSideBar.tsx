import mobSideBar from "../../assets/images/bg-sidebar-mobile.svg";

function MobileSideBar() {
  return (
    <div className="w-full h-[20%] block sm:hidden">
      <img
        className=" object-cover object-top w-full h-full"
        src={mobSideBar}
        alt="Mobile Sidebar"
      />
    </div>
  );
}

export default MobileSideBar;
