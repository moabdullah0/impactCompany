import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TimeLineData from "../../../../../data/Dashboard/TimeLineData";
const TimeLine = () => {
  return (
    <div className="mt-10 w-[100%]   text-center justify-center">
      <ol className="items-center sm:flex md:flex-col lg:flex-row text-center justify-center">
        {TimeLineData.map((Line, indexedDB) => (
          <li key={indexedDB} className="relative mb-6 sm:mb-0 ">
            <div className="flex items-center">
              <div
                className={`z-10 flex items-center justify-center w-6 h-6  ${
                  Line.Done === "Done" ? "bg-yellow-300" : "bg-red-600"
                }  rounded-full  dark:bg-yellow-500  dark:ring-yellow-500 `}
              >
                <div className="mb-11 text-red-600">{Line.icon}</div>
              </div>
              <p className="absolute z-30 top-[-20%] left-10 font-bold">
                {Line.TitleTask}
              </p>
              <div
                className={` sm:flex w-[30vh] ${
                  Line.Done === "Done" ? "bg-green-600" : "bg-red-600"
                } h-0.5 dark:bg-yellow-400`}
              ></div>
              <span
                className={`font-bold ${
                  Line.Done === "Done" ? "text-green-600" : "text-red-600"
                }`}
              >
                {" "}
                <CheckCircleIcon />
              </span>
            </div>
            <div className="mt-3 sm:pe-8">
              <h6
                className={`font-bold ${
                  Line.Done === "Done" ? "text-green-600" : "text-red-600"
                }`}
              >
                {Line.Done === "Done" ? "Done" : "Not Done"}
                <CheckCircleIcon />
              </h6>

              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-yellow-500">
                {Line.Date}
              </time>
            </div>
          </li>
        ))}
      </ol>
      <div className="border-b-black w-[100%] border-solid border "></div>
      <div className="flex mt-2 text-center justify-start items-center">
        {TimeLineData.map((Line, indexedDB) => (
          <time
            key={indexedDB}
            className=" block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mx-20"
          >
            {Line.Date}
          </time>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
