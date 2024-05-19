/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function Header({ scrollToSection }) {
  return (
    <div className="bg-colorGreyLight w-full h-[4rem] flex justify-between items-center fixed z-50">
      <div className="w-[20%] text-center m-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="animate-spin-slow size-16 mx-auto"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 1680.097 1680.097"
          enableBackground="new 0 0 1680.097 1680.097">
          <path
            fill="rgb(255, 255, 255,0.1)"
            stroke="#0ea4e9ab"
            strokeWidth="15"
            strokeMiterlimit="10"
            d="M847.03,40.048 c-660.693,934.072,584.451,1109.066,206.817,29.066c-879.936,731.244,277.489,1222.542,192.247,81.604 C206.882,629.302,1197.711,1403.423,1410.671,279.3c-1127.669,193.308-370.958,1197.497,125.689,166.795 c-1139.277-105.141-668.253,1060.682,78.237,193.642c-1073.244-396.425-920.008,851.584,25.452,207.293 c-934.072-660.693-1109.066,584.451-29.066,206.817c-731.244-879.936-1222.542,277.489-81.604,192.247 c-478.584-1039.213-1252.705-48.383-128.581,164.576C1207.489,283.001,203.3,1039.712,1234.002,1536.359 c105.141-1139.277-1060.682-668.253-193.642,78.237c396.425-1073.244-851.584-920.008-207.293,25.452 c660.693-934.072-584.451-1109.066-206.817-29.066c879.936-731.244-277.489-1222.542-192.247-81.604 c1039.213-478.584,48.383-1252.705-164.576-128.581C1397.096,1207.489,640.385,203.3,143.737,1234.002 C1283.014,1339.143,811.991,173.32,65.501,1040.36c1073.244,396.425,920.008-851.584-25.452-207.293 C974.12,1493.76,1149.114,248.616,69.115,626.25c731.244,879.936,1222.542-277.489,81.604-192.247 C629.302,1473.215,1403.423,482.386,279.3,269.426c193.308,1127.669,1197.497,370.958,166.795-125.689 C340.954,1283.014,1506.777,811.991,639.737,65.501C243.312,1138.745,1491.321,985.509,847.03,40.048z"
          />
        </svg>
      </div>
      <div className="w-[50%] flex justify-around gap-6">
        <div
          className="h-full w-full flex gap-4 justify-center items-center text-[1rem] px-4 py-4 font-semibold leading-8 hover:bg-colorSelectLight hover:text-colorGreyLight transition-all duration-300 ease-in text-center"
          onClick={() => scrollToSection("Home")}>
          <a
            href="#Home"
            className="w-full flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Home
          </a>
        </div>
        <div
          className="h-full w-full flex gap-4 justify-center items-center text-[1rem] px-4 py-4 font-semibold leading-8 hover:bg-colorSelectLight hover:text-colorGreyLight transition-all duration-300 ease-in text-center"
          onClick={() => scrollToSection("About")}>
          <a
            href="#About"
            className="w-full flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>{" "}
            About
          </a>
        </div>
        <div
          className="h-full w-full flex gap-4 justify-center items-center text-[1rem] px-4 py-4 font-semibold leading-8 hover:bg-colorSelectLight hover:text-colorGreyLight transition-all duration-300 ease-in text-center"
          onClick={() => scrollToSection("Skills")}>
          <a
            href="#Skills"
            className="w-full flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>{" "}
            Skills
          </a>
        </div>
        <div
          className="h-full w-full flex gap-4 justify-center items-center text-[1rem] px-4 py-4 font-semibold leading-8 hover:bg-colorSelectLight hover:text-colorGreyLight transition-all duration-300 ease-in text-center"
          onClick={() => scrollToSection("Resume")}>
          <a
            href="#Resume"
            className="w-full flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
            Resume
          </a>
        </div>{" "}
        <div
          className="h-full w-full flex gap-4 justify-center items-center text-[1rem] px-4 py-4 font-semibold leading-8 hover:bg-colorSelectLight hover:text-colorGreyLight transition-all duration-300 ease-in text-center"
          onClick={() => scrollToSection("Contact")}>
          <a
            href="#Contact"
            className="w-full flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>{" "}
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
