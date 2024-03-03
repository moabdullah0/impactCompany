import MiniDrawer from "../Layout/LayoutHome";
import { useForm } from "react-hook-form";
import { schema, slugs } from "./schema/schema";
import { PostCenter } from "../../../hooks/useCenters";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type ExpenceFormData = z.infer<typeof schema>;

const PostCenters = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<ExpenceFormData>({
    resolver: zodResolver(schema),
  });

  const { mutate: postCenterMutation } = PostCenter();

  const onSubmit = (data: ExpenceFormData) => {
    return postCenterMutation(data);
  };
  return (
    <div>
      <MiniDrawer />
      <div
        className="flex items-center justify-center p-12 mt-24 px-20"
        dir="rtl"
      >
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <h1 className="text-blue-600 mb-5 ">اضافة مركز جديد</h1>
          <form method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    اسم المركز
                  </label>
                  <input
                    {...register("title")}
                    type="text"
                    name="title"
                    id="title"
                    placeholder="First Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  {errors.title && (
                    <p className="text-red-500">{errors.title.message}</p>
                  )}
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    عنوان المركز
                  </label>
                  <input
                    {...register("address")}
                    type="text"
                    name="address"
                    id="address"
                    placeholder="First Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  {errors.address && (
                    <p className="text-red-500">{errors.address.message}</p>
                  )}
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    وصف المركز
                  </label>
                  <input
                    {...register("description")}
                    type="text"
                    name="description"
                    id="description"
                    placeholder="First Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  {errors.description && (
                    <p className="text-red-500">{errors.description.message}</p>
                  )}
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    المركز الذي سيقام فيه التدريب
                  </label>
                  <select
                    {...register("slug")}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option>اختر النوع</option>
                    {slugs.map((slug, i) => (
                      <option key={i} value={slug.title}>
                        {slug.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    اضافة صورة تعبيرية للمركز{" "}
                  </label>
                  <input type="file" multiple {...register("Image")} />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-500 hover:shadow-form rounded-md  hover:bg-blue-300 py-3 px-8 sm:mx-10 mt-5 text-center text-base font-semibold text-white outline-none"
              >
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

export default PostCenters;
