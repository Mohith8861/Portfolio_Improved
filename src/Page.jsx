/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import About from "./PageSections/About";
import Contact from "./PageSections/Contact";
import Home from "./PageSections/Home";
import Progress from "./PageSections/Progress";
import Resume from "./PageSections/Resume";
import Skill from "./PageSections/Skill";

export default function Page({ childElement }) {
  return (
    <div className="font-normal bg-gradient-to-r bg-colorGreyLight max-w-[100vw] h-full m-0 overflow-x-hidden border-colorGreyLight justify-around items-center scroll-smooth overflow-y-auto no-scrollbar slidein transition-all duration-300">
      <Home />
      <About />
      <Skill />
      {/* <Progress /> */}
      <Resume />
      <Contact />
    </div>
  );
}

//  <div className="bg-gradient-to-r from-colorbg1 to-colorbg2 w-[90%] m-auto mt-4 flex z-30">
//     <div className="w-full">
//       <div className="mx-auto w-[60%] text-center flex flex-col">
//         <p className="inline-block text-[3rem] my-0">Hi! I Am </p>
//         <p className="inline-block text-[4.5rem] my-0 hover:rotate-6 hover:text-colorGreyLight transition-all duration-300 font-lato font-[400]">
//           Mohith Chowdary Daruri
//         </p>
//         <p className="inline-block text-[2rem] mt-[4rem]">
//           I am an aspiring Developer excited to learn new amazing technologies
//         </p>
//       </div>
//       <div className="flex justify-center gap-8 mt-6 w-full">
//         {l.map((e, i) => {
//           return (
//             <div key={i}>
//               <svg
//                 className="hover:fill-[white] fill-colorTextB"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 50 50"
//                 width="50px"
//                 height="50px">
//                 {" "}
//                 <path d={e} />
//               </svg>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   </div>
