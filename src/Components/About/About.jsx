import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="px-[5.20vw] bg-[#104AF2] w-[100%] h-[80vh] sm:overflow-hidden xs:overflow-hidden xs:h-[50vh]" style={{backgroundColor:"#104AF2", padding:"5px"}}>
      <div className="py-[3.33vw]">    
        <h4 className="text-white font-Roboto text-[3vw] pb-[1.66vw] sm:text-[3vw] sm:pb-[1vw] xs:text-[4vw]" style={{fontSize:"30px", marginTop:"25px", marginLeft:"15px"}}>
          Bizning xizmatlarimiz
        </h4>
        <p className="text-white font-Roboto text-[1.66vw] font-[400] w-[50%] sm:w-[100%] sm:text-[1.8vw] xs:w-[100%]" style={{fontSize:"12px", marginLeft:"15px"}}>
          Mijozlar ehtiyojidan kelib chiqqan holda, xizmatlar taklif qilamiz.
        </p>
      </div>
      <div className="w-[100%] flex gap-[3vw] relative sm:flex-wrap sm:gap-[2vw]" style={{marginLeft:"15px"}}>
      <div className="flex-container">
        <div className="side-by-side">
          <div className="section">
            <h5 className="text-white text-info">
              IT
            </h5>
            <h6 className="text-info">
              Mobile progmmalar, veb saytlardan tortib CRM sistemasini tizimlashtirishgacha bo'lgan sifatli xizmatlar
            </h6>
          </div>
        </div>
        <div className="side-by-side">
          <div className="section">
            <h5 className="text-white text-info">
              Veb sayt
            </h5>
            <h6 className="text-info">
              Sayt dizaynini loyihalash, funksionalligini oshirish, brauzerlarda to'g'ri ishlashini taminlash va shu qator vazifalarni o'z ichiga oladi
            </h6>
          </div>
        </div>
      </div>
      <div className="flex-container">
        <div className="side-by-side">
          <div className="section">
            <h5 className="text-white text-info">
            Ta'lim
            </h5>
            <h6 className="text-info">
            IT ni mutaxasislardan o'rganing. Uzoq masofadan kelishingiz shart
            emas, siz shunchaki ro'yhatdan o'ting, biz oldingizga borib ilm
            ulashamiz
            </h6>
          </div>
        </div>
        <div className="side-by-side">
          <div className="section">
            <h5 className="text-white text-info">
            Cyber sport
            </h5>
            <h6 className="text-info">
            Ommabop va adrinalinga boy bo'lgan musobaqalar.
            </h6>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
