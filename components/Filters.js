import { DatePicker } from "antd";
import DropDown from "../components/ui/DropDown";
import Image from 'next/image'
import Masraf from "./ui/TreeSelect";
import Area from "./Area";
import Time from "./Time";
function Filters() {
  return (
    <div className="h-screen" id="filters">
      <h1 className="text-3xl font-semibold text-center mt-10">
        اختر الوقف المناسب لك{" "}
      </h1>
      <div className="px-10">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-between max-w-6xl mx-auto py-10 bg-green-500 px-10 rounded-xl my-10 shadow-lg">
      <Area />
        <Masraf />
        <Time />
        <DatePicker placeholder="اختر التاريخ" />
      </div> 
      </div>
      

      
      <div className="text-center">

      <Image src="/saudi_arabia-map.gif" height={500} width={800}  />
      </div>
    </div>
  );
}

export default Filters;
