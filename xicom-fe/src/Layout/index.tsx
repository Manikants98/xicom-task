import Header from "Shared/Header";
import Sidebar from "Shared/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="p-1 flex bg-gray-200 gap-1 w-screen h-screen">
      <Sidebar />
      <div className="flex flex-col h-full gap-1">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
