import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from "../../Assets/Corusel/img1.png"
import img2 from "../../Assets/Corusel/img2.png"
import img3 from "../../Assets/Corusel/img3.png"


function Swiperslide () {
    return (
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={25}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
            <div className="bg-[#303CB0] rounded-lg">
                <img src={img1} alt="" className="w-[350px] h-[150px] md:h-[150px] lg:h-[150px] object-cover object-left-top rounded-lg"/>
                <div className="text-white text-center mt-2">
                    <h6 className="text-[12px]">Suyunov Elbek</h6>
                    <p className="text-[10px]">UI/UX dizayner</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="bg-[#303CB0] rounded-lg">
                <img src={img1} alt="" className="w-[350px] h-[150px] md:h-[150px] lg:h-[150px] object-cover object-left-top rounded-lg"/>
                <div className="text-white text-center mt-2">
                    <h6 className="text-[12px]">Suyunov Elbek</h6>
                    <p className="text-[10px]">UI/UX dizayner</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="bg-[#303CB0] rounded-lg">
                <img src={img1} alt="" className="w-[350px] h-[150px] md:h-[150px] lg:h-[150px] object-cover object-left-top rounded-lg"/>
                <div className="text-white text-center mt-2">
                    <h6 className="text-[12px]">Suyunov Elbek</h6>
                    <p className="text-[10px]">UI/UX dizayner</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="bg-[#303CB0] rounded-lg">
                <img src={img1} alt="" className="w-[350px] h-[150px] md:h-[150px] lg:h-[150px] object-cover object-left-top rounded-lg"/>
                <div className="text-white text-center mt-2">
                    <h6 className="text-[12px]">Suyunov Elbek</h6>
                    <p className="text-[10px]">UI/UX dizayner</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="bg-[#303CB0] rounded-lg">
                <img src={img1} alt="" className="w-[350px] h-[150px] md:h-[150px] lg:h-[150px] object-cover object-left-top rounded-lg"/>
                <div className="text-white text-center mt-2">
                    <h6 className="text-[12px]">Suyunov Elbek</h6>
                    <p className="text-[10px]">UI/UX dizayner</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="bg-[#303CB0] rounded-lg">
                <img src={img1} alt="" className="w-[350px] h-[150px] md:h-[150px] lg:h-[150px] object-cover object-left-top rounded-lg"/>
                <div className="text-white text-center mt-2">
                    <h6 className="text-[12px]">Suyunov Elbek</h6>
                    <p className="text-[10px]">UI/UX dizayner</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    );
  };

  export default Swiperslide;