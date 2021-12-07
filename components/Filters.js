import { DatePicker } from "antd";
import DropDown from "../components/ui/DropDown";
import Image from 'next/image'
function Filters() {
  return (
    <div className="h-screen" id="filters">
      <h1 className="text-3xl font-semibold text-center mt-10">
        اختر الوقف المناسب لك{" "}
      </h1>
      <div className="flex items-center justify-between max-w-6xl mx-auto py-10 bg-white px-10 rounded-xl my-10 shadow-lg">
        <DropDown
          title="الموقع"
          option1="مكة"
          option2="المدينة"
          option3="الطائف"
        />
        <DropDown
          title="المصرف"
          option1="الحرم المكي"
          option2="الحرم المدني"
          option3="مساجد"
        />
        <DropDown
          title="المواسم"
          option1="رمضان"
          option2="موسم الحج"
        />
        <DatePicker placeholder="اختر التاريخ" />
      </div>
      <div className="text-center">

      <Image src="/saudi_arabia-map.gif" height={500} width={800}  />
      </div>
    </div>
  );
}

export default Filters;
