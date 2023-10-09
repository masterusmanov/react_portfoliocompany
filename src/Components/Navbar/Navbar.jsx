import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import navbar from "../../Assets/Navbar/navbar.svg";
import gradiant from "../../Assets/Navbar/gradiant.png";
import { Button } from "@mui/material";

function NavScrollExample() {
  // ctrl alt t menu
  return (
    <div className="bg-nav xs:overflow-hidden">
      <Navbar
        expand="md"
        className="py-[3.40vw] px-[5.20vw] flex text-center items-center"
      >
        <Container
          fluid
          className="flex gap-[3.33vw] xs:gap-[1vw] items-center text-center"
        >
          <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor: "#3C4BDC", color: "white"}}/>
          <Navbar.Collapse
            id="navbarScroll"
            className=" sm:w-[100%] sm:flex-col sm:h-[16vh] xs:w-[100%] xs:flex-col xs:h-[16vh]"
          >
            <div className="mt-[2.5vw] flex gap-[38.18vw] h-[3vw] items-center text-center sm:w-[100%] xs:flex-col xs:h-[20px] xs:w-[100%] sm:flex-col sm:h-[20px]">
              <div className="flex gap-[3vw] sm:flex-col sm:gap-[0px]">
                <h5 className="font-Roboto text-[500] text-[1.25vw] text-white sm:text-[1.8vw] xs:text-[3vw]">
                  Bosh sahifa
                </h5>
                <h5 className="font-Roboto text-[500] text-[1.25vw] text-white sm:text-[1.8vw] xs:text-[3vw]">
                  Portfolio
                </h5>
                <h5 className="font-Roboto text-[500] text-[1.25vw] text-white sm:text-[1.8vw] xs:text-[3vw]">
                  Cosinus academy
                </h5>
              </div>
              
            </div>
          </Navbar.Collapse>
          <Navbar.Brand>
            <div className="w-[1.45vw] flex flex-col items-center gap-[0.5vw] xs:w-[15vw]">
              <img
                className="w-[1.51vw] h-[1.52vw] xs:w-[5vw] xs:h-[2.3vw]"
                src={gradiant}
                alt=""
              />
              <img
                className="w-[1.45vw] h-[1.04vw] xs:w-[15vw] xs:h-[7vw]"
                src={navbar}
                alt=""
              />
            </div>
          </Navbar.Brand>
          <div className="sm:mt-[-38vw] xs:mt-[30vw]">
                <Button
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "2vw",
                    color: "white",
                    fontWeight: "600",
                    backgroundColor: "#303CB0",
                    width: "14.23vw",
                    height: "6.33vw",
                  }}
                >
                  Bog‘lanish
                </Button>
              </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;
