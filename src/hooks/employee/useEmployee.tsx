import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../axios/useAxios";

const useEmployee = () => {
  const { axiosInstance } = useAxios();
  const {
    data: employeeData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["employee"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/em/getAll-employee");
      return data;
    },
  });

  return { employeeData, isLoading, refetch };
};

export default useEmployee;
