import Aboutimg from '../../../../assets/seminar-bankers.jpg';
import './AboutCompany.css';

const AboutCompany = () => {
 
  return (
    <div className="grid lg:grid-cols-2 sm:grid-col-1 gap-4 px-10 pt-20" id="About" dir='rtl'>
      <div className='relative'>
        <h1 className="text-4xl font-bold mt-56 z-2 relative text-blue-500">حول الشركة</h1>
        <div className="rounded-full bg-gradient-to-r from-amber-500 rotate-[60deg] w-[15%] h-[13%] mt-40 z-3 absolute right-[14%] top-[10%] "></div>
        <p className="text-lg text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sequi distinctio beatae quis illo, odio non, labore obcaecati eum voluptatum culpa dolore ea? Veniam quasi repellat voluptas animi distinctio enim!</p>
     
<form className='px-5 mt-5 w-[100%] absolute right-0'>   

    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
            
        </div>
        <input  type="search" id="default-search" className=" block w-[100%] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
        <button type="submit" className="text-black bg-blue-400 absolute end-2.5 bottom-2.5  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

      </div>
      <div className="relative">
        <img src={Aboutimg} alt="" className="img  mt-14 h-[100%] w-[90%]" />
      </div>
    </div>
  );
};

export default AboutCompany;
