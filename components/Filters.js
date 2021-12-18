import { DatePicker, Table } from "antd";
import DropDown from "../components/ui/DropDown";
import Image from "next/image";
import { UploadIcon } from "@heroicons/react/solid";
// import { branchesResult } from "./BranchesTree";
import { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import Tree from "../components/Tree";
import { v4 as uuidv4 } from "uuid";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XIcon,
} from "@heroicons/react/outline";

const { RangePicker } = DatePicker;

import moment from "moment";
import "moment/locale/ar-sa";
import BranchesTree from "./BranchesTree";

moment.locale("ar-sa");

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

  const [showBranches, setShowBranches] = useState(false);
  const [br0, setBr0] = useState("bg-white");
  const [br1, setBr1] = useState("bg-white");
  const [br2, setBr2] = useState("bg-white");
  const [branchesResult, setBranchesResult] = useState([]);
  const branch1 = useRef(null);
  const branch2 = useRef(null);
  const branch3 = useRef(null);
  const inputRef = useRef(null);
  const branchesRef = useRef(null);

  const handleShowBranches = () => {
    setShowBranches((prev) => !prev);
  };

  const handleBranch1Click = function (e) {
    if (br0 === "bg-white") {
      setBr0("bg-blue-500");
      setBranchesResult((prev) => [...prev, e]);
    } else if (br0 === "bg-blue-500") {
      setBr0("bg-red-500");
      setBranchesResult((prev) => prev.filter((item) => item !== e));
    } else if (br0 === "bg-red-500") {
      setBr0("bg-white");
    }
  };
  const handleBranch2Click = function (e) {
    if (br1 === "bg-white") {
      setBr1("bg-blue-500");
      setBranchesResult((prev) => [...prev, e]);
    } else if (br1 === "bg-blue-500") {
      setBr1("bg-red-500");
      setBranchesResult((prev) => prev.filter((item) => item !== e));
    } else if (br1 === "bg-red-500") {
      setBr1("bg-white");
    }
  };
  const handleBranch3Click = function (e) {
    if (br2 === "bg-white") {
      setBr2("bg-blue-500");
      setBranchesResult((prev) => [...prev, e]);
    } else if (br2 === "bg-blue-500") {
      setBr2("bg-red-500");
      setBranchesResult((prev) => prev.filter((item) => item !== e));
    } else if (br2 === "bg-red-500") {
      setBr2("bg-white");
    }
  };

  const removeElement = (v) => {
    setBranchesResult((prev) => prev.filter((item) => item !== v));
    if (v === "تفرع1") {
      setBr0("bg-white");
    }
    if (v === "تفرع2") {
      setBr1("bg-white");
    }
    if (v === "تفرع3") {
      setBr2("bg-white");
    }
  };

  const ResultData = () => {
    return (
      <div className="flex items-center   h-full ">
        {branchesResult.map((item) => (
          <div
            className="flex items-center justify-center px-2 bg-gray-100 mx-1"
            key={uuidv4()}
          >
            <XIcon
              className="h-3 text-gray-800 cursor-pointer hover:scale-110 ml-2 transition ease-in-out duration-200 "
              onClick={() => removeElement(item)}
            />
            {item}
          </div>
        ))}
      </div>
    );
  };

  const handleReset = () => {
    setSeason(undefined);
    setMasraf(undefined);
    setArea(undefined);
    setDate({});
    setBranch(undefined);
    setBranchesResult([]);
    setBr0("bg-white");
    setBr1("bg-white");
    setBr2("bg-white");
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
        branch: branchesResult?.[0],
        date: ` البداية: ${date?.start || ""}`,
      },
      {
        key: "2",
        area: area?.[1],
        masref: masraf?.[1],
        season: season?.[1],
        branch: branchesResult?.[1],
        date: ` النهاية:  ${date?.end || ""}`,
      },
      {
        key: "3",
        area: area?.[2],
        masref: masraf?.[2],
        season: season?.[2],
        branch: branchesResult?.[2],
      },
      {
        key: "4",
        area: area?.[3],
        masref: masraf?.[3],
        season: season?.[3],
        branch: branchesResult?.[3],
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
    console.log(v);
  };
  const handleBranch = (v) => {
    setBranch(v);
  };
  const handleArea = (v) => {
    setArea(v);
  };

  const handleDateChange = (e) => {
    const [moment1, moment2] = e;

    const start = `${moment1?._d?.getDate()}-${
      moment1?._d?.getMonth() + 1
    }-${moment1?._d?.getFullYear()}`;
    const end = `${moment2?._d?.getDate()}-${
      moment2?._d?.getMonth() + 1
    }-${moment2?._d?.getFullYear()}`;
    setDate({ start, end });
  };
  console.log(date);

  const showResults = () => {
    setShow((prevState) => !prevState);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        showBranches &&
        branchesRef.current &&
        !branchesRef.current.contains(e.target)
      ) {
        setShowBranches(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showBranches]);

  

  return (
    <div id="filters">
      <div className="px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10 items-center justify-between max-w-6xl mx-auto py-10 bg-green-500 px-10 rounded-xl my-10 shadow-lg">
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

          <div className="relative" ref={branchesRef}>
            <span
              className="absolute flex items-center justify-center right-0 top-0 w-10 h-[28px] bg-white border"
              onClick={handleShowBranches}
            >
              {showBranches ? (
                <ChevronUpIcon className="h-4 cursor-pointer" />
              ) : (
                <ChevronDownIcon className="h-4 cursor-pointer" />
              )}
            </span>
            <div
              ref={inputRef}
              placeholder="Branches"
              className="min-h-[28px] bg-white border  mr-10 flex items-center"
            >
              {branchesResult.length ? (
                <ResultData />
              ) : (
                <span className="text-sm text-gray-500 mr-4">التفرعات</span>
              )}
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="transform opacity-0 height-0"
              enterTo="transform opacity-100 height-100"
              leave="transition ease-in duration-300"
              leaveFrom="transform opacity-100 height-100"
              leaveTo="transform opacity-0 height-0"
              show={showBranches}
            >
              <div className="absolute  z-20 flex flex-col top-full mt-1 left-0 w-full bg-white py-2 pr-6 pl-2">
                <div className="flex items-center gap-x-2  ">
                  <span
                    ref={branch1}
                    onClick={() => handleBranch1Click("تفرع1")}
                    className={`w-4 h-4 rounded-sm ${br0} border border-gray-500 flex items-center justify-center cursor-pointer`}
                  >
                    {br0 === "bg-blue-500" ? (
                      <CheckIcon className="h-4 text-white " />
                    ) : br0 === "bg-red-500" ? (
                      <XIcon className="h-4" />
                    ) : (
                      ""
                    )}
                  </span>
                  <p
                    className="hover:bg-gray-100 flex-1 p-1 cursor-pointer rounded-sm transition duration-200 ease-out"
                    onClick={() => handleBranch1Click("تفرع1")}
                  >
                    تفرع1
                  </p>
                </div>
                <div className="flex items-center gap-x-2 ">
                  <span
                    ref={branch2}
                    onClick={() => handleBranch2Click("تفرع2")}
                    className={`w-4 h-4 rounded-sm  ${br1}  border border-gray-500 flex items-center justify-center cursor-pointer`}
                  >
                    {br1 === "bg-blue-500" ? (
                      <CheckIcon className="h-4 text-white " />
                    ) : br1 === "bg-red-500" ? (
                      <XIcon className="h-4" />
                    ) : (
                      ""
                    )}
                  </span>
                  <p
                    className="hover:bg-gray-100 flex-1 p-1 cursor-pointer rounded-sm transition duration-200 ease-out"
                    onClick={() => handleBranch2Click("تفرع2")}
                  >
                    تفرع2
                  </p>
                </div>
                <div className="flex items-center gap-x-2 ">
                  <span
                    ref={branch3}
                    onClick={() => handleBranch3Click("تفرع3")}
                    className={`w-4 h-4 rounded-sm  ${br2}  border border-gray-500 flex items-center justify-center cursor-pointer`}
                  >
                    {br2 === "bg-blue-500" ? (
                      <CheckIcon className="h-4 text-white " />
                    ) : br2 === "bg-red-500" ? (
                      <XIcon className="h-4" />
                    ) : (
                      ""
                    )}
                  </span>
                  <p
                    className="hover:bg-gray-100 flex-1 p-1 cursor-pointer rounded-sm transition duration-200 ease-out"
                    onClick={() => handleBranch3Click("تفرع3")}
                  >
                    تفرع3
                  </p>
                </div>
              </div>
            </Transition>
          </div>

          <Tree
            handleChange={handleSeason}
            value={season}
            placeholder=" المواسم"
            data={seasonData}
          />
          <RangePicker
            placeholder={["البداية", "النهاية"]}
            onChange={handleDateChange}
          />
        </div>
        <div className="text-center my-10 overflow-hidden rounded-lg">
          <Image
            src="/map.jpg"
            height={500}
            width={800}
            className="hover:scale-110 transition duration-300 rounded-lg"
          />
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
                تصدير كملف Excel{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
