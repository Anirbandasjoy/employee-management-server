import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../axios/useAxios";

const useGetAllTask = () => {
  const { axiosInstance } = useAxios();
  const {
    data: allTask,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allTask"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/task/find");
      return data;
    },
  });

  return { allTask, isLoading, refetch };
};

export default useGetAllTask;
