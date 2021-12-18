import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Input } from "postcss";
import Tree from "../components/Tree";
import Item from "antd/lib/list/Item";
import { v4 as uuidv4 } from 'uuid';
import {CheckIcon, ChevronDownIcon, ChevronUpIcon, XIcon} from '@heroicons/react/outline'

function BranchesTree() {
  const [show, setShow] = useState(false);
  const [br0, setBr0] = useState("bg-white");
  const [br1, setBr1] = useState("bg-white");
  const [br2, setBr2] = useState("bg-white");
  const [branchesResult, setBranchesResult] = useState([]);
  const branch1 = useRef(null);
  const branch2 = useRef(null);
  const branch3 = useRef(null);
  const inputRef = useRef(null);

  const handleShowBranches = () => {
    setShow((prev) => !prev);
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

  const removeElement = (v)=>{
    setBranchesResult((prev) => prev.filter((item) => item !== v));
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
       {branchesResult.map(item => (
         <div className="flex items-center justify-center px-2 bg-gray-100 mx-1" key= {uuidv4()} >
           <XIcon className="h-3"  onClick={()=> removeElement(item)} />
           {item}
           </div>
       ))}
     </div>
    )
    
  }

  return (
    <div className=" items-center justify-center ">
     
      <div className="relative">
        <span className="absolute flex items-center justify-center right-0 top-0 w-10 h-[28px] bg-white border"  onClick={handleShowBranches}>
         {show ? <ChevronUpIcon className="h-4" />: <ChevronDownIcon className="h-4" /> } 
        </span>
        <div
          ref={inputRef}
          placeholder="Branches"
          className="min-h-[28px] bg-white border  mr-10 flex items-center" 
        >
          {branchesResult.length ? <ResultData /> : <span className="text-sm text-gray-500 mr-4">التفرعات</span> }


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
          <div className="absolute flex flex-col top-full mt-1 left-0 w-full bg-white py-2 px-6">
            <div className="flex items-center gap-x-2 mb-2 ">
              <span
                ref={branch1}
                onClick={() => handleBranch1Click("تفرع1")}
            className={`w-4 h-4 rounded-sm ${br0} border border-gray-500 flex items-center justify-center cursor-pointer`}
              >

                {br0 === "bg-blue-500" ? <CheckIcon className="h-4 text-white " /> : br0 === "bg-red-500"? <XIcon className="h-4" /> : ""}
              </span>
              <p>تفرع1</p>
            </div>
            <div className="flex items-center gap-x-2  mb-2 ">
              <span
                ref={branch2}
                onClick={() => handleBranch2Click("تفرع2")}
                className={`w-4 h-4 rounded-sm  ${br1}  border border-gray-500 flex items-center justify-center cursor-pointer`}
              >
                {br1 === "bg-blue-500" ? <CheckIcon className="h-4 text-white " /> : br1 === "bg-red-500"? <XIcon className="h-4" /> : ""}
              </span>
              <p>تفرع2</p>
            </div>
            <div className="flex items-center gap-x-2  mb-2 ">
              <span
                ref={branch3}
                onClick={() => handleBranch3Click("تفرع3")}
                className={`w-4 h-4 rounded-sm  ${br2}  border border-gray-500 flex items-center justify-center cursor-pointer`}
              >

{br2 === "bg-blue-500" ? <CheckIcon className="h-4 text-white " /> : br2 === "bg-red-500"? <XIcon className="h-4" /> : ""}

              </span>
              <p>تفرع3</p>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
 
}

export default BranchesTree;
