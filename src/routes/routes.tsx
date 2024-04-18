import DashboardLayout from "@/layout/DashboardLayout";
import MainLayout from "@/layout/MainLayout";
import AddEmployee from "@/pages/dashboard/addEmployee/AddEmployee";
import AssignedTask from "@/pages/dashboard/assignedTask/AssignedTask";
import AssignTask from "@/pages/dashboard/assignTask/AssignTask";
import CompleteTask from "@/pages/dashboard/completeTask/CompleteTask";
import Dashboard from "@/pages/dashboard/home/Dashboard";
import Profile from "@/pages/dashboard/profile/Profile";
import Settings from "@/pages/dashboard/settings/Settings";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "add-employee",
        element: <AddEmployee />,
      },
      {
        path: "assign-task",
        element: <AssignTask />,
      },
      {
        path: "complete-tasks",
        element: <CompleteTask />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "assigned-task",
        element: <AssignedTask />,
      },
    ],
  },
]);
