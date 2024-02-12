import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
const typeuser = ["مدير ", "ميسر جلسة", "منظمة", "مستخدم"];
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Nav from "../Front-End/HomePage/nav/nav";
function isValidOption(value: string): boolean {
  const validOptions = typeuser.map((data) => data);

  return validOptions.includes(value);
}
const schema = z.object({
  email: z.string().min(6, { message: "يرجى ادخال البريد " }).max(70),
  name: z.string().min(6, { message: "يرجى ادخال اسم المستخدم  " }).max(70),
  password: z.string().min(6, { message: "يرجى ادخال كلمة المرور " }).max(70),
  Typeuser: z.string().refine((value) => isValidOption(value), {
    message: "يجب تحديد القاعة المقام فيها التدريب",
  }),
});
type Validation = z.infer<typeof schema>;
export default function Reg() {
  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm<Validation>({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <Nav/>
      <div className="relative h-screen flex flex-col justify-center items-center ">
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
          dir="rtl"
          className="absolute rounded-xl flex flex-col justify-center items-center h-auto bg-BlueDark bg-opacity-100 border border-white pt-4 shadow-lg "
        >
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="mb-4 px-6 ">
            <div className=' w-[20%] absolute top-[11%] mx-2 '><PersonOutlineIcon/></div>

              <label className="  text-yellow-500 opacity-90  text-sm pr-2">
                اسم المستخدم
              </label>
              <input
                {...register("name")}
                className="rounded-3xl pr-6 mt-1 text-BlueDark border border-Gold placeholder-gray-900 focus:border-Gold2 bg-slate-300   p-2 w-full shadow-lg outline-none text-lg"
                type="text"
                name="name"
              />
              {errors.name && (
                <p className="text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div className=" mb-4 px-6">
            <div className=' w-[20%] absolute top-[31%] mx-2'><MarkEmailReadIcon/></div>

              <label className="  text-yellow-500 text-sm opacity-90  pr-2">
                البريد الالكتروني
              </label>
              <input
                {...register("email")}
                className="rounded-3xl pl-6 mt-1 text-BlueDark border border-Gold placeholder-gray-900 focus:border-Gold2 bg-slate-300 p-2 w-full shadow-lg outline-none text-lg"
                type="email"
                name="email"
                dir="ltr"
              />
              {errors.email && (
                <p className="text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div className=" mb-4 px-6">
            <div className=' w-[20%] absolute top-[50%] mx-2'><LockOpenIcon/></div>

              <label className="  text-yellow-500 text-sm opacity-90 pr-2">
                كلمة المرور
              </label>
              <input
                {...register("password")}
                className="rounded-3xl pl-6 mt-1 text-BlueDark border border-Gold placeholder-gray-900 focus:border-Gold2 bg-slate-300  p-2 w-full shadow-lg outline-none text-lg"
                type="password"
                name="password"
                dir="ltr"
              />
              {errors.password && (
                <p className="text-red-400">{errors.password.message}</p>
              )}
            </div>
            <div className="mb-4 px-6">
              <label className="  text-yellow-500 text-sm opacity-90 pr-2 ">
                نوع المستخدم
              </label>
              <select
                {...register("Typeuser")}
                name="Typeuser"
                className="w-full mt-1 pr-6  rounded-3xl border border-Gold placeholder-gray-900 focus:border-Gold2 bg-slate-300  py-2 shadow-lg outline-none text-lg"
              >
                {typeuser.map((DataTransfer,index) => (
                  <option key={index}>{DataTransfer}</option>
                ))}
              </select>
              {errors.Typeuser && (
                <p className="text-red-400">{errors.Typeuser.message}</p>
              )}
            </div>

            <div className=" flex flex-col items-center justify-center">
              <button
                type="submit"
              
                className="bg-yellow-500 border border-gray-100 mb-2 px-4 py-2 rounded-full text-black bg-opacity-90"
              >
                انشاء حساب
              </button>
              <div className="text-white mb-4">
                لديك حساب؟{" "}
                <span>
                  <Link to={"/login"} className="text-amber-400 text-sm ">
                    تسجيل الدخول
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
