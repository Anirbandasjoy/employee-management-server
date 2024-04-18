import Sidebar from "@/components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
