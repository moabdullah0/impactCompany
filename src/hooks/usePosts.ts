import { useQuery } from "react-query";
import ApiClient from "../Services/api-client";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  hasMore: boolean;
}

const apiClient = new ApiClient<Post>('/posts');

const usePost = (userId: number | undefined) =>
  useQuery<Post[], Error>({
    queryKey: ["users", userId, "posts"],
    queryFn:  apiClient.getAll.bind(apiClient),
  
    staleTime: 1 * 60 * 1000, // 1m
  });

export default usePost;
