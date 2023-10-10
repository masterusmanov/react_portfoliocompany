import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Button } from "@mui/material";
import "./form.css"

const Form = () => {
  return (
    <div className="container mx-auto py-5">
        <div className="pt-14">
        <h2 className="text-white md:text-[34px] font-bold">Biz bilan bo’glanish</h2>
        <p className="text-white text-[10px] md:text-[14px] xl:text-[18px] ">IT kompaniyalari o'z mijozlarining ehtiyojlariga moslashtirilgan turli xizmatlarni taklif qilishadi.</p>
      </div>
      <div className="grid gap-[4.86vw] sm:flex-col xs:flex-col">
          <div className="grid gap-2">
            <div className="grid gap-3 " >
              <div>
                <h6 className="text-white font-Roboto text-[1.25vw] font-[400] sm:text-[1.45vw] formin" >
                  Ismingiz *
                </h6>
                <input
                  style={{width:"93%", border: "1px dashed #34BCA2", backgroundColor:"#0E0E37", borderRadius:"15px" }}
                  type="text"
                  placeholder="  Ism"
                  className="text-[#85888c] font-Roboto text-[1.25vw] font-[400] w-[19.72vw] h-[2.29vw] bg-[#0E0E37] rounded-[8px] pl-[1vw] sm:w-[43vw] sm:h-[4vw] sm:text-[1.5vw]
                  xs:w-[43vw] xs:h-[5vw] xs:text-[1.5vw] inp"
                />
              </div>
              <div>
                <h6 className="text-white font-Roboto text-[1.25vw] font-[400] sm:text-[1.45vw] formin">
                  Elekrton pochtangiz *
                </h6>
                <input
                  style={{width:"93%", border: "1px dashed #34BCA2", backgroundColor:"#0E0E37", borderRadius:"15px" }}
                  type="text"
                  placeholder="  Elekrton pochtangiz"
                  className="text-[#85888c] font-Roboto text-[1.25vw] font-[400] w-[19.72vw] h-[2.29vw] bg-[#0E0E37] rounded-[8px] pl-[1vw] sm:w-[43vw] sm:h-[4vw] sm:text-[1.5vw] inp"
                />
              </div>
            </div>
            <h6 className="text-white font-Roboto text-[1.25vw] font-[400] mt-[1.65vw] sm:text-[1.45vw] formin">
              Label *
            </h6>
            <input
            style={{width:"93%", border: "1px dashed #34BCA2", backgroundColor:"#0E0E37", borderRadius:"15px" }}
              type="text"
              className="text-[#85888c] font-Roboto text-[1.25vw] font-[400] w-[41.11vw] h-[6vw] bg-[#0E0E37] rounded-[8px] pl-[1vw] pb-[3vw] sm:w-[87.7vw] sm:h-[15vw] sm:pb-[10vw] sm:text-[1.5vw] label"
              placeholder="  Label"
            />
            <div className="flex justify-center pt-[3.22vw] pb-[10vw]">
              <Button
                  endIcon={
                    <ArrowOutwardIcon style={{ width: "1.66vw", height: "1.66vw" }} />
                  }
                  style={{
                    width:"180px",
                    fontFamily: "Roboto",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "white",
                    backgroundColor: "#3C4BDC",
                    padding:"5px",
                    marginLeft:"5px",
                    marginTop:"15px",
                    borderRadius:"5px"
                  }}
                >
                  Xabar yuborish{" "}
              </Button>
            </div>
          </div>

          <div className="pt-[2.5vw]">
             <div className="flex gap-[1vw] pt-[1.11vw] icondiv">
               <LocationOnIcon
               className="iconnn1"
                style={{ color: "#3C4BDC", width: "30px", height: "30px" }}
              />
              <h6 className="font-Roboto text-[1.66vw] font-[500] text-white  sm:text-[1.8vw] sm:w-[100%] lett tracking-[0.64px] formtext" style={{marginLeft:"5px"}}>
                {" "}
                Tashkent, Mirzo-Ulugbekskiy tumani, mahalla Shaxriobod
              </h6>
            </div>
            <div className="flex items-center gap-[1vw] pt-[1.11vw] icondiv" style={{display:"flex"}}>
              <PhoneIcon
              className="iconnn1"
                style={{ color: "#3C4BDC", width: "25px", height: "25px" }}
              />
              <h6 className="font-Roboto text-[1.66vw] font-[500] text-white w-[40vw] sm:text-[1.8vw] sm:w-[100%] lett tracking-[0.64px] formtext" style={{marginLeft:"5px"}}>
                +998 94 332 00 16
              </h6>
            </div>
            <div className="flex items-center gap-[1vw] pt-[1.11vw] icondiv" style={{display:"flex"}}>
              <EmailIcon
              className="iconnn1"
                style={{ color: "#3C4BDC", width: "30px", height: "30px" }}
              />
              <h6 className="font-Roboto text-[1.66vw] font-[500] text-white w-[40vw] sm:text-[1.8vw] sm:w-[100%] lett tracking-[0.64px] formtext" style={{marginLeft:"5px"}}>
                amalit@gmail.com
              </h6>
            </div>
            <div className="pt-[2.22vw] flex gap-[2.22vw]" style={{display:"flex", gap:"10px", marginTop:"10px"}}>
              <TelegramIcon
              className="iconnn11"
                style={{
                  width: "30px",
                  height: "30px",
                  color: "#3C4BDC",
                  cursor: "pointer",
                }}
              />
              <InstagramIcon
              className="iconnn11"
                style={{
                  width: "30px",
                  height: "30px",
                  color: "#3C4BDC",
                  cursor: "pointer",
                }}
              />
              <YouTubeIcon
              className="iconnn11"
                style={{
                  width: "30px",
                  height: "30px",
                  color: "#3C4BDC",
                  cursor: "pointer",
                }}
              />
              <FacebookIcon
              className="iconnn11"
                style={{
                  width: "30px",
                  height: "30px",
                  color: "#3C4BDC",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
        
      <div className="pt-[3.33vw] pb-[6.94vw]">
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "20px",
            marginTop:"15px",
            padding:"5px"
          }}
        >
          <a
            href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontsize: "12px",
              position: "absolute",
              top: "0px",
            }}
          >
            Toshkent
          </a>
          <a
            href="https://yandex.uz/maps/10335/tashkent/?ll=69.299061%2C41.304563&utm_medium=mapframe&utm_source=maps&z=12.93"
            style={{
              color: "#eee",
              fontsize: "12px",
              position: "absolute",
              top: "14px",
            }}
          >
            Toshkent — Yandex Xarita
          </a>
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=69.299061%2C41.304563&z=12.93"
            width="100%"
            height="300px"
            frameborder="2"
            allowfullscreen="true"
            style={{ position: "relative" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Form;
