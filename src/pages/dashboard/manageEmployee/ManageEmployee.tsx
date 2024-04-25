import AllEmployee from "./AllEmployee";
import React, { useContext } from "react";
import { AuthContext } from "@/contex/AuthProvider";
import { AuthContextType } from "@/helper/type";
import useGetSingleEmployee from "@/hooks/employee/useGetSingleEmployee";

const ManageEmployee = () => {
  const { user } = useContext(AuthContext as React.Context<AuthContextType>);
  const { sigleUserProfile } = useGetSingleEmployee(user?.email);
  console.log(sigleUserProfile);

  return (
    <div>
      <h1>Manage Employee</h1>
      <AllEmployee />
    </div>
  );
};

export default ManageEmployee;
