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
    <div className="px-[5.20vw] bg-nav pt-[9.72vw] w-[100%] sm:overflow-hidden xs:overflow-hidden" style={{marginTop:"50px"}}>
      <h4 className=" text-white font-Roboto text-[3vw] font-[700]" style={{padding:"10px"}}>
        PORTFOLIO
      </h4>
      <p className="text-white text-[2.22vw] font-[400] w-[60vw] pb-[2.22vw]" style={{fontSize:"10px", padding:"10px"}}>
        IT-autsorsing kompaniyalari o'z mijozlarining ehtiyojlariga
        moslashtirilgan turli xizmatlarni taklif qilishadi.
      </p>
      <div className="bg-nav" style={{width:"100%", textAlign:"center", display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"15px"}} >
        {img.map((item, index) => (
          <div
            style={{
              width:"150px"
            }}
            className="w-[40.75vw]"
          >
            <img className="w-[43.75vw] h-[31.11vw]" src={item.img11} alt="" style={{width:"150px"}}/>
            <h6 className="text-white font-Roboto text-[2.22vw] font-[700] tracking-tighter-[0.64px] pt-[1.11vw]" style={{fontSize:"10px", marginTop:"5px"}}>
              {item.text}
            </h6>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-[3.22vw] pb-[10vw]">
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
  );
};

export default Portfolio;
