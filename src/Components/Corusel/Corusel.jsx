import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import Swiperslide from "../DropdownFiles/SwiperSlide";

function Corusel() {
  return (
    <div className="container mx-auto md:flex mt-14 md:mt-[100px] xl:mt-[100px] gap-6">
      <div className="md:w-1/2 ">
        <h2 className="text-white md:text-[34px] font-bold">Bizning Jamoa</h2>
        <p className="text-white text-[10px] md:text-[14px] ">Jamoa o'z sohasining ustasi bo'lgan mutahasislardan yig'ilgan. Jamoamizning har bir a'zosi loyihangizni muvafaqqiyatga yetaklaydi.</p>
        <h1 className="text-[#3C4BDC] font-bold lg:text-[48px]">15+</h1>
        <p className="text-white text-[14px] md:text-[20px]">Muvaffaqiyatli topshirgan ishlarimiz</p>
      </div>
      <div className="md:w-1/2  flex justify-center items-center">
        <Swiperslide className="lg:hidden"/>
      </div>
    </div>
  );
}

export default Corusel;
