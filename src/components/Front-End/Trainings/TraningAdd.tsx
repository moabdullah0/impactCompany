import MiniDrawer from "../../Dashboard/Layout/LayoutHome";

const TraningAdd = () => {
  return (
    <div>
      <MiniDrawer />
      <div
        className="flex items-center justify-center p-12 mt-24 px-20"
        dir="rtl"
      >
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <h1 className="text-blue-600 mb-5 ">اضافة تدريب جديد</h1>
          <form method="POST">
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    عنوان التدريب
                  </label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="First Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    المركز الذي سيقام فيه التدريب
                  </label>
                  <select className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                    <option value="1">اختر مركز </option>
                    <option value="2">مركز اعزاز</option>
                    <option value="1">مركز الدانا</option>
                    <option value="1">مركز سرمدا</option>
                  </select>
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    القاعة
                  </label>
                  <select className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                    <option value="1">اختر القاعة </option>
                    <option value="2">القاعة الاولى</option>
                    <option value="3">القاعة الثانية</option>
                    <option value="4">القاعة الثالثة</option>
                    <option value="5">القاعة الرابعة</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                عدد الحاضرين للتدريب
              </label>
              <input
                type="number"
                name="guest"
                id="guest"
                placeholder="5"
                min="0"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    تاريخ التدريب
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    وقت التدريب
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
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

export default TraningAdd;
