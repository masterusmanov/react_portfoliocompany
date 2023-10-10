import { Button } from "@mui/material";
import React, { useState } from "react";
import img1 from "../../Assets/Information/img1.svg"
import img2 from "../../Assets/Information/img2.svg"
import img3 from "../../Assets/Information/img3.svg"
import img4 from "../../Assets/Information/img4.svg"
import img5 from "../../Assets/Information/img5.svg"
import "./style.css";

const Information = () => {
  const [box, setbox] = useState([
    {
      malumot: "Tahlil va g'oya",
      text: "Ushbu bo'limda raqobatchilar tahlil qilinadi, bozor o'rganiladi. Va proektning dastlabki g'oylari paydo bo'ladi",
      img:img1
    },
    {
      malumot: "Auditoriya",
      text: "Maqsadli auditoriya tanlanadi, talablari o'rganilib, ularning ehtiyoji aniqlanadi",
      img:img2
    },
    {
      malumot: "Auditoriya",
      text: "Maqsadli auditoriya tanlanadi, talablari o'rganilib, ularning ehtiyoji aniqlanadi",
      img:img3
    },
    {
      malumot: "Strategiya",
      text: "Qilinishi kerak bo'lgan ishlar aniqlanadi, ularning ketma-ketiligi tuzib olinadi yani reja tuziladi",
      img:img4
    },
    {
      malumot: "Rivojlanish",
      text: "Reja asosida qilinishi kerak bo'lgan ishlar qilinadi va proekt muvaqqiyatli tugashi uchun sirli fishkalardan foydalniladi",
      img:img5
    },
  ]);
  return (
    <div className="container mx-auto">
      <div className="py-10">
        <h2 className="text-white md:text-[34px] font-bold">Biz qanday ishlaymiz</h2>
        <p className="text-white text-[10px] md:text-[14px] xl:text-[18px] ">IT-autsorsing kompaniyalari o'z mijozlarining ehtiyojlariga moslashtirilgan turli xizmatlarni taklif qilishadi.</p>
        <div className="mx-auto grid  md:flex flex-wrap gap-3 py-3">
          {box.map((item, index) => (
            <div className="w-full md:w-[48%] flex justify-beetwen items-center gap-3 border border-[#34BCA2] rounded-xl ">
              <img src={item.img} className="w-[70px] h-[100px] ml-5" alt="" />
              <div className="grid items-center">
                <h6 className="text-white font-Roboto text-[18px] font-[700]" >
                  {item.malumot}
                </h6>
                <p className="text-white font-Roboto text-[1.38] font-[400] ">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
    // <div className="px-[5.20vw] bg-[#04042F] py-[3.33vw] w-[100%] sm:overflow-hidden xs:overflow-hidden" style={{marginTop:"50px"}}>
    //   <h5 className="font-Roboto text-[3vw] font-[700] text-white" style={{marginLeft:"15px", fontSize:"24px"}}>
    //     Biz qanday ishlaymiz
    //   </h5>
    //   <h6 className="text-white font-Roboto text-[1.66vw] font-[400] pt-[1.66vw] pb-[2.22vw] w-[45vw] sm:text-[1.8vw] sm:w-[80%]" style={{marginLeft:"15px", fontSize:"10px"}}>
    //     IT-autsorsing kompaniyalari o'z mijozlarining ehtiyojlariga
    //     moslashtirilgan turli xizmatlarni taklif qilishadi.
    //   </h6>
    //   {/* <div className="w-[50vw] h-[60vh] absolute radius ml-[20vw] xsm:w-[50%] sm:flex-wrap xs:w-[100%] xs:flex-col"></div> */}
      
    // </div>
  );
};

export default Information;
