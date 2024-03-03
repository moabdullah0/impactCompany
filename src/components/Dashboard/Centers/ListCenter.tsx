import { useState } from "react";
// import HallData from "../../../data/Hall/HallData";
import MiniDrawer from "../Layout/LayoutHome";
import { Link } from "react-router-dom";
import { FetchHall, useDeleteCenter } from "../../../hooks/useCenters";

const ListCenter = () => {
  const { deleteTraining } = useDeleteCenter();

  const handleDelete = async (id: string | undefined) => {
    try {
      if (!id) {
        console.error("ID is undefined ");
        return;
      }
      await deleteTraining(id);
      console.log("Item deleted successfully");
    } catch (error) {
      console.error(Error("Error deleting item:"), error);
    }
  };
  const { data, isError, isLoading } = FetchHall();
  const [showFullText, setShowFullText] = useState(false);
  if (isError) return <h1>isError</h1>;
  if (isLoading) return <h1>isLoading</h1>;
  return (
    <div>
      <MiniDrawer />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-36 px-20">
        <Link
          to={"/center/add"}
          className="mb-5 px-5 align-middle select-none text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 rounded-lg bg-blue-400 text-white text-x shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          اضافة مركز جديد
        </Link>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                id
              </th>
              <th scope="col" className="px-6 py-3">
                Title Center
              </th>
              <th scope="col" className="px-6 py-3">
                description
              </th>
              <th scope="col" className="px-6 py-3">
                adress
              </th>
              <th scope="col" className="px-6 py-3">
                slug
              </th>

              <th scope="col" className="px-6 py-3">
                Edit
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((data, i) => (
              <tr
                key={i}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.id}
                </th>
                <td className="px-6 py-4">{data.title}</td>

                <td className="px-6 py-4">
                  {" "}
                  {showFullText
                    ? data.description
                    : data.description.slice(0, 50)}
                  <button
                    className="text-blue-300"
                    onClick={() => setShowFullText(!showFullText)}
                  >
                    {showFullText ? "قراءة اقل" : "قراءة المزيد"}
                  </button>
                </td>
                <td className="px-6 py-4">{data.address}</td>
                <td className="px-6 py-4">{data.slug}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/center/edit/${data.id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(data.id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListCenter;
