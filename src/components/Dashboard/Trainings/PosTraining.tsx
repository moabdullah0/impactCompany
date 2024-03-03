import MiniDrawer from "../Layout/LayoutHome";
import { PostTraining } from "../../../hooks/useTrainings";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { center, schema } from "./schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
const PosTraining = () => {
  type ExpenceFormData = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenceFormData>({
    resolver: zodResolver(schema),
  });

  const { mutate: PostTrain } = PostTraining();

  const onSubmit = (data: ExpenceFormData) => {
    const formData = {
      ...data,
    
      Datetraning: new Date(data.Datetraning),
    };
    return PostTrain(formData);
  };

  return (
    <div>
      <MiniDrawer />
      <div
        className="flex items-center justify-center p-12 mt-24 px-20"
        dir="rtl"
      >
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <h1 className="text-blue-600 mb-5 ">اضافة تدريب جديد</h1>
          <form method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    عنوان التدريب
                  </label>
                  <input
                    {...register("title")}
                    type="text"
                    name="title"
                    id="Title"
                    placeholder="First Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    المركز الذي سيقام فيه التدريب
                  </label>
                  <select
                    {...register("idcenter")}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option>اختر مركز</option>
                    {center.map((center) => (
                      <option key={center.id} value={center.id}>
                        {center.title}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.idcenter && (
                  <p className="text-red-500">{errors.idcenter.message}</p>
                )}
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    القاعة
                  </label>
                  <select
                    {...register("idHall")}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option>اختر قاعة</option>
                    {center.map((center) => (
                      <option key={center.id} value={center.id}>
                        {center.title}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.idHall && (
                  <p className="text-red-500">{errors.idHall.message}</p>
                )}
              </div>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                عدد الحاضرين للتدريب
              </label>
              <input
                {...register("NumStudent")}
                type="number"
                name="NumStudent"
                id="NumStudent"
                placeholder="5"
                min="0"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.NumStudent && (
                <p className="text-red-500">{errors.NumStudent.message}</p>
              )}
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    تاريخ التدريب
                  </label>
                  <input
                    {...register("Datetraning")}
                    type="date"
                    name="date"
                    id="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                {errors.Datetraning && (
                  <p className="text-red-500">{errors.Datetraning.message}</p>
                )}
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    وقت التدريب
                  </label>
                  <input
                    {...register("Time")}
                    type="time"
                    name="time"
                    id="time"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                {errors.Time && (
                  <p className="text-red-500">{errors.Time.message}</p>
                )}
              </div>
            </div>

            <div>
              <button className="bg-blue-600 hover:shadow-form rounded-md hover:bg-blue-300 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                انشاء تدريب جديد
              </button>

              <button className=" bg-red-600 hover:shadow-form rounded-md  hover:bg-red-300 py-3 px-8 sm:mx-10 mt-5 text-center text-base font-semibold text-white outline-none">
                الغاء العملية
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PosTraining;
