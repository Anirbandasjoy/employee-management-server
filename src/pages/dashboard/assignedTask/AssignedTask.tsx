/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { TbDetails } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AuthContextType, DateTimeFormatOptions } from "@/helper/type";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import React, { useContext } from "react";
import { AuthContext } from "@/contex/AuthProvider";
import useGetSingleEmployee from "@/hooks/employee/useGetSingleEmployee";
import useGetTaskEmployeeId from "@/hooks/task/useGetTaskEmployeeId";
import { useAxios } from "@/hooks/axios/useAxios";
import toast from "react-hot-toast";

const AssignedTask = () => {
  const { user } = useContext(AuthContext as React.Context<AuthContextType>);
  const { sigleUserProfile } = useGetSingleEmployee(user?.email);
  const { employeeTaskData, refetch } = useGetTaskEmployeeId(
    sigleUserProfile?.id
  );
  const { axiosInstance } = useAxios();
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "";

    const options: DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };
  const handleUpdateStatus = async (id: string) => {
    try {
      const toastId = toast.loading("Updateting...");
      const { data } = await axiosInstance.put(`/task/update-status/${id}`, {
        status: "completed",
      });
      console.log(data);
      toast.success("Updated", { id: toastId });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sm:h-[calc(100vh-80px)]   h-[calc(100vh-170px)] overflow-auto ">
      <div className=" text-right">
        <Link to="/dashboard/assign-task">
          <Button className="my-2 rounded-sm text-xs bg-green-400 text-gray-700 hover:bg-green-500">
            Assign task
          </Button>
        </Link>
      </div>
      <Table className="z-10 ">
        {/* <TableCaption>A list of your Pending News.</TableCaption> */}
        <TableHeader className="bg-red-300 ">
          <TableRow>
            <TableHead>title</TableHead>
            <TableHead>description</TableHead>
            <TableHead>deadline</TableHead>
            <TableHead>priority</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {employeeTaskData &&
            employeeTaskData?.map((task: any) => {
              return (
                <TableRow key={task?.id}>
                  <TableCell className="text-black  cursor-pointer">
                    <p>{task?.title?.slice(0, 10)}...</p>
                  </TableCell>
                  <TableCell className="text-black  cursor-pointer">
                    <p>{task?.description?.slice(0, 10)}...</p>
                  </TableCell>
                  <TableCell className="text-black  cursor-pointer">
                    <p>{formatDate(task?.deadline)}</p>
                  </TableCell>
                  <TableCell className="text-black  cursor-pointer">
                    <p>{task?.priority}</p>
                  </TableCell>
                  <TableCell className="text-black  cursor-pointer">
                    <p>{task?.status}</p>
                  </TableCell>

                  <TableCell className="text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="bg-blue-400 dark:text-white text-gray-900 text-sm px-3 py-1 rounded-sm font-normal">
                        <BsThreeDots />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {task?.status === "pending" && (
                          <DropdownMenuItem>
                            <div
                              className="flex gap-1 items-center cursor-pointer"
                              onClick={() => handleUpdateStatus(task?.id)}
                            >
                              <IoMdCheckmarkCircleOutline className="text-[16px]" />
                              Completed
                            </div>
                          </DropdownMenuItem>
                        )}

                        <DropdownMenuItem>
                          <Link
                            to={`/dashboard/task-details/${task?.id}`}
                            className="flex gap-1 items-center cursor-pointer"
                          >
                            <TbDetails className="text-[16px]" />
                            Details
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default AssignedTask;
