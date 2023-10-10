import React from "react";
import navbar from "../../Assets/Navbar/navbar.svg";
import Vector from "../../Assets/Navbar/Vector.svg";
import Dropdown from '../DropdownFiles/Dropdown';
import Dropdownlanguage from '../DropdownFiles/Dropdownlanguage';


function NavScrollExample() {
  return (
    <div className="container">
      <div className="flex w-[100%] justify-between items-center gap-10 lg:hidden mt-2">
        <div className="w-1/2 ">
          <Dropdown className=""/>
        </div>
        <div className="w-1/2 grid justify-center items-center gap-1">
          <img src={Vector} alt="" className="w-[50%] mx-auto"/>
          <img src={navbar} alt="" className="w-[80%] mx-auto" />
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <Dropdownlanguage className="bg-none"/>
        </div>
      </div>
      <div className="hidden justify-between items-center gap-10 lg:flex p-2">
        <div className="w-1/2 flex justify-beetwen items-center gap-8 ">
          <div className="grid items-center gap-1">
            <img src={Vector} alt="" className="w-[70%] mx-auto"/>
            <img src={navbar} alt="" className="w-[100%] mx-auto" />
          </div>
          <a href="#" className="text-white no-underline ">Bosh sahifa</a>
          <a href="#" className="text-white no-underline">Portfolio</a>
          <div className="flex items-center">
          <a href="#" className="text-white no-underline">Cosinus academy</a>
          <p className="text-white text-[8px] bg-rose-700 p-1 rounded-lg">Yangi</p>
          </div>
        </div>
        <div className="w-1/3 flex justify-end items-center gap-6">
          <Dropdownlanguage className="bg-none"/>
          {/* <button className="text-white text-[7px] md:text-[12px] bg-blue-700 px-3 py-[10px] rounded-md">BOG'LANISH</button> */}
        </div>
      </div>
    </div>
  );
}

export default NavScrollExample;
