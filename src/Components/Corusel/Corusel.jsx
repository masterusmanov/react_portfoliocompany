import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Style.css";
import { Pagination } from "swiper/modules";
import img1 from "../../Assets/Corusel/img1.png"
import img2 from "../../Assets/Corusel/img2.png"
import img3 from "../../Assets/Corusel/img3.png"

const Corusel = () => {
  return (
    <div className="bg-nav px-[5.20vw] w-[100%] sm:overflow-hidden xs:overflow-hidden xs:z-[999]" style={{marginTop:"75px"}}>
      <div className="flex w-[100%] sm:flex-col">
        <div className="w-[40vw] sm:w-[100%]">
          <h4 className="text-white font-Roboto text-[2.88vw] font-[700] sm:text-[3]" style={{marginLeft:"15px"}}>
            Bizning Jamoa
          </h4>
          <p className="text-white   font-Roboto text-[1.3vw] font-[400] sm:text-[1.8vw]" style={{marginLeft:"15px"}}>
            Jamoa o'z sohasining ustasi bo'lgan mutahasislardan yig'ilgan.
            Jamoamizning har bir a'zosi loyihangizni muvafaqqiyatga yetaklaydi.
          </p>
          <h1 className="font-Roboto text-[6.11vw] font-[700] sm:text-[7vw]" 
          style={{color: "#3C4BDC", fontWeight: "bold", fontSize: "40px", marginLeft:"15px"}}>
            15+
          </h1>
          <p className="text-white font-Roboto text-[1.66vw] font-[400] sm:text-[1.8vw]" style={{marginLeft:"15px"}}>
            Muvaffaqiyatli topshirgan ishlarimiz
          </p>
          <div className="w-[50vh] h-[50vh] liner xs:h-[30vh]"></div>
        </div>
        <div className="w-[60vw] sm:mt-[-28vw] sm:w-[130%] sm:ml-[-8vw] xs:mt-[-28vw] xs:w-[130%] xs:ml-[-8vw] carus xs:h-[40vh]">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={15}
            autoplay={{
              delay: 6500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft
            className="mySwiper"
          >
            <SwiperSlide style={{border: '2px solid #34BCA2'}} className="flex flex-col w-[20.83vw] h-[31.25vw] cursor-pointer rounded-[8px]">
              <img
                src={img1}
                alt=""
                className="w-[20.83vw] h-[20.25vw] rounded-[8px]"
              />
             <h3 className="text-white font-Roboto text-[1.66vw] font-[700] textinfo">Suyunov Elbek</h3>
             <h5 className="text-white font-Roboto text-[1.66vw] font-[500] textinfo">UI/UX dizayner</h5>
            </SwiperSlide>           
            <SwiperSlide style={{border: '2px solid #34BCA2'}} className="flex flex-col w-[20.83vw] h-[31.25vw] cursor-pointer rounded-[8px]">
              <img
                src={img2}
                alt=""
                className="w-[20.83vw] h-[20.25vw] rounded-[8px]"
              />
             <h3 className="text-white font-Roboto text-[1.66vw] font-[700] textinfo">Suyunov Elbek</h3>
             <h5 className="text-white font-Roboto text-[1.66vw] font-[500] textinfo">UI/UX dizayner</h5>
            </SwiperSlide>           
            <SwiperSlide style={{border: '2px solid #34BCA2'}} className="flex flex-col w-[20.83vw] h-[31.25vw] cursor-pointer rounded-[8px]">
              <img
                src={img1}
                alt=""
                className="w-[20.83vw] h-[20.25vw] rounded-[8px]"
              />
             <h3 className="text-white font-Roboto text-[1.66vw] font-[700] textinfo">Suyunov Elbek</h3>
             <h5 className="text-white font-Roboto text-[1.66vw] font-[500] textinfo">UI/UX dizayner</h5>
            </SwiperSlide>           
            <SwiperSlide style={{border: '2px solid #34BCA2'}} className="flex flex-col w-[20.83vw] h-[31.25vw] cursor-pointer rounded-[8px]">
              <img
                src={img3}
                alt=""
                className="w-[20.83vw] h-[20.25vw] rounded-[8px]"
              />
             <h3 className="text-white font-Roboto text-[1.66vw] font-[700] textinfo">Suyunov Elbek</h3>
             <h5 className="text-white font-Roboto text-[1.66vw] font-[500] textinfo">UI/UX dizayner</h5>
            </SwiperSlide>           
            <SwiperSlide style={{border: '2px solid #34BCA2'}} className="flex flex-col w-[20.83vw] h-[31.25vw] cursor-pointer rounded-[8px]">
              <img
                src={img3}
                alt=""
                className="w-[20.83vw] h-[20.25vw] rounded-[8px]"
              />
             <h3 className="text-white font-Roboto text-[1.66vw] font-[700] textinfo">Suyunov Elbek</h3>
             <h5 className="text-white font-Roboto text-[1.66vw] font-[500] textinfo">UI/UX dizayner</h5>
            </SwiperSlide>           
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Corusel;
