import CountUp from 'react-countup';
import Aboutimg from '../../../../assets/seminar-bankers-min.jpg';
import './AboutCompany.css';
import {motion} from 'framer-motion'
const AboutCompany = () => {
 
  return (
    <div className="grid lg:grid-cols-2 sm:grid-col-1 gap-4  pt-20   h-screen" id="About" dir='rtl'>
      <motion.div initial={{x:-100,opacity:0}} animate={{x:0,opacity:1 }} transition={{duration:2}}  className='relative '>
        <h1 className="text-4xl font-bold mt-56 z-2 relative text-blue-500 px-5">حول الشركة</h1>
        <div className="rounded-full bg-gradient-to-r from-amber-500 rotate-[60deg] w-[15%] h-[13%] mt-40 z-3 absolute right-[14%] top-[6%] px-10"></div>
        <p className="text-lg text-gray-600 px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sequi distinctio beatae quis illo, odio non, labore obcaecati eum voluptatum culpa dolore ea? Veniam quasi repellat voluptas animi distinctio enim!</p>
     
<form className='px-7 mt-5 w-[100%]  right-0'>   

    <div className="relative">
       
        <input  type="search" id="default-search" className=" block w-[100%] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500      " placeholder="Search Mockups, Logos..." required/>
        <button type="submit" className="text-black bg-blue-400 absolute end-2.5 bottom-2.5  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2   ">Search</button>
    </div>
</form>

<div className='flex mt-5 font-bold  justify-center text-center bg-gradient-to-r from-gray-400 rounded-full w-[90%] pt-5'>
  <div className='mx-10 '>
  <p className='text-yellow-600 text-xl'><CountUp start={0} end={5000}/></p>
  <p className='text-lg '> التدريبات المقدمة</p>
  </div>
  <div className='mx-10 '>
  <p className='text-yellow-600 text-xl'><CountUp start={0} end={4000}/></p>

<p className='text-lg  w-full'>العملاء الراضين عن الخدمة</p>
  </div>
 <div className='mx-10 '>
 <p className='text-yellow-600 text-xl'><CountUp start={0} end={3000}/></p>
  <p className='text-lg '>القاعات المتوفرة</p>
 </div>

</div>

      </motion.div>
      <motion.div initial={{x:-100,opacity:0}} animate={{x:0,opacity:1 }} transition={{duration:1}} className="relative ">
        <img src={Aboutimg} alt="" className="img  mt-14 h-[80%] w-[80%]" />
      </motion.div>
    </div>
  );
};

export default AboutCompany;
