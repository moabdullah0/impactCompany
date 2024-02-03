import HallData from "../../../data/Hall/HallData";
import MiniDrawer from "../Layout/LayoutHome";
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from  '@hookform/resolvers/zod'

function isValidOption(value: string): boolean {
  const validOptions = HallData.map((data) => data.title);

  return validOptions.includes(value);
}
function isValidTime(value: string): boolean {
  
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return timeRegex.test(value);
}
const schema=z.object({
  fName:z.string().min(6).max(20),
  address:z.string().min(6).max(20),
  hall: z.string().refine((value) => isValidOption(value), {
    message: "يجب اختيار خيار صحيح",
  }),

  centerName:   z.string().trim().nonempty({ message: "يجب اختيار hglv;." }),
  guest:z.number(),
  date:z.date(),
  time: z.string().refine((value) => isValidTime(value), {
    message: "يجب إدخال وقت صحيح",
  }),
})
type ExpenceFormData=z.infer<typeof schema>
const CenterAdd = () => {
  const {register,handleSubmit,formState:{errors}}=useForm<ExpenceFormData>({
    resolver:zodResolver(schema)
  })
  return (
    <div>
      <MiniDrawer />
      <div
        className="flex items-center justify-center p-12 mt-24 px-20"
        dir="rtl"
      >
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <h1 className="text-blue-600 mb-5 ">اضافة مركز جديد</h1>
          <form method="POST" onSubmit={handleSubmit(data=>console.log(data))} >
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    اسم المركز
                  </label>
                  <input
                  {...register('fName')}
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="First Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                      {errors.fName&&<p className="text-red-500">{errors.fName.message}</p>}
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    عنوان المركز
                  </label>
                  <input
                       {...register('address')}
                    type="text"
                    name="address"
                    id="address"
                    placeholder="First Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                      {errors.address&&<p className="text-red-500">{errors.address.message}</p>}
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    المركز الذي سيقام فيه التدريب
                  </label>
                  <select   {...register('centerName')} name="centerName" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                    <option value="1">اختر مركز </option>
                    <option value="2">مركز اعزاز</option>
                    <option value="1">مركز الدانا</option>
                    <option value="1">مركز سرمدا</option>
                  </select>
                  {errors.centerName&&<p className="text-red-500">{errors.centerName.message}</p>}
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    القاعة
                  </label>
                  <select    {...register('hall')} name="hall" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                    <option value="1">اختر القاعة </option>
                  {
                    HallData.map((data, index)=>(
                      <option value={data.id} key={index}>{data.title}</option>
                    )
                   
                    )
                  }
                  </select>
                  {errors.hall&&<p className="text-red-500">{errors.hall.message}</p>}
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                عدد الحاضرين للتدريب
              </label>
              <input
                {...register('guest')}
                type="number"
                name="guest"
                id="guest"
                placeholder="5"
                min="0"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.guest&&<p>{errors.guest.message}</p>}
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    تاريخ التدريب
                  </label>
                  <input
                   {...register('date')} 
                    type="date"
                    name="date"
                    id="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                             {errors.date&&<p className="text-red-500">{errors.date.message}</p>}
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    وقت التدريب
                  </label>
                  <input
                    {...register('time')} 
                    type="time"
                    name="time"
                    id="time"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  {errors.time&&<p className="text-red-500">{errors.time.message}</p>}
                </div>
              </div>
            </div>

            <div>
              <button className="bg-blue-600 hover:shadow-form rounded-md  hover:bg-blue-300 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                انشاء تدريب جديد
              </button>
              <button className=" bg-blue-600 hover:shadow-form rounded-md  hover:bg-blue-300 py-3 px-8 sm:mx-10 mt-5 text-center text-base font-semibold text-white outline-none">
                الغاء العملية
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CenterAdd;
