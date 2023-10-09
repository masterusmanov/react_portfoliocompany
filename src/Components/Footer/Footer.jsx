import React from "react";
import "./foter.css";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import footer from "../../Assets/Footer/Bosh sahifa/Frame 55.png";

const Footer = () => {
  return (
    <div className="bg-[#04042F] px-[5.20vw] py-[2vw] cursor-pointer sm:overflow-hidden">
      <div className="w-[40%] h-[50vh] foter absolute"></div>
      <div className="flex gap-[10vw] fotter_tex" style={{display:"flex", gap:"10px", marginLeft:"15px"}}>
        <div className="footer_box">
          <h5 className="font-Inter text-[2.22vw] text-white font-[700]" style={{fontSize:"16px"}}>
            Bizning xizmatlarimiz
          </h5>
          <p className="font-[600] text-white" style={{fontSize:"10px"}}>
            Veb saytlar
          </p>
          <p className="font-[600] text-white" style={{fontSize:"10px"}}>
            Veb saytlar
          </p>
          <p className=" font-[600] text-white" style={{fontSize:"10px"}}>
            Veb saytlar
          </p>
          <p className=" font-[600] text-white" style={{fontSize:"10px"}}>
            Veb saytlar
          </p>
        </div>
        <div className="footer_box">
          <h5 className="text-[2.22vw] text-white font-[700]" style={{fontSize:"16px"}}>
            Portfolio
          </h5>
          <p className=" font-[600] text-white" style={{fontSize:"10px"}}>
            Cosimus IT-konpaniyasi
          </p>
          <p className=" font-[600] text-white" style={{fontSize:"10px"}}>
            Cosimus IT-konpaniyasi
          </p>
          <p className=" font-[600] text-white" style={{fontSize:"10px"}}>
            Cosimus IT-konpaniyasi
          </p>
          <p className=" font-[600] text-white" style={{fontSize:"10px"}}>
            Cosimus IT-konpaniyasi
          </p>
        </div>
        <div className="xs:justify-center xs:m-[auto] text-center footer_box">
          <h5 className="text-[2.22vw] text-white font-[700]" style={{fontSize:"16px"}}>
            Bog‘lanish
          </h5>
          <div className="flex gap-[0.5vw] pt-[1.11vw] icondiv" style={{display:"flex"}}>
            <PhoneIcon
              className="iconnn1"
              style={{ color: "white", width: "12px", height: "12px" }}
            />
            <p className="font-Roboto text-[1.36vw] font-[500] text-white flex items-center gap-[2.vw] xs:text-[2vw]" style={{fontSize:"10px"}}>
              +998 94 332 00 16
            </p>
          </div>
          <div className="flex gap-[0.5vw] pt-[1.11vw] xs:justify-center xs:m-[auto] text-center" style={{display:"flex"}}>
            <LanguageIcon
              className="iconnn1"
              style={{ color: "white", width: "12px", height: "12px" }}
            />
            <p className="font-Roboto text-[1.36vw] font-[500] text-white flex items-center gap-[2.vw] tracking-[0.4px] xs:text-[2vw]" style={{fontSize:"10px"}}>
              amalit.uz
            </p>
          </div>
          <div className="flex gap-[20px] pt-[1.11vw] justify-center" style={{display:"flex", gap:"10px"}}>
            <TelegramIcon
            className="iconnn11"
              style={{
                width: "15px",
                height: "15px",
                color: "white",
                cursor: "pointer",
              }}
            />
            <InstagramIcon
              className="iconnn11"
              style={{
                width: "15px",
                height: "15px",
                color: "white",
                cursor: "pointer",
              }}
            />
            <YouTubeIcon
              className="iconnn11"
              style={{
                width: "15px",
                height: "15px",
                color: "white",
                cursor: "pointer",
              }}
            />
            <FacebookIcon
              className="iconnn11"
              style={{
                width: "15px",
                height: "15px",
                color: "white",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>
      <hr style={{ color: "white" }} />
      <div className="flex items-center justify-between xs:items-center" style={{display:"grid", justifyContent:"center", alignItems:"center"}}>
        <img
          src={footer}
          className="font-Inter text-[2.22vw] text-white font-[700] xs:w-[10vw]"
          alt=""
        style={{margin:"auto"}}/>
        <p className="text-white text-[1.11vw] font-[500] fotertex" style={{fontSize:"12px", marginTop:"15px", textAlign:"center"}}>
          © 2023 Cosinus IT. Barcha huquqlar himoyalangan
        </p>
      </div>
    </div>
  );
};

export default Footer;
