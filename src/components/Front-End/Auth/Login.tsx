import { Link } from "react-router-dom";
import Navbar from "../HomePage/Navbar/Navbar";
import { useGlobalContext } from "../../Context/ThemeContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  email: z.string().min(6, { message: "يرجى اداخال البريد " }).max(70),
  password: z.string().min(6, { message: "يرجى ادخال كلمة المرور " }).max(70),
});
type ExpenceFormData = z.infer<typeof schema>;
export default function Login(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ExpenceFormData>({
    resolver: zodResolver(schema),
  });
  const { mode } = useGlobalContext();
  return (
    <div dir="rtl">
      <Navbar />
      <div
        className={`min-h-screen  py-6 flex flex-col justify-center sm:py-12 ${
          mode == "light" ? "bg-gray-100" : "bg-gray-900"
        }`}
      >
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">تسجيل الدخول من هنا</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <form
                  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                  onSubmit={handleSubmit((data) => console.log(data))}
                >
                  <div className="relative">
                    <input
                      {...register("email")}
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    {errors.email && (
                      <p className="text-red-400">{errors.email.message}</p>
                    )}
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      بريد المتسخدم
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      {...register("password")}
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    {errors.password && (
                      <p className="text-red-400">{errors.password.message}</p>
                    )}
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      كلمة المرور
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      className={`${
                        !isValid
                          ? "bg-blue-300 text-white rounded-md px-2 py-1"
                          : "bg-blue-500 text-white rounded-md px-2 py-1"
                      }`}
                      type="submit"
                      disabled={!isValid}
                    >
                      تسجيل الدخول
                    </button>
                    <br />
                    <br />
                    <div>
                      <h1>اذا لم يكن لديك حساب يمكنك انشاء حساب </h1>
                      <Link to={"/register"} className="text-red-600 ">
                        {" "}
                        من هنا
                      </Link>
                    </div>{" "}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
