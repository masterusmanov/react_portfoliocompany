import React from "react";
import "./Home.css";
import Lottie from "lottie-react";
import Group from "../../Assets/Home/Group.json";
import back from "../../Assets/Home/back.png";
import sm from "../../Assets/Home/sm.png";
import cosinus from "../../Assets/Home/Cosinus.png"
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className="bg-nav w-[100%] h-[53vw] sm:h-[140vh] xs:overflow-hidden bgnav">
      <div className="flex gap-[3vw] absolute" style={{marginTop: "30px"}}>
        <div className="w-[50vw] px-[5.20vw] absolute pt-[8.97vw] sm:w-[100vw] xs:mt-[-30px]">
          {/* <h1 className="font-Roboto font-[700] text-[5vw] cosinus xs:text-[vw]">Cosinus</h1> */}
          <img style = {{width: "150px", height: "46px", marginLeft:"15px"}} src={cosinus} alt=""/>
          <h6 className="text-white font-Roboto text-[3.33vw] font-[700] sm:pt-[0.2vw]" style={{fontSize:"24px", marginLeft:"15px"}}>
            IT - kompaniyasi
          </h6>
          <p className="text-white font-Roboto text-[2.22vw] font-[400] pt-[1.5vw] sm:w-[50vw] sm:pt-[0.2vw]" style={{marginTop:"15px", marginLeft:"15px"}}>
            Mijozlar ehtiyojidan kelib chiqqan holda, xizmatlar taklif qilamiz.
          </p>
          <div className="xs:mb-[10vw] xs:mt-[-20px]">
          <Button
            style={{
              fontFamily: "Roboto",
              fontSize: "2.25vw",
              color: "white",
              fontWeight: "600",
              backgroundColor: "#636FE3",
              width: "37.83vw",
              height: "3.88vw",
              marginTop: "1.5vw",
              border: "1px solid #34BCA2",
              padding:"10px",
              marginLeft:"15px"
            }}
          >
            Bog‘lanish
          </Button>
          </div>
          <div className="w-[100vh] h-[50vh] blue xs:w-[50vw]"></div>
        </div>
        <div className="w-[40vw] h-[40vw] ml-[55vw] mt-[1vw] sm:ml-[33vw] sm:mt-[35vw] xs:-w-[100%] rasm" style={{marginTop:"25px"}}>
          <Lottie className="rasm"  animationData={Group} loop={true} />
        </div>
      </div>
      {/* <div className="images w-[100%] flex justify-end sm:justify-center">
        <img className="img1 w-[65vw] sm:ml-[-20vw] sm:w-[80%] sm:mt-[28vw] " src={back} alt="" />
      </div> */}
    </div>
  );
};

export default Home;
