import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Corusel from "./Components/Corusel/Corusel";
import About from "./Components/About/About";
import Collapse from "./Components/Collapse/Collapse";
import Portfolio from "./Components/Porfolio/Portfolio";
import Information from "./Components/Information/Information";
import Fillial from "./Components/Fillial/Fillial";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";


const App = () => {
  return (
    <div className="App" style={{backgroundColor: "#0E0E37"}}>
      <Navbar />
      <Home />
      <Corusel />
      <About />
      <Collapse />
      <Portfolio />
      <Information />
      <Fillial />
      <Form/>
      <Footer/>
    </div>
  );
};

export default App;
