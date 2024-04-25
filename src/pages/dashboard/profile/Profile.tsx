import { AuthContext } from "@/contex/AuthProvider";
import { AuthContextType } from "@/helper/type";
import React, { useContext } from "react";

const Profile = () => {
  const { user } = useContext(AuthContext as React.Context<AuthContextType>);
  return (
    <div>
      <h1>{user?.displayName}</h1>
      <h2>{user?.email}</h2>
    </div>
  );
};

export default Profile;
