import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../axios/useAxios";

const useGetSingleTask = (id: string | undefined | null) => {
  const { axiosInstance } = useAxios();
  const {
    data: singleTask,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["singleTask", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/task/find-single-task/${id}`);
      return data;
    },
  });

  return { singleTask, isLoading, refetch };
};

export default useGetSingleTask;
