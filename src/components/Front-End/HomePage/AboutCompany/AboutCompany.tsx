import CountUp from "react-countup";
import Aboutimg from "../../../../assets/8294-removebg-preview (1).png";

import { motion, useAnimation,useInView } from "framer-motion";

import CheckIcon from "@mui/icons-material/Check";
import { useGlobalContext } from "../../../Context/ThemeContext";
import { useEffect, useRef } from "react";

const AboutCompany = () => {
  const controls = useAnimation();
    
  const ref=useRef<HTMLDivElement>(null);
    const  inView = useInView(ref,{once:true});
  
    useEffect(() => {
      if (inView) {
        controls.start((i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 1.2, 
          },
        }));
      }
    }, [controls, inView]);
  const { mode } = useGlobalContext();
  const griditems = `grid lg:grid-cols-2 sm:grid-col-1 gap-4     h-[100%] ${
    mode == "light" ? "bg-gray-200  h-[120%]" : "bg-gray-900"
  }`;
  return (
    <motion.div  ref={ref}
    initial={{  x: -100,
      opacity: 0,}}
    whileInView={{x: 0, opacity: 1 }}
    transition={{duration:2}}
    viewport={{ once: true }}  className={griditems} id="About" dir="rtl">
       <motion.div
       
      
        className={`relative ${mode == "light" ? "bg-gray-200" : ""}`}
      >
        <img src={Aboutimg} alt="" className="img   mt-14 h-[80%] w-[80%]  " />
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative "
      >
        
        <h1 className="text-4xl font-bold  z-2 relative text-blue-500 px-10">
          حول الشركة
        </h1>

        <h1
          className={`text-gray-300 text-start mt-4 text-2xl font-bold px-8 ${
            mode == "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          نحن هنا لدعم رحلتك في التعلم وتطوير مهاراتك!
        </h1>
        <p
          className={`text-gray-300 text-start mt-4 text-xl font-bold px-8 w-[80%] ${
            mode == "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          في شركتنا، نقدم باقة شاملة من الخدمات لضمان تجربة تدريب متميزة
          وميسّرة. سواء كنت تبحث عن توفير اللوجستيات الكاملة لجلسات التدريب أو
          الحاجة لتسهيل جميع جوانبها، نحن هنا لتلبية احتياجاتك. خدماتنا تشمل:
        </p>
        <ul className=" text-gray-400 text-start mt-2 ml-6 px-8 text-lg font-bold  w-[80%]">
          <li>
            <span className="text-green-500 px-2">
              <CheckIcon />
            </span>
            توفير قاعات تدريب مجهزة بأحدث التقنيات
          </li>
          <li>
            <span className="text-green-500 px-2">
              <CheckIcon />
            </span>
            تنظيم وإدارة اللوجستيات الكاملة للجلسات التدريبية
          </li>
          <li>
            <span className="text-green-500 px-2">
              <CheckIcon />
            </span>{" "}
            استضافة مدربين ذوي خبرة ومتخصصين في مجالات متعددة
          </li>
          <li>
            <span className="text-green-500 px-2">
              <CheckIcon />
            </span>
            تقديم خيارات مرنة لجدولة الجلسات وفقًا لاحتياجاتك
          </li>
        </ul>

        <form className="px-10 mt-5 w-[100%]  right-0 mb-5">
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className=" block w-[100%] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500      "
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-black bg-blue-400 absolute end-2.5 bottom-2.5  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2   "
            >
              Search
            </button>
          </div>
        </form>

        <div className="flex  font-bold  justify-center text-center bg-gradient-to-r from-gray-400 rounded-full w-[90%]" ref={ref}>
          <div className="mx-10 mt-5">
            <p className="text-yellow-600 text-xl">
              <CountUp start={0} end={5000} />
            </p>
            <p className="text-lg "> التدريبات المقدمة</p>
          </div>
          <div className="mx-10 mt-5">
            <p className="text-yellow-600 text-xl">
              <CountUp start={0} end={4000} />
            </p>

            <p className="text-lg  w-full">العملاء الراضين عن الخدمة</p>
          </div>
          <div className="mx-10 mt-5">
            <p className="text-yellow-600 text-xl">
              <CountUp start={0} end={3000} />
            </p>
            <p className="text-lg ">القاعات المتوفرة</p>
          </div>
        </div>
      </motion.div>
     
    </motion.div>
  );
};

export default AboutCompany;