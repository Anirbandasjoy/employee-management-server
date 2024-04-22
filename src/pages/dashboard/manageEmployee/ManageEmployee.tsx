import useEmployee from "@/hooks/employee/useEmployee";
import AllEmployee from "./AllEmployee";

const ManageEmployee = () => {
  const { employeeData } = useEmployee();
  console.log(employeeData);
  return (
    <div>
      <h1>Manage Employee</h1>
      <AllEmployee />
    </div>
  );
};

export default ManageEmployee;
