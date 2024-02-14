import "./Landing.css";
import img from "../../../../../assets/logo.png";
import img2 from "../../../../../assets/bg1.jpg";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";
// import { useGlobalContext } from "../../../../Context/ThemeContext";

const Landing = () => {
  const text =
    "نحن هنا لمساعدة الفرق والشركات والمنظمات في بناء مستقبل أكثر إشراقًا من خلال تقديم قاعات تدريبية فعّالة ومدربين ذوي خبرة.".split(
      " "
    );
  // const { mode } = useGlobalContext();
  return (
    <div className="mb-3">
      <div className="flex h-screen relative w-full items-center  justify-center bg-cover ">
        <img src={img2} alt="" className="w-full h-screen blur-sm" />
      </div>
      {/* <div className="absolute h-screen w-full  " /> */}

      {/* <div
        className="backdrop-blur-none h-1/3 w-2/3  rounded-xl bg-neutral-400 bg-opacity-60 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
                    "
      > */}
      <div
        className="py-2 rounded-xl backdrop-blur-sm bg-neutral-400 bg-opacity-60 absolute  lg:h-1/4 w-2/3 top-[10%] lg:top-[15%] left-[50%]  
                      translate-x-[-50%] translate-y-[-50%]  border-2 border-white grid lg:grid-cols-2 px-10 items-center "
      >
        <motion.div className="rounded-lg">
          {text.map((el, i) => (
            <motion.span
              className="text-start text-black text-2xl font-bold z-10 items-center sm:w-80 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}

          <div className="flex mb-5 mt-5 ">
            <Link
              to={"/login"}
              className="mb-5 mx-2 px-5 py-3 text-center uppercase transition-all rounded-lg bg-Gold2 bg-opacity-85 text-DarkBlue shadow-md shadow-gray-900/10 hover:shadow-3xl hover:shadow-gray-900/20 duration-300 hover:bg-Gold3"
            >
              تسجيل الدخول
            </Link>
            <Link
              to={"/register"}
              className="mb-5 mx-2 px-5 py-3 text-center uppercase transition-all rounded-lg bg-Gold2 bg-opacity-85 text-DarkBlue shadow-md shadow-gray-900/10 hover:shadow-3xl hover:shadow-gray-900/20 duration-300 hover:bg-Gold3"
            >
              إنشاء حساب
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src={img}
            alt="image"
            className="rounded-full w-full mx-auto md:mx-0"
          />
        </motion.div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Landing;
