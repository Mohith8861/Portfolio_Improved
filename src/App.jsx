import Page from "./Page.jsx";
import Header from "./Header.jsx";
import { useRef } from "react";
import "./index.css";

function App() {
  const parentElement = useRef(null);
  const childElement = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector("#" + sectionId);
    console.log(section);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="homeBG1 m-0 bg-cover bg-no-repeat w-[100vw] h-[100vh] text-colorTextB selection:text-colorGreyLight selection:bg-colorSelectLight max-lg:bg-fixed"
      ref={parentElement}>
      <Header scrollToSection={scrollToSection} />
      <Page scrollToSection={scrollToSection} childElement={childElement} />
    </div>
  );
}

export default App;
