import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../axios/useAxios";

const useGetTaskEmployeeId = (id: string | undefined | null) => {
  const { axiosInstance } = useAxios();
  const {
    data: employeeTaskData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["employeeTaskData", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/task/findBy-employeeId/${id}`);
      return data;
    },
  });

  return { employeeTaskData, isLoading, refetch };
};

export default useGetTaskEmployeeId;
