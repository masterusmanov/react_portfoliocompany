import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import html from "../../Assets/Collapse/html.png"
import css from "../../Assets/Collapse/css.png"
import cass from "../../Assets/Collapse/cass.png"
import js from "../../Assets/Collapse/js.png"
import reat from "../../Assets/Collapse/react.png"
import vue from "../../Assets/Collapse/vue.png"

const Collapse = () => {
    const [kurs, setkurs] = useState([
        {
            yunalish: 'Frontend',
            malumot: 'Veb-ilovalar MVP yaratishning eng yaxshi usuli hisoblanadi. Va bu uni qurish uchun bizning stekimiz!',
            img:html,css,cass,js,reat,vue
        },
        {
            yunalish: 'Frontend',
            malumot: 'Veb-ilovalar MVP yaratishning eng yaxshi usuli hisoblanadi. Va bu uni qurish uchun bizning stekimiz!',
            img:html,css,cass,js,reat,vue
        },
        {
            yunalish: 'Devops',
            malumot: 'Veb-ilovalar MVP yaratishning eng yaxshi usuli hisoblanadi. Va bu uni qurish uchun bizning stekimiz!',
            img:html,css,cass,js,reat,vue
        },
        {
            yunalish: 'UX/UI',
            malumot: 'Veb-ilovalar MVP yaratishning eng yaxshi usuli hisoblanadi. Va bu uni qurish uchun bizning stekimiz!',
            img:html,css,cass,js,reat,vue
        },
        {
            yunalish: 'Mobile',
            malumot: 'Veb-ilovalar MVP yaratishning eng yaxshi usuli hisoblanadi. Va bu uni qurish uchun bizning stekimiz!',
            img:html,css,cass,js,reat,vue
        },
    ])
  return (
    <div className="px-[5.20vw] w-[100%] bg-nav sm:overflow-hidden xs:overflow-hidden" style={{marginTop:"50px"}}>
      <h5 className="pt-[8.33vw] text-white font-Roboto text-[3.2vw] font-[700]" style={{marginLeft:"15px"}}>
        Loyihangizni muammosiz bajarish uchun eng yangi texnologiyalardan
        foydalanamiz
      </h5>
      <p className="text-white text-[1.66vw] font-[400] pt-[1.66vw] pb-[3.33vw] sm:text-[2vw]" style={{fontSize:"12px", marginLeft:"15px"}}>
        Biz bilan zamon bilan hamnafas bo'ling
      </p>
    {
        kurs.map((item,index)=>(
            <div className="pb-[2.22vw]">
            <Accordion
              sx={{
                backgroundColor: "#0E0E37",
                border: " 1px solid #34BCA2",
                borderRadius: "50px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Roboto",
                    fontSize: "2.77vw",
                    fontWeight: "700",
                  }}
                >
                  {
                    item.yunalish
                  }
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "#aba6a6",
                    fontFamily: "Roboto",
                    fontSize: "3.22vw",
                    fontWeight: "500",
                    lineHeight: "140%",
                    letterSpacing: "0.64px",
                  }}
                >
                 {
                    item.malumot
                 }
                </Typography>
                <div className="pt-[1.38vw] flex gap-[2.22vw]" style={{display:"flex", marginTop:"10px", gap:"15px"}}>
                  {/* <img className="w-[6.06vw] h-[6.94vw]" src={item.html} alt="" /> */}
                  <img className="w-[6.12vw] h-[6vw]" src={item.css} alt="" style={{width:"30px", height:"30px"}}/>
                  <img className="w-[6.12vw] h-[6vw]" src={item.cass} alt="" style={{width:"30px", height:"30px"}} />
                  <img className="w-[6.12vw] h-[6vw]" src={item.js} alt="" style={{width:"30px", height:"30px"}}/>
                  <img className="w-[6.12vw] h-[6vw]" src={item.reat} alt="" style={{width:"30px", height:"30px"}}/>
                  <img className="w-[6.12vw] h-[6vw]" src={item.vue} alt="" style={{width:"30px", height:"30px"}}/>
                </div>
              </AccordionDetails>
            </Accordion>
            </div>
        ))
    }
    </div>
  );
};

export default Collapse;
