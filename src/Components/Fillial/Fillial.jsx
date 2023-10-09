import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Pagination } from "swiper/modules";
import adrenaline from "../../Assets/Fillial/adrenaline.svg"
import auto from "../../Assets/Fillial/auto.svg"
import house from "../../Assets/Fillial/house.svg"
import itpark from "../../Assets/Fillial/itpark.svg"


const Fillial = () => {
  return (
    <div className="pl-[5.20vw] bg-nav pt-[8.95vw] overflow-hidden" style={{marginTop:"50px", height:"25vh"}}>
      <h2 className="font-Roboto text-[3.58vw] font-[700] text-white" style={{marginLeft:"15px"}}>
        Bizga ishonch bildirgan kompaniyalar:
      </h2>
      <p className="text-white font-Roboto text-[1.66vw] font-[400] pt-[1.66vw] w-[50vw] pb-[3.33vw] sm:text-[1.8vw]" style={{marginLeft:"15px", fontSize:"10px"}}>
        IT-autsorsing kompaniyalari o'z mijozlarining ehtiyojlariga
        moslashtirilgan turli xizmatlarni taklif qilishadi..
      </p>
      <div>
        <div className="w-[70%] h-[40vh] absolute ml-[15vw]"></div>
        <div className="swiper_father">
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={15}
            
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft
            className="mySwiper"
          >
            <SwiperSlide className="flex flex-col w-[15.27vw] h-[6.94vw] cursor-pointer">
             <img src={itpark} alt="" />
            </SwiperSlide>                     
            <SwiperSlide className="flex flex-col w-[15.27vw] h-[6.94vw] cursor-pointer">
             <img  src={house} alt="" />
            </SwiperSlide>                     
            <SwiperSlide className="flex flex-col w-[15.27vw] h-[6.94vw] cursor-pointer">
             <img src={auto} alt="" />
            </SwiperSlide>                     
            <SwiperSlide className="flex flex-col w-[15.27vw] h-[6.94vw] cursor-pointer">
             <img src={adrenaline} alt="" />
            </SwiperSlide>                     
            <SwiperSlide className="flex flex-col w-[15.27vw] h-[6.94vw] cursor-pointer">
             <img src={auto} alt="" />
            </SwiperSlide>                     
            <SwiperSlide className="flex flex-col w-[15.27vw] h-[6.94vw] cursor-pointer">
             <img src={house} alt="" />
            </SwiperSlide>                     
            <SwiperSlide className="flex flex-col w-[15.27vw] h-[6.94vw] cursor-pointer">
             <img src={itpark} alt="" />
            </SwiperSlide>                    
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Fillial;
