import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Input } from "postcss";
import Tree from "../components/Tree";
import Item from "antd/lib/list/Item";
import { v4 as uuidv4 } from 'uuid';
import {CheckIcon, ChevronDownIcon, ChevronUpIcon, XIcon} from '@heroicons/react/outline'

function Test() {
  const [show, setShow] = useState(false);
  const [br0, setBr0] = useState("bg-white");
  const [br1, setBr1] = useState("bg-white");
  const [br2, setBr2] = useState("bg-white");
  const [result, setResult] = useState([]);

  const branch1 = useRef(null);
  const branch2 = useRef(null);
  const branch3 = useRef(null);
  const inputRef = useRef(null);

  const handleShowBranches = () => {
    setShow((prev) => !prev);
  };

  const handleBranch1Click = function (e) {
    if (br0 === "bg-white") {
      setBr0("bg-green-500");
      setResult((prev) => [...prev, e]);
    } else if (br0 === "bg-green-500") {
      setBr0("bg-red-500");
      setResult((prev) => prev.filter((item) => item !== e));
    } else if (br0 === "bg-red-500") {
      setBr0("bg-white");
    }
  };
  const handleBranch2Click = function (e) {
    if (br1 === "bg-white") {
      setBr1("bg-green-500");
      setResult((prev) => [...prev, e]);
    } else if (br1 === "bg-green-500") {
      setBr1("bg-red-500");
      setResult((prev) => prev.filter((item) => item !== e));
    } else if (br1 === "bg-red-500") {
      setBr1("bg-white");
    }
  };
  const handleBranch3Click = function (e) {
    if (br2 === "bg-white") {
      setBr2("bg-green-500");
      setResult((prev) => [...prev, e]);
    } else if (br2 === "bg-green-500") {
      setBr2("bg-red-500");
      setResult((prev) => prev.filter((item) => item !== e));
    } else if (br2 === "bg-red-500") {
      setBr2("bg-white");
    }
  };

  console.log(result);

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
  const [branch, setBranch] = useState(undefined);
  const handleBranch = (v) => {
    setBranch(v);
  };

  // useEffect(() => {
  //   const dropDown = document.querySelectorAll(".ant-select-tree-checkbox-inner");
  //   dropDown.forEach((item, i, arr) => {
  //     item.addEventListener("click", ()=>{
  //       item.classList.toggle("!bg-green-500")
  //     })

  //   })

  //   dropDown.forEach((item, i, arr) => arr[0].addEventListener("click", handleBranch1Click))

  // }, [branch]);

  const removeElement = (v)=>{
    setResult((prev) => prev.filter((item) => item !== v));
    if(v === "تفرع1"){
      setBr0("bg-white")
    }
    if(v === "تفرع2"){
      setBr1("bg-white")
    }
    if(v === "تفرع3"){
      setBr2("bg-white")
    }

  }

  const ResultData = ()=>{
    return (
     <div className="flex items-center   h-full ">
       {result.map(item => (
         <div className="flex items-center justify-center px-2 bg-gray-100 mx-1" key= {uuidv4()} >
           <XIcon className="h-3"  onClick={()=> removeElement(item)} />
           {item}
           </div>
       ))}
     </div>
    )
    
  }

  return (
    <div className="flex h-screen  items-center justify-center ">
      {/* <Tree
        handleChange={handleBranch}
        value={branch}
        placeholder=" التفرعات"
        data={branchesData}
      /> */}
      <div className="relative">
        <span className="absolute flex items-center justify-center right-0 top-0 w-10 h-[28px] bg-white border"  onClick={handleShowBranches}>
         {show ? <ChevronUpIcon className="h-4" />: <ChevronDownIcon className="h-4" /> } 
        </span>
        <div
          ref={inputRef}
          placeholder="Branches"
          className="min-h-[28px] bg-white border w-[300px] mr-10 flex items-center" 
        >

<ResultData />
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-y-0"
          enterTo="transform opacity-100 scale-y-100"
          leave="transition ease-in duration-300"
          leaveFrom="transform opacity-100 scale-y-100"
          leaveTo="transform opacity-0 scale-y-0"
          show={show}
        >
          <div className="absolute flex flex-col top-full left-0 w-full bg-white">
            <div className="flex items-center gap-x-2 ">
              <span
                ref={branch1}
                onClick={() => handleBranch1Click("تفرع1")}
                className={`w-4 h-4 sp ${br0} border border-gray-500 flex items-center justify-center`}
              >

                {br0 === "bg-green-500" ? <CheckIcon className="h-4" /> : br0 === "bg-red-500"? <XIcon className="h-2" /> : ""}
              </span>
              <p>تفرع1</p>
            </div>
            <div className="flex items-center gap-x-2 ">
              <span
                ref={branch2}
                onClick={() => handleBranch2Click("تفرع2")}
                className={`w-4 h-4 sp ${br1}  border border-gray-500`}
              >
                {br1 === "bg-green-500" ? <CheckIcon className="h-4" /> : br1 === "bg-red-500"? <XIcon className="h-4" /> : ""}
              </span>
              <p>تفرع2</p>
            </div>
            <div className="flex items-center gap-x-2 ">
              <span
                ref={branch3}
                onClick={() => handleBranch3Click("تفرع3")}
                className={`w-4 h-4 sp ${br2}  border border-gray-500`}
              >

{br2 === "bg-green-500" ? <CheckIcon className="h-4" /> : br2 === "bg-red-500"? <XIcon className="h-4" /> : ""}

              </span>
              <p>تفرع3</p>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}

export default Test;
