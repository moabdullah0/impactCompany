import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import card1 from "../../../../../assets/seminar-bankers-min.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useGlobalContext } from "../../../../Context/ThemeContext";
import HallData from "../../../../../data/Hall/HallData";
import { useState } from "react";
import useHall from "../../../../../hooks/useHall";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const HallCard = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 1.2,
        },
       
        animate: { x: 0, opacity: 1 },
      }));
    }
  }, [controls, inView]);

  const { mode } = useGlobalContext();
  const [selected, setSelected] = useState<string>();
  const { isError, isLoading, error, data } = useHall(selected);

  if (isLoading) return <div>...Loading</div>;
  if (isError) return <div>{error.message}</div>;

  const limitedData = data?.slice(0, 4);

  const handleBtns = (e: React.MouseEvent<HTMLButtonElement>) => {
    const word = e.currentTarget.value;
    setSelected(word);
  };

  return (
    <motion.div
      ref={ref}
      initial={{  x: -100,
        opacity: 0,}}
      whileInView={{x: 0, opacity: 1 }}
      
      viewport={{ once: true }}
     
     
      className={`bg-gray-200 pt-20 relative ${mode === "light" ? "bg-gray-200" : "bg-gray-900 text-white"}`}
    >
      <motion.h1 className="text-center text-3xl mb-10 font-semibold">القاعات</motion.h1>
      <button
        className="mb-5 px-5 align-middle select-none text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 rounded-lg bg-blue-400 text-white text-x shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        type="button"
      >
        <ArrowForwardIosIcon />
        المزيد من القاعات
      </button>

      <div className="grid w-full place-items-center overflow-x-scroll rounded-lg lg:overflow-visible divide-x">
        <div>
          {HallData.map((hall) => (
            <button
              key={hall.id}
              type="submit"
              value={hall.slug}
              onClick={handleBtns}
              className="mb-5 mx-2 px-5 align-middle select-none text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 rounded-lg bg-blue-400 text-white text-x shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            >
              {hall.title}
            </button>
          ))}
        </div>
      </div>

      <motion.div ref={ref} 
        transition={{ duration: 2 }} className="flex">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5
          }}
          pagination={{
            type: 'fraction',
          }}
          autoHeight={true}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="swiper_container"
        >
          {limitedData?.map((Hall) => (
            <SwiperSlide key={Hall.id} className='mx-3'>
              <motion.div
                className={`relative flex flex-col mt-6 text-gray-900 bg-gray-300 shadow-md bg-clip-border rounded-xl w-96 ${mode === "light" ? "" : "bg-gray-600 text-white"}`}
              >
                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-gray-500 shadow-blue-gray-500/40">
                  <img src={card1} alt="card-image" loading="lazy" />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 text-xl antialiased leading-snug tracking-normal text-blue-gray-900">
                    {Hall.title}
                  </h5>
                  <p className="block text-base antialiased leading-relaxed text-inherit">
                    {Hall.description}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-400 text-gray-400 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    Read More
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default HallCard;
