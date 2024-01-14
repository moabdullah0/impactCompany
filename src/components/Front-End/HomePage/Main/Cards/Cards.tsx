import card1 from "../../../../../assets/seminar-bankers-min.jpg";
import card2 from "../../../../../assets/illustration-courses-2x.webp";
import card3 from "../../../../../assets/4192347.jpg";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useGlobalContext } from "../../../../Context/ThemeContext";

const Cards = () => {
  const { mode } = useGlobalContext();
  return (
    <div
      className={`bg-gray-200 pt-20 relative ${
        mode === "light" ? "bg-gray-200" : "bg-gray-900 text-white"
      }`}
    >
      <h1 className="text-center text-3xl  mb-10 font-semibold">القاعات</h1>
      <button
        className="mb-5 mx-5 px-5 align-middle select-none  text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none  py-3  rounded-lg bg-blue-400 text-white text-x shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        type="button"
      >
        <ArrowForwardIosIcon />
        المزيد من القاعات
      </button>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 gap-4 ">
        <div
          className={`relative flex flex-col mt-6 text-gray-900 bg-gray-300 shadow-md bg-clip-border rounded-xl w-96 ${
            mode === "light" ? "" : "bg-gray-600 text-white"
          }`}
        >
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-gray-500 shadow-blue-gray-500/40">
            <img src={card1} alt="card-image" />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Impact Company
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-400 text-gray-400 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Read More
            </button>
          </div>
        </div>
        <div
          className={`relative flex flex-col mt-6 text-gray-900 bg-gray-300 shadow-md bg-clip-border rounded-xl w-96 ${
            mode === "light" ? "" : "bg-gray-600 text-white"
          }`}
        >
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden bg-gray-200 shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={card2} alt="card-image" />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Impact Company
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-400 text-gray-900 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Read More
            </button>
          </div>
        </div>
        <div
          className={`relative flex flex-col mt-6 text-gray-900 bg-gray-300 shadow-md bg-clip-border rounded-xl w-96 ${
            mode === "light" ? "" : "bg-gray-600 text-white"
          }`}
        >
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={card3} alt="card-image" />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Impact Company
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-400 text-gray-900 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
