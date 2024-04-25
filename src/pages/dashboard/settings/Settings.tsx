import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contex/AuthProvider";
import { AuthContextType } from "@/helper/type";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { logOut } = useContext(AuthContext as React.Context<AuthContextType>);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate("/login");
    toast.success("Logout successfully");
  };
  return (
    <div>
      <Button
        className="bg-red-500 rounded-lg hover:bg-red-400"
        onClick={handleLogOut}
      >
        Logout
      </Button>
    </div>
  );
};

export default Settings;
