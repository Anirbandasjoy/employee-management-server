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

const AddEmployee = () => {
  return (
    <div className="">
      <Card className="w-[550px] bg-gray-100">
        <CardHeader>
          <CardTitle>Added New Employee</CardTitle>
          <CardDescription>
            Added a new employed fill up the form
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter emplyee name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter emplyee email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter emplyee phone number" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Enter emplyee password" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Enter emplyee address" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="role">Designation</Label>
                <Select>
                  <SelectTrigger id="designation">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="frontendDeveloper">
                      Forntend Developer
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
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="employee">Employee</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to="/dashboard">
            <Button variant="outline" className="text-xs">
              Back to Dasboard
            </Button>
          </Link>
          <Button className="bg-emerald-300 text-[13px] text-gray-600 hover:bg-emerald-300">
            Save
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddEmployee;
