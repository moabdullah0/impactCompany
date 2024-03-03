import { Link } from "react-router-dom";
import MiniDrawer from "../Layout/LayoutHome";
import { useDeleteItems, FetchTrainings } from "../../../hooks/useTrainings";

const TableTraining = () => {
  const { deleteTraining } = useDeleteItems();

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

  const { data, isLoading, isError } = FetchTrainings();

  if (isLoading) {
    return (
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
        <img
          src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
          className="rounded-full h-28 w-28"
        />
      </div>
    );
  }

  if (isError) return <div>isError</div>;

  return (
    <div>
      <MiniDrawer />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-36 px-20">
        <Link
          to={"/addtraining"}
          className="mb-5 px-5 align-middle select-none text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 rounded-lg bg-blue-400 text-white text-x shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          اضافة تدريب جديد
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
                idHall
              </th>
              <th scope="col" className="px-6 py-3">
                idCenter
              </th>
              <th scope="col" className="px-6 py-3">
                Datetraning
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((training, i) => (
              <tr key={i} className="odd:bg-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {training.id}
                </th>
                <td className="px-6 py-4">{training.title}</td>
                <td className="px-6 py-4">{training.idHall}</td>
                <td className="px-6 py-4">{training.idcenter}</td>
                <td className="px-6 py-4">
                  {training.Datetraning?.toString()}
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`/training/Edit/${training.id}`}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`/training/Edit/${training.id}`}
                    className="font-medium text-green-600 hover:underline"
                  >
                    Edit
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(training.id)}
                    className="font-medium text-red-600 hover:underline"
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

export default TableTraining;
