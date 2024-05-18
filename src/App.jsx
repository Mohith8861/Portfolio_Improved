/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Page from "./Page.jsx";

import "./index.css";
import Header from "./Header.jsx";
import { useEffect, useRef } from "react";

function App() {
  const parentElement = useRef(null);
  const childElement = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector("#" + sectionId);
    console.log(section);
    section.scrollIntoView({ behavior: "smooth" });
  };

  // Function to check if the child element is in view

  // Add scroll event listener
  return (
    <div
      className="homeBG1 m-0 bg-cover bg-no-repeat w-[100%] h-[100vh]"
      ref={parentElement}>
      <div className="flex w-[99.8%] justify-between">
        <Page scrollToSection={scrollToSection} childElement={childElement} />
        <Header scrollToSection={scrollToSection} />
      </div>
    </div>
  );
}

export default App;

//  <div className="min-h-[100vh]  text-colorTextB w-full selection:text-colorGreyLight selection:bg-colorSelectLight font-lato">
//     <div className="bg-[url('/snow-1868299_1920.jpg')] w-full h-full bg-scroll bg-cover bg-top bg-no-repeat z-10">
//       <div className="bg-gradient-to-r from-colorbg1 to-colorbg2">
//         {/* <Header /> */}
//         <Page />
//       </div>
//     </div>
//     {/* <Skills />
//     <Wall />
//     <About /> */}
//   </div>
