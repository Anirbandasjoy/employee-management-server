import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../axios/useAxios";

const useGetSingleEmployee = (email: string | undefined | null) => {
  const { axiosInstance } = useAxios();
  const {
    data: sigleUserProfile,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["singleEmployee", email],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/em/single-employee/${email}`);
      return data;
    },
  });

  return { sigleUserProfile, isLoading, refetch };
};

export default useGetSingleEmployee;
