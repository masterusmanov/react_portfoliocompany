import { Button } from "@mui/material";
import React, { useState } from "react";
import img from "../../Assets/Information/img..jpg"
import img1 from "../../Assets/Information/img...jpg"
import img2 from "../../Assets/Information/img....jpg"
import img3 from "../../Assets/Information/img.....jpg"
import img4 from "../../Assets/Information/img.......jpg"
import "./style.css";

const Information = () => {
  const [box, setbox] = useState([
    {
      malumot: "Tahlil va g'oya",
      text: "Ushbu bo'limda raqobatchilar tahlil qilinadi, bozor o'rganiladi. Va proektning dastlabki g'oylari paydo bo'ladi",
      img:img
    },
    {
      malumot: "Auditoriya",
      text: "Maqsadli auditoriya tanlanadi, talablari o'rganilib, ularning ehtiyoji aniqlanadi",
      img:img1
    },
    {
      malumot: "Auditoriya",
      text: "Maqsadli auditoriya tanlanadi, talablari o'rganilib, ularning ehtiyoji aniqlanadi",
      img:img2
    },
    {
      malumot: "Strategiya",
      text: "Qilinishi kerak bo'lgan ishlar aniqlanadi, ularning ketma-ketiligi tuzib olinadi yani reja tuziladi",
      img:img3
    },
    {
      malumot: "Rivojlanish",
      text: "Reja asosida qilinishi kerak bo'lgan ishlar qilinadi va proekt muvaqqiyatli tugashi uchun sirli fishkalardan foydalniladi",
      img:img4
    },
  ]);
  return (
    <div className="px-[5.20vw] bg-[#04042F] py-[3.33vw] w-[100%] sm:overflow-hidden xs:overflow-hidden" style={{marginTop:"50px"}}>
      <h5 className="font-Roboto text-[3vw] font-[700] text-white" style={{marginLeft:"15px", fontSize:"24px"}}>
        Biz qanday ishlaymiz
      </h5>
      <h6 className="text-white font-Roboto text-[1.66vw] font-[400] pt-[1.66vw] pb-[2.22vw] w-[45vw] sm:text-[1.8vw] sm:w-[80%]" style={{marginLeft:"15px", fontSize:"10px"}}>
        IT-autsorsing kompaniyalari o'z mijozlarining ehtiyojlariga
        moslashtirilgan turli xizmatlarni taklif qilishadi.
      </h6>
      {/* <div className="w-[50vw] h-[60vh] absolute radius ml-[20vw] xsm:w-[50%] sm:flex-wrap xs:w-[100%] xs:flex-col"></div> */}
      <div className="flex flex-wrap gap-[1vw] sm:gap-[3.2vw] xs:flex-col xs:w-[100%] bor" style={{width:"100%", textAlign:"center", display:"flex", flexWrap:"wrap", margin:"15px",  gap:"15px"}}>
        {box.map((item, index) => (
          <div
            style={{width:"45%", display:"flex", justifyContent:"center", border: "1px solid #34BCA2", borderRadius: "15px" }}
            className="w-[27.47vw] p-[1.46vw] rounded-[8px] flex gap-[1vw] sm:w-[40vw] sm:justify-center sm:gap-[1vw] xs:m-auto border1"
          >
            <div className="xs:h-[50px]" style={{paddingTop:"5px"}}>
              <Button
                // style={{
                //   // width: "50px",
                //   height: "4.88vw",
                //   backgroundColor: "#3C4BDC",
                // }}
              >
                <img src={item.img} style={{ color: "white", width: "6.22vw", height: "6.22vw"}} alt="" />
              </Button>
            </div>
            <div>
              <h6 className="text-white font-Roboto text-[2vw] font-[700]" style={{marginTop:"5px"}}>
                {item.malumot}
              </h6>
              <p className="text-white font-Roboto text-[1.38] font-[400] tracking-tighter-[0.4px]" style={{fontSize:"12px"}}>
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
