import DashboardLayout from "@/layout/DashboardLayout";
import MainLayout from "@/layout/MainLayout";
import Login from "@/pages/auth/Login";
import AssignedTask from "@/pages/dashboard/assignedTask/AssignedTask";
import CompleteTask from "@/pages/dashboard/completeTask/CompleteTask";
import Dashboard from "@/pages/dashboard/home/Dashboard";
import ManageEmployee from "@/pages/dashboard/manageEmployee/ManageEmployee";
import Profile from "@/pages/dashboard/profile/Profile";
import Settings from "@/pages/dashboard/settings/Settings";
import { createBrowserRouter } from "react-router-dom";
import PribetRoutes from "./PrivetRoutes";
import AssignTask from "@/pages/dashboard/assignTask/AssignTask";
import AddEmployee from "@/pages/dashboard/addEmployee/AddEmployee";
import AdminRoutes from "./AdminRoutes";
import AllTask from "@/pages/dashboard/completeTask/AllTask";
import TaskDetails from "@/pages/dashboard/completeTask/TaskDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/dashboard",
    element: (
      <PribetRoutes>
        <DashboardLayout />
      </PribetRoutes>
    ),
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
        path: "assign-task",
        element: (
          <AdminRoutes>
            <AssignTask />
          </AdminRoutes>
        ),
      },
      {
        path: "complete-tasks",
        element: (
          <AdminRoutes>
            <CompleteTask />
          </AdminRoutes>
        ),
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "assigned-task",
        element: <AssignedTask />,
      },
      {
        path: "manage-employee",
        element: <ManageEmployee />,
      },
      {
        path: "all-task",
        element: <AllTask />,
      },
      {
        path: "task-details/:id",
        element: <TaskDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <AddEmployee />,
  },
]);
