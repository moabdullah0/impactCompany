import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ApiClient from "../Services/api-client";
import { Test } from "../entities/Test";


const apiClient = new ApiClient<Test>("/test");
export const useTests = () =>
  useQuery<Test[], Error>({
    queryKey: ["test"],
    queryFn: apiClient.getAll.bind(apiClient),

    staleTime: 1 * 60 * 1000, // 1m
  });
export const useGetById = (id: string | undefined) =>
  useQuery({
    queryKey: ["test", id],
    queryFn: async () => {
      return await apiClient.getAllbyID(id);
    },
    staleTime: 1 * 60 * 1000,
  });

export const AddTestapi = () => {
  const queryClient = useQueryClient();
  return useMutation<Test[], Error, Test>({
    mutationFn: (test: Test) => apiClient.post(test),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["test"] });
    },
  });
};

export const UpdateTest = () => {
  const queryClient = useQueryClient();

  const editTest = async (updateData: Test): Promise<Test[]> => {
    const updatedData = await apiClient.update(updateData, updateData.id);
    queryClient.invalidateQueries(["test"]);
    return updatedData;
  };

  const mutation = useMutation(editTest, {
    onSuccess: () => {
      queryClient.invalidateQueries(["test"]);
    },
  });

  return { mutation };
};
