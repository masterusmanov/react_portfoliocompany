import React from "react";
import Lottie from "lottie-react";
import Group from "../../Assets/Home/Group.json";
import cosinus from "../../Assets/Home/Cosinus.png"

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="grid md:flex md:justify-center md:items-center mt-5 px-2">
        <div className="">
          <img src={cosinus} alt="" className="w-[35%] md:w-[40%]"/>
          <h2 className="text-white md:text-[40px] font-bold">IT-kompaniyasi</h2>
          <p className="text-white text-[14px] md:text-[24px] md:mt-10">Mijozlar ehtiyojidan kelib chiqqan holda, xizmatlar taklif qilamiz.</p>
          <button className="text-white text-[7px] md:text-[12px] bg-blue-700 px-4 py-2 rounded-md md:mt-10">BOG'LANISH</button>
        </div>
        <div>
        <div className="flex mt-3 ">
          <Lottie className="relative w-[80%] lg:w-[90%] mx-auto"  animationData={Group} loop={true} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
