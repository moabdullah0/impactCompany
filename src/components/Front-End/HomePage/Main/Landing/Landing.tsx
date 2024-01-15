import "./Landing.css";
import img from "../../../../../assets/6311736-removebg-preview.png";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../../Context/ThemeContext";

const Landing = () => {
  const { mode } = useGlobalContext();
  return (
    <div
      className={` grid lg:grid-cols-2 sm:grid-col-1 gap-4  px-10 relative items-center h-[110vh] ${
        mode === "light" ? "bg-gray-200" : "bg-gray-900"
      }`}
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="rounded-lg relative   pt-20"
      >
        <div className="rounded-full bg-gradient-to-r from-blue-300 rotate-12 w-[7%] h-[5%] mt-30 absolute top-[10%]"></div>
        <h1
          className={`text-start text-3xl font-bold items-center  sm:w-[80%] ${
            mode === "light" ? "text-blue-800" : "text-blue-700"
          }`}
        >
          نحن هنا لمساعدة الفرق والشركات والمنظمات في بناء مستقبل أكثر إشراقًا
          من خلال تقديم قاعات تدريبية فعّالة ومدربين ذوي خبرة.
        </h1>
        
        <div className="flex mb-5">
          <Link
            to={"/login"}
            className=" bg-gradient-to-t from-gray-700 text-white px-5 py-2 rounded-full mt-5 text-lg lg:w-[30%]"
          >
            سجل الدخول من هنا
          </Link>
          <Link
            to={"/register"}
            className=" bg-gradient-to-t from-gray-700 text-white px-5 py-2 rounded-full mt-5 text-lg lg:w-[30%]"
          >
            قم بانشاء حساب من هنا
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className=" "
      >
        <img src={img} />
      </motion.div>
    </div>
  );
};

export default Landing;
