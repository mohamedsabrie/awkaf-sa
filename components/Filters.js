import { DatePicker, Table } from "antd";
import DropDown from "../components/ui/DropDown";
import Image from "next/image";
import Tree from "./Tree";
import { useState } from "react";
import {UploadIcon} from '@heroicons/react/solid'


const { RangePicker } = DatePicker;

import moment from 'moment';
import 'moment/locale/ar-sa'

moment.locale('ar-sa');


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
  {
    title: " سكن",
    value: " سكن",
  },
  {
    title: " سقيا",
    value: " سقيا",
    
  },
  
 
];

const areaData = [
  {
    title: " مكة المكرمة",
    value: "مكة المكرمة",
  },
  {
    title: " المدينة المنورة",
    value: "المدينة المنورة",
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
const branchesData = [
  {
    title: "  تفرع 1",
    value: " تفرع 1",
  },
  {
    title: "  تفرع 2 ",
    value: " تفرع 2",
  },
  {
    title: " تفرع 3",
    value: "تفرع 3",
  },
];

function Filters() {
  const [season, setSeason] = useState(undefined);
  const [masraf, setMasraf] = useState([]);
  const [branch, setBranch] = useState(undefined);
  const [area, setArea] = useState(undefined);
  const [date, setDate] = useState({});
  const [show, setShow] = useState(false);

  const handleReset = () => {
    setSeason(undefined);
    setMasraf(undefined);
    setArea(undefined);
    setDate({});
    setBranch(undefined)
  };

  const Results = () => {
    const columns = [
      {
        title: "المناطق المختارة",
        dataIndex: "area",
        key: "area",
      },
      {
        title: "المصارف المختارة",
        dataIndex: "masref",
        key: "masref",
      },
      {
        title: "التفرعات المختارة",
        dataIndex: "branch",
        key: "branch",
      },
      {
        title: "المواسم المختارة",
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
        area: area?.[0],
        masref: masraf?.[0],
        season: season?.[0],
        branch: branch?.[0],
        date: ` البداية: ${date?.start || ""}` ,
      },
      {
        key: "2",
        area: area?.[1],
        masref: masraf?.[1],
        season: season?.[1],
        branch: branch?.[1],
        date: ` النهاية:  ${date?.end || ""}` ,
      },
      {
        key: "3",
        area: area?.[2],
        masref: masraf?.[2],
        season: season?.[2],
        branch: branch?.[2],
      },
      {
        key: "4",
        area: area?.[3],
        masref: masraf?.[3],
        season: season?.[3],
        branch: branch?.[3],
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
    console.log(v)
  };
  const handleBranch = (v) => {
    setBranch(v);
  };
  const handleArea = (v) => {
    setArea(v);
  };


  const handleDateChange = (e) => {
    const [moment1, moment2]=  e;

    const start = `${moment1?._d?.getDate()}-${
      moment1?._d?.getMonth() + 1
    }-${moment1?._d?.getFullYear()}`;
    const end = `${moment2?._d?.getDate()}-${
      moment2?._d?.getMonth() + 1
    }-${moment2?._d?.getFullYear()}`;
    setDate({start, end});
  };
  console.log(date)

  const showResults = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <div id="filters">

      <div className="px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-between max-w-6xl mx-auto py-10 bg-green-500 px-10 rounded-xl my-10 shadow-lg">
          {/* <Area /> */}
          {/* <Masraf /> */}
          <Tree
            handleChange={handleArea}
            value={area}
            placeholder=" المنطقة"
            data={areaData}
          />
          <Tree
            handleChange={handleMasraf}
            value={masraf}
            placeholder="   المصارف"
            data={masrafData}
          />
          <Tree
            handleChange={handleBranch}
            value={branch}
            placeholder=" التفرعات"
            data={branchesData}
          />
          <Tree
            handleChange={handleSeason}
            value={season}
            placeholder=" المواسم"
            data={seasonData}
          />
          <RangePicker placeholder={["البداية","النهاية"]} onChange={handleDateChange}  />
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
              تصدير كملف Excell{" "}
            </button>
          )}
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Filters;
