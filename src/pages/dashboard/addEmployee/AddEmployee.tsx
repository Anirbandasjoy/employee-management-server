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
import { ChangeEvent, useContext, useState } from "react";
import { useAxios } from "@/hooks/axios/useAxios";
import toast from "react-hot-toast";
import { AuthContextType } from "@/helper/type";
import { AuthContext } from "@/contex/AuthProvider";
import { updateProfile } from "firebase/auth";

const AddEmployee = () => {
  const { axiosInstance } = useAxios();
  const [role, setRole] = useState("");
  const [designation, setDesignation] = useState("");
  const { registerUser } = useContext(
    AuthContext as React.Context<AuthContextType>
  );
  const [registerErr, setRegisterErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name") as string; // Convert to string
    const email = (formData.get("email") as string) || "";
    const phone = formData.get("phone") as string; // Convert to string
    const password = (formData.get("password") as string) || "";
    const address = formData.get("address") as string; // Convert to string
    setRegisterErr(null);
    setLoading(true);
    const toastId = toast.loading("Create a new employee...");
    const user = await registerUser(email, password);
    await updateProfile(user?.user, {
      displayName: name,
    });
    const employeeInfo = {
      name,
      email,
      phone,
      password,
      address,
      role,
      designation,
    };
    console.log(employeeInfo);

    try {
      const res = await axiosInstance.post("/em/create", employeeInfo);
      console.log(res.data);
      // Reset form after successful submission
      toast.success("Created a new employee", { id: toastId });
      e.target.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <Card className="w-[550px] bg-gray-100">
        <CardHeader>
          <CardTitle>Added New Employee</CardTitle>
          <CardDescription>
            Added a new employee, fill up the form
          </CardDescription>
        </CardHeader>
        <CardContent>
          {registerErr && (
            <div className="py-3 bg-white dark:bg-gray-800 text-center px-3  border-red-600 border dark:text-red-500 text-red-500   dark:border-red-600  outline-red-500 text-sm rounded-md">
              {registerErr}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  required
                  id="name"
                  name="name"
                  placeholder="Enter employee name"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter employee email"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  required
                  id="phone"
                  type="number"
                  name="phone"
                  placeholder="Enter employee phone number"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  required
                  id="password"
                  name="password"
                  placeholder="Enter employee password"
                  pattern=".{6,}"
                  title="Password must be at least 6 characters long"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="address">Address</Label>
                <Input
                  required
                  id="address"
                  name="address"
                  placeholder="Enter employee address"
                />
              </div>
              <div
                className="flex flex-col space-y-1.5"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setDesignation(e.target.value)
                }
              >
                <Label htmlFor="designation">Designation</Label>
                <Select required>
                  <SelectTrigger id="designation">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="frontendDeveloper">
                      Frontend Developer
                    </SelectItem>
                    <SelectItem value="backendDeveloper">
                      Backend Developer
                    </SelectItem>
                    <SelectItem value="fullstackDeveloper">
                      FullStack Developer
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div
                className="flex flex-col space-y-1.5"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setRole(e.target.value)
                }
              >
                <Label htmlFor="role">Role</Label>
                <Select required>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">Employee</SelectItem>
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
                {loading ? "Loading" : "Save"}
              </button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddEmployee;
