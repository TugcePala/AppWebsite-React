import React from "react";
import Feature from "./Components/Feature";
import Header from "./Components/Header";
import Presentation from "./Components/Presentation";
import About from "./Components/About";
import aboutimage from "./images/about.png";
import aboutimage1 from "./images/download.png";
import Contact from "./Components/Contact";


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Feature></Feature>
     <About image={aboutimage} title="Comes With All You Need for Daily Life" button="Get The App"></About>
     <Presentation></Presentation>
     <About image={aboutimage1} title="Download And Get The App Now " button="Download"></About>
     <Contact></Contact>
    </div>
  );
}

export default App;
