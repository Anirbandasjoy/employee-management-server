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
import useEmployee from "@/hooks/employee/useEmployee";
import { AiTwotoneDelete } from "react-icons/ai";
import { GrUserAdmin } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AllEmployee = () => {
  const { employeeData } = useEmployee();

  return (
    <div className="sm:h-[calc(100vh-120px)] h-[calc(100vh-170px)] overflow-auto ">
      <div className=" text-right">
        <Link to="/dashboard/add-employee">
          <Button className="my-2 rounded-sm text-xs bg-green-400 text-gray-700 hover:bg-green-500">
            Add Employee
          </Button>
        </Link>
      </div>
      <Table className="z-10 ">
        {/* <TableCaption>A list of your Pending News.</TableCaption> */}
        <TableHeader className="bg-green-200 dark:bg-gray-800">
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Designation</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {employeeData?.map((em: any) => {
            return (
              <TableRow>
                <TableCell className="text-black hover:underline cursor-pointer">
                  <p>{em?.name}</p>
                </TableCell>
                <TableCell className="text-black hover:underline cursor-pointer">
                  <p>{em?.email}</p>
                </TableCell>
                <TableCell className="text-black hover:underline cursor-pointer">
                  <p>{em?.phone}</p>
                </TableCell>
                <TableCell className="text-black hover:underline cursor-pointer">
                  <p>{em?.address}</p>
                </TableCell>
                <TableCell className="text-black hover:underline cursor-pointer">
                  <p>{em?.designation}</p>
                </TableCell>
                <TableCell className="text-black hover:underline cursor-pointer">
                  <p>{em?.role}</p>
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
                          <GrUserAdmin className="text-[19px]" />
                          Create Admin
                        </div>
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

export default AllEmployee;
