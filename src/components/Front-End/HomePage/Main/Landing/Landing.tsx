import "./Landing.css";
import img from "../../../../../assets/6311736-removebg-preview.png";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../../Context/ThemeContext";

const Landing = () => {
  const text = "نحن هنا لمساعدة الفرق والشركات والمنظمات في بناء مستقبل أكثر إشراقًا من خلال تقديم قاعات تدريبية فعّالة ومدربين ذوي خبرة.".split(" ");
  const { mode } = useGlobalContext();
  return (
    <div
      className={` grid lg:grid-cols-2 sm:grid-col-1 gap-4  px-10 relative items-center h-[110vh] ${
        mode === "light" ? "bg-gray-200" : "bg-gray-900"
      }`}
    >
      <motion.div
       
        className="rounded-lg relative   pt-20"
      >
         {/* <div class="rounded-[6rem] h-56 w-56 rounded-tl-none rounded-br-none bg-blue-400"></div> */}
       {text.map((el, i) => (
        <motion.span
        className={`text-start text-3xl font-bold items-center  sm:w-[80%] ${
          mode === "light" ? "text-blue-500" : "text-blue-500"
        }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10
          }}
          
          key={i}

        >
          {el}{" "}
        </motion.span>
      ))}
        
        <div className="flex mb-5 mt-5">
          <Link
            to={"/login"}
            className=" mb-5  mx-2 px-5 align-middle select-none  text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none  py-3  rounded-lg bg-blue-400 text-white text-x shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          >
            سجل الدخول من هنا
          </Link>
          <Link
            to={"/register"}
            className=" mb-5 mx-2 px-5  align-middle select-none  text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none  py-3  rounded-lg bg-blue-400 text-white text-x shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          >
            قم بانشاء حساب من هنا
          </Link>
        </div>
       
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className=" relative"
      >
   

        <img src={img} className="  rounded-[5rem] rounded-br-[20rem] h-[80%] w-[80%] bg-blue-400 opacity-[0.8]"/>
      </motion.div>
     
    </div>
  );
};

export default Landing;
