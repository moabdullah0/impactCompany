import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import HallData from "../data/Hall/HallData";
import { Hall } from "../entities/Hall";
import ApiClient from "../Services/api-client";

const apiClient = new ApiClient<Hall>("/hall");
export const FetchHall = () =>
  useQuery<Hall[], Error>({
    queryKey: ["center"],
    queryFn: apiClient.getAll.bind(apiClient),

    staleTime: 1 * 60 * 1000,
  });
  
export const PostCenter = () => {
  const queryClient = useQueryClient();
  return useMutation<Hall[], Error, Hall>({
    mutationFn: (hall: Hall) => apiClient.post(hall),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["training"] });
    },
    onError: (error: Error) => {
      console.error("Error posting data:", error);
    },
  });
};


export const GetCenterById = (id: string | undefined) =>
  useQuery({
    queryKey: ["center", id],
    queryFn: async () => {
      return await apiClient.getAllbyID(id);
    },
    staleTime: 1 * 60 * 1000,
  });
  
export const UpdateCenters = () => {
  const queryClient = useQueryClient();

  const editCenter = async (updateData: Hall): Promise<Hall[]> => {
    const updatedData = await apiClient.update(updateData, updateData.id);
    queryClient.invalidateQueries(["center"]);
    return updatedData;
  };

  const mutation = useMutation(editCenter, {
    onSuccess: () => {
      queryClient.invalidateQueries(["center"]);
    },
  });

  return { mutation };
};
export const useDeleteCenter = () => {
  const queryClient = useQueryClient();

  const deleteItems = async (id: string | undefined) => {
    const response = await apiClient.delete(id);
    return response; 
  };

  const mutation = useMutation<Hall, Error, string>(deleteItems, {
    onSuccess: () => {
      queryClient.invalidateQueries(["trainings"]);
    },
  });

  return { deleteTraining: mutation.mutateAsync };
};
// const useHall = (selected: string | undefined) =>
//   useQuery<Hall[], Error>({
//     queryKey: ["halls", selected, "hall"],
//     queryFn: async () => {
//       if (selected) {
//         const itemsHall = HallData.flatMap((hall) => hall.items);
//         const filteredData = itemsHall.filter((item) => item.slug === selected);
//         return filteredData;
//       } else {
//         return HallData;
//       }
//     },
//   });

// export default useHall;
