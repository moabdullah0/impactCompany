import React from "react";
import { Link } from "react-router-dom";

export default function log(): JSX.Element {
  return (
    <div>
      <div
        className="flex h-screen relative w-full items-center blur-sm bg-opacity-95 justify-center bg-cover "
        style={{
          backgroundImage:
            "url('https://cdn.cort.com/cort/images/products/P6504903_main_800.jpg')",
        }}
      >
        <div className=" h-screen w-full  bg-opacity-60 bg-BlueDark " />
      </div>

      <div
        className="backdrop-blur-none absolute top-[50%] left-[50%]
                    translate-x-[-50%] translate-y-[-50%] 
                    "
      >
        <div className="rounded-xl w-full flex flex-col justify-center items-center  h-[calc(100vh-23rem)] bg-BlueDark bg-opacity-100 border border-white px-20 py-8 shadow-lg max-sm:px-8">
          <div className="mb-8 flex flex-col items-center">
            {/* <span className="text-Gold2 font-serif text-2xl">تسجيل الدخول</span> */}
            <svg
              className="svg-icon"
              style={{
                width: "5rem",
                height: "rem",
                verticalAlign: "middle",
                fill: "white",
                overflow: "hidden",
              }}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M512 819.2c-106.666667 0-200.96-54.613333-256-136.533333 1.28-85.333333 170.666667-132.266667 256-132.266667s254.72 46.933333 256 132.266667a308.565333 308.565333 0 0 1-256 136.533333M512 213.333333a128 128 0 0 1 128 128 128 128 0 0 1-128 128 128 128 0 0 1-128-128 128 128 0 0 1 128-128m0-128A426.666667 426.666667 0 0 0 85.333333 512a426.666667 426.666667 0 0 0 426.666667 426.666667 426.666667 426.666667 0 0 0 426.666667-426.666667c0-235.946667-192-426.666667-426.666667-426.666667z"
                fill=""
              />
            </svg>
            ;
          </div>
          <form action="#">
            <div className="mb-4">
              <input
                className="rounded-3xl border border-Gold placeholder-gray-900 focus:border-Gold2 bg-slate-300 px-6 py-2 shadow-lg outline-none text-lg"
                type="text"
                name="name"
                placeholder="@"
              />
            </div>

            <div className="mb-4">
              <input
                className="rounded-3xl flex justify-center placeh bg-slate-300 focus:border-Gold2 px-6 py-2  border border-Gold shadow-lg outline-none placeholder-gray-900 text-lg"
                type="password"
                name="name"
                placeholder="*********"
              />
            </div>
            <div className="mt-8 flex justify-center">
              {" "}
              <button
                type="submit"
                className="rounded-3xl mb-4 text-lg font-bold bg-yellow-500 opacity-90 border border-gray-100 px-10 py-2 text-black shadow-lg  duration-300 hover:text-blue-900 text-md hover:border-yellow-700-700 "
              >
                تسجيل الدخول
              </button>
            </div>
          </form>
          <div>
            <Link
              to={"/register"}
              className=" w-full text-amber-400 duration-300 hover:text-Gold2 "
            >
              أنشاء حساب
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
