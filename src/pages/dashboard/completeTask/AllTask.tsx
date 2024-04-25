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

import { AiTwotoneDelete } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useGetAllTask from "@/hooks/task/useGetAllTask";
import { FaRegEdit } from "react-icons/fa";
import { DateTimeFormatOptions } from "@/helper/type";

const AllTask = () => {
  const { allTask } = useGetAllTask();
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
  return (
    <div className="sm:h-[calc(100vh-80px)] h-[calc(100vh-170px)] overflow-auto ">
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
          {allTask &&
            allTask?.map((task: any) => {
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
                        <DropdownMenuItem>
                          <div className="flex gap-1 items-center cursor-pointer">
                            <AiTwotoneDelete className="text-[19px]" />
                            Delete
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <div className="flex gap-1 items-center cursor-pointer">
                            <FaRegEdit className="text-[16px]" />
                            Edit
                          </div>
                        </DropdownMenuItem>
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

export default AllTask;
