import React, { useContext, useState } from "react";
import { FcCameraAddon, FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import {
  MdOutlineDashboardCustomize,
  MdOutlineSelectAll,
} from "react-icons/md";
import { IoAddCircleOutline, IoCloudDoneOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

import { CgAssign, CgProfile } from "react-icons/cg";
import { AuthContext } from "@/contex/AuthProvider";
import { AuthContextType } from "@/helper/type";
import useGetSingleEmployee from "@/hooks/employee/useGetSingleEmployee";
const Sidebar = () => {
  const { user } = useContext(AuthContext as React.Context<AuthContextType>);
  const { sigleUserProfile } = useGetSingleEmployee(user?.email);
  //   const [toggle, setToggle] = useState(false)
  const [isActive, setActive] = useState(false);

  //   For guest/host menu item toggle button
  //   const toggleHandler = event => {
  //     setToggle(event.target.checked)
  //   }
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className=" text-gray-800 flex justify-between md:hidden ">
        <div>
          <div className="block cursor-pointer p-4 font-bold dark:text-gray-300">
            Teamtreacker
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none dark:text-gray-300 focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col bg-gray-50 justify-between dark:bg-gray-900 overflow-x-hidden border-r-2 dark:border-gray-800  w-64 space-y-6 pl-2 pt-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full  md:flex py-3 rounded-l-lg  items-center  bg-success mx-auto bg-emerald-500">
              <Link to="/" className="text-xl pl-4 font-semibold text-gray-100">
                Teamtreacker
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6 ">
            {/* If a user is host */}
            {/* <ToggleBtn toggleHandler={toggleHandler} /> */}
            <nav>
              <MenuItem
                icon={MdOutlineDashboardCustomize}
                label="Dashboard"
                address="/dashboard"
                count={undefined}
              />
              {sigleUserProfile?.role === "admin" && (
                <>
                  <MenuItem
                    icon={FcCameraAddon}
                    label="Manage Emplyee"
                    address="/dashboard/manage-employee"
                    count={undefined}
                  />
                  <MenuItem
                    icon={IoAddCircleOutline}
                    label="Assign Task"
                    address="/dashboard/assign-task"
                    count={undefined}
                  />
                  <MenuItem
                    icon={IoCloudDoneOutline}
                    label="Complete List"
                    address="/dashboard/complete-tasks"
                    count={5}
                  />
                  <MenuItem
                    icon={MdOutlineSelectAll}
                    label="All task"
                    address="/dashboard/all-task"
                    count={5}
                  />
                </>
              )}

              {sigleUserProfile?.role === "user" && (
                <MenuItem
                  icon={CgAssign}
                  label="Assigned Task"
                  address="/dashboard/assigned-task"
                  count={4}
                />
              )}
              <MenuItem
                icon={CgProfile}
                label="Profile"
                address="/dashboard/profile"
                count={undefined}
              />

              {/* Menu Items */}
            </nav>
          </div>
        </div>

        <div>
          <div className="dark:h-[3px] h-[2px] w-full bg-gray-200 dark:bg-gray-800"></div>
          <MenuItem
            icon={FcSettings}
            label="Settings"
            address="/dashboard/settings"
            count={undefined}
          />
          {/* <div className="">
            <MenuItem
              icon={TbHelpHexagon}
              label="Help"
              address="/dashboard/help"
              count={undefined}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
