import { DatePicker, Table } from "antd";
import DropDown from "../components/ui/DropDown";
import Image from "next/image";
import Tree from "./Tree";
import { useState } from "react";
import {UploadIcon} from '@heroicons/react/solid'

const seasonData = [
  {
    title: " موسم رمضان",
    value: " موسم رمضان",
  },
  {
    title: " موسم الحج",
    value: "موسم الحج",
  },
];

const masrafData = [
  {
    title: "الحرم المكي",
    value: "الحرم المكي",
    children: [
      {
        title: "بئر زمزم",
        value: "بئر زمزم",
      },
      {
        title: "الكعبةالمشرفة",
        value: "الكعبة المشرفة",
      },
    ],
  },
  {
    title: "الحرم المدني",
    value: "الحرم المدني",
  },
  {
    title: "مساجد",
    value: "مساجد",
    children: [
      {
        title: "مسجد قباء",
        value: "مسجد قباء",
      },
      {
        title: "مسجد القبلتين ",
        value: "مسجد القبلتين",
      },
      {
        title: "مسجد الرحمة ",
        value: "مسجد الرحمة",
      },
      {
        title: "مسجد الميقات ",
        value: "مسجد الميقات",
      },
    ],
  },
];

const areaData = [
  {
    title: " مكة",
    value: "مكة",
  },
  {
    title: " المدينة",
    value: "المدينة",
  },
  {
    title: " الطائف",
    value: "الطائف",
  },
  {
    title: " الرياض",
    value: "الرياض",
  },
];

function Filters() {
  const [season, setSeason] = useState(undefined);
  const [masraf, setMasraf] = useState(undefined);
  const [area, setArea] = useState(undefined);
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  const handleReset = () => {
    setSeason(undefined);
    setMasraf(undefined);
    setArea(undefined);
    setDate(null);
  };

  const Results = () => {
    const columns = [
      {
        title: "المنطقة المختارة",
        dataIndex: "area",
        key: "area",
      },
      {
        title: "المصرف المختار",
        dataIndex: "masref",
        key: "masref",
      },
      {
        title: "الموسم المختار",
        dataIndex: "season",
        key: "season",
      },
      {
        title: " التاريخ المختار",
        dataIndex: "date",
        key: "date",
      },
    ];
    const dataSource = [
      {
        key: "1",
        area: area,
        masref: masraf,
        season: season,
        date: date,
      },
    ];

    return (
      <>
        <Table dataSource={dataSource} columns={columns} pagination={false} />;
      </>
    );
  };

  console.log(masraf);

  const handleSeason = (v) => {
    setSeason(v);
  };

  const handleMasraf = (v) => {
    setMasraf(v);
  };
  const handleArea = (v) => {
    setArea(v);
  };

  const handleDateChange = (v) => {
    const choosenDate = `${v?._d?.getDate()}-${
      v?._d?.getMonth() + 1
    }-${v?._d?.getFullYear()}`;
    setDate(choosenDate);
  };

  const showResults = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <div id="filters">
      <h1 className="text-3xl font-semibold text-center mt-10">
        اختر الوقف المناسب لك{" "}
      </h1>

      <div className="px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-between max-w-6xl mx-auto py-10 bg-green-500 px-10 rounded-xl my-10 shadow-lg">
          {/* <Area /> */}
          {/* <Masraf /> */}
          <Tree
            handleChange={handleArea}
            value={area}
            placeholder="من فضلك اختر منطقة"
            data={areaData}
          />
          <Tree
            handleChange={handleMasraf}
            value={masraf}
            placeholder="من فضلك اختر مصرف"
            data={masrafData}
          />
          <Tree
            handleChange={handleSeason}
            value={season}
            placeholder="اختر الموسم"
            data={seasonData}
          />
          <DatePicker placeholder="اختر التاريخ" onChange={handleDateChange} />
        </div>
        <div className="text-center my-10 overflow-hidden rounded-lg">
          <Image src="/map.jpg" height={500} width={800} className="hover:scale-110 transition duration-300 rounded-lg"/>
        </div>
        <div className="text-center mb-5">
          <button
            onClick={showResults}
            className="outline-none ml-5   bg-green-500 text-white px-5 py-2 rounded-md transition duration-200 hover:bg-green-400 hover:shadow-lg"
          >
            {show ? "اخفاء النتائج" : "عرض النتائج"}
          </button>
          <button
            onClick={handleReset}
            className="outline-none   bg-red-500 text-white px-5 py-2 rounded-md transition duration-200 hover:bg-red-400 hover:shadow-lg"
          >
            اعادة تعيين
          </button>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {show && <Results />}

          <div className="flex items-center justify-center">
             {show && (
            <button className="outline-none my-10 bg-green-500 text-white px-5 py-2 rounded-md transition duration-200 hover:bg-green-400 hover:shadow-lg">
              تصدير كملف اكسيل{" "}
            </button>
          )}
          <button className="outline-none my-10 mr-5 bg-green-500 transition duration-200 hover:bg-green-400 hover:shadow-lg text-white px-5 py-2 rounded-md flex items-center justify-between ">
            رفع ملف اكسيل{" "}
            <UploadIcon className="h-5 mr-3" />
          </button>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Filters;
