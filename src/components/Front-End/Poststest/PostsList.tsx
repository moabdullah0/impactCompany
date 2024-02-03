// components/Front-End/Poststest/PostsList.tsx
import React, { useState } from "react";
import usePost from "../../../hooks/usePosts";

const PostsList = () => {
  const[userId,setUserId]=useState<number>();
  const [page, setPage] = React.useState(0);
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = usePost(userId);

  if (isError) return <div>Error: {error.message}</div>;
  if (isLoading) return <p>...Loading</p>;

  return (
    <div>
      <select 
      onChange={(event) => {setUserId(parseInt(event.target.value))}}
      value={userId}
      name="" id="" className="bg-gray-200 w-[50%] border border-blue-200">
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      {data?.map((post, index) => (
        <ul key={index}>
          <li className="border border-blue-500 w-[50%] mx-20">{post.title}</li>
        </ul>
      ))}
      <span>Current Page: {page + 1}</span>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>{' '}
      <button
        onClick={() => {
          if (!isPreviousData && data?.[page]?.hasMore) {
            setPage((old) => old + 1);
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData || !data?.[page]?.hasMore}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{' '}
    </div>
  );
};

export default PostsList;
