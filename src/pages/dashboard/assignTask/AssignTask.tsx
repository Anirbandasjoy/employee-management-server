/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useEmployee from "@/hooks/employee/useEmployee";
import { useAxios } from "@/hooks/axios/useAxios";
import toast from "react-hot-toast";

const AssignTask = () => {
  const { axiosInstance } = useAxios();
  const { employeeData } = useEmployee();
  console.log(employeeData);
  const [priority, setPriority] = useState("");
  const [assignedEmployee, setassignedEmployee] = useState("");
  const [date, setDate] = useState<Date>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const description = formData.get("description");
    const taskInfo = {
      title,
      description,
      deadline: date,
      priority,
      assigned_employee_id: assignedEmployee,
      status: "pending",
    };
    try {
      const toastId = toast.loading("Assigning task...");
      const { data } = await axiosInstance.post("/task/create", taskInfo);
      console.log(data);
      toast.success("Assigned task successfully", { id: toastId });
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <Card className="w-[700px] bg-gray-100">
        <CardHeader>
          <CardTitle>Assigned a new Task</CardTitle>
          <CardDescription>
            Added a new employee, fill up the form
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Title</Label>
                <Input
                  type="text"
                  required
                  id="title"
                  name="title"
                  placeholder="title"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Input
                  required
                  type="text"
                  id="description"
                  name="description"
                  placeholder="description"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Deadline</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div
                className="flex flex-col space-y-1.5"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPriority(e.target.value)
                }
              >
                <Label htmlFor="designation">Priority</Label>
                <Select required>
                  <SelectTrigger id="priority">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div
                className="flex flex-col space-y-1.5"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setassignedEmployee(e.target.value)
                }
              >
                <Label htmlFor="role">Assigned Employee</Label>
                <Select required>
                  <SelectTrigger id="assigned-employee">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {employeeData?.map((employee: any) => {
                      return (
                        <SelectItem key={employee?.id} value={employee?.id}>
                          {employee?.role === "user" && <> {employee?.name}</>}
                        </SelectItem>
                      );
                    })}

                    {/* <SelectItem value="anirban">Anirban</SelectItem> */}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <CardFooter className="flex justify-between mt-8 py-0 px-0">
              <Link to="/dashboard/manage-employee">
                <Button variant="outline" className="text-xs">
                  Manage Employee
                </Button>
              </Link>
              <button
                type="submit"
                className="bg-emerald-400 py-2 px-4 text-[13px] text-gray-700 rounded-sm hover:bg-emerald-300"
              >
                Send
              </button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssignTask;
