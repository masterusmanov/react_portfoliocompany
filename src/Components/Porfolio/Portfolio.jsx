import React, { useState } from "react";
import img1 from "../../Assets/Portfolio/img.png";
import { Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import WbIridescentIcon from '@mui/icons-material/WbIridescent';

const Portfolio = () => {
  const [img, setimg] = useState([
    {
      img11: img1,
      text: "Cosimus IT-konpaniyasi uchun veb-sayt dizayni",
    },
    {
      img11: img1,
      text: "Cosimus IT-konpaniyasi uchun veb-sayt dizayni",
    },
    {
      img11: img1,
      text: "Cosimus IT-konpaniyasi uchun veb-sayt dizayni",
    },
    {
      img11: img1,
      text: "Cosimus IT-konpaniyasi uchun veb-sayt dizayni",
    },
    {
      img11: img1,
      text: "Cosimus IT-konpaniyasi uchun veb-sayt dizayni",
    },
    {
      img11: img1,
      text: "Cosimus IT-konpaniyasi uchun veb-sayt dizayni",
    },
  ]);
  return (
    <div className="container mx-auto">
      <div className="py-10">
        <h2 className="text-white md:text-[34px] font-bold">PORTFOLIO</h2>
        <p className="text-white text-[10px] md:text-[14px] xl:text-[18px] ">Biz bilan zamon bilan hamnafas bo'ling</p>
      </div>
      <div className="grid md:flex flex-wrap justify-center items-center gap-5">
        {img.map((item, index) => (
          <div className="w-[350px] md:w-[320px]">
            <img className="w-full h-[250px]" src={item.img11} alt=""/>
            <h6 className="text-white font-Roboto text-[20px] font-[700]">
              {item.text}
            </h6>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center pt-[3.22vw] pb-[10vw]">
        <Button
          endIcon={
            <ArrowOutwardIcon style={{ width: "1.66vw", height: "1.66vw" }} />
          }
          style={{
            fontFamily: "Roboto",
            fontSize: "1.11vw",
            fontWeight: "600",
            color: "white",
            width: "22.22vw",
            height: "3.88vw",
            backgroundColor: "#3C4BDC",
            padding:"10px",
            marginLeft:"15px"
          }}
        >
          Barchasini ochish{" "}
        </Button>
      </div>
    </div>
    // <div className="px-[5.20vw] bg-nav pt-[9.72vw] w-[100%] sm:overflow-hidden xs:overflow-hidden" style={{marginTop:"50px"}}>
    //   <h4 className=" text-white font-Roboto text-[3vw] font-[700]" style={{padding:"10px"}}>
    //     PORTFOLIO
    //   </h4>
    //   <p className="text-white text-[2.22vw] font-[400] w-[60vw] pb-[2.22vw]" style={{fontSize:"10px", padding:"10px"}}>
    //     IT-autsorsing kompaniyalari o'z mijozlarining ehtiyojlariga
    //     moslashtirilgan turli xizmatlarni taklif qilishadi.
    //   </p>
      
    // </div>
  );
};

export default Portfolio;
