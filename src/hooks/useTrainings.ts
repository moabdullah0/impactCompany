import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ApiClient from "../Services/api-client";
import { Training } from "../entities/Training";

const apiClient = new ApiClient<Training>("/reservations");

export const FetchTrainings = () =>
  useQuery<Training[], Error>({
    queryKey: ["training"],
    queryFn: apiClient.getAll.bind(apiClient),

    staleTime: 1 * 60 * 1000,
  });

export const useGetById = (id: string | undefined) =>
  useQuery({
    queryKey: ["training", id],
    queryFn: async () => {
      return await apiClient.getAllbyID(id);
    },
    staleTime: 1 * 60 * 1000,
  });

export const PostTraining = () => {
  const queryClient = useQueryClient();
  return useMutation<Training[], Error, Training>({
    mutationFn: (test: Training) => apiClient.post(test),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["training"] });
    },
  });
};

export const GetTrainingByid = (id: string | undefined) =>
  useQuery({
    queryKey: ["training", id],
    queryFn: async () => {
      return await apiClient.getAllbyID(id);
    },
    staleTime: 1 * 60 * 1000,
  });
export const useDeleteItems = () => {
  const queryClient = useQueryClient();

  const deleteItems = async (id: string | undefined) => {
    const response = await apiClient.delete(id);
    return response; 
  };

  const mutation = useMutation<Training, Error, string>(deleteItems, {
    onSuccess: () => {
      queryClient.invalidateQueries(["trainings"]);
    },
  });

  return { deleteTraining: mutation.mutateAsync };
};

export const UpdateTrainings = () => {
  const queryClient = useQueryClient();

  const editTest = async (updateData: Training): Promise<Training[]> => {
    const updatedData = await apiClient.update(updateData, updateData.id);
    queryClient.invalidateQueries(["training"]);
    return updatedData;
  };

  const mutation = useMutation(editTest, {
    onSuccess: () => {
      queryClient.invalidateQueries(["training"]);
    },
  });

  return { mutation };
};
