import { useState } from "react";

export default function Contact() {
  //   export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent !!! ");
      event.target.reset();
      setTimeout(() => {
        setResult("");
      }, 3000);
    } else {
      // console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="Contact"
      className="homeBG2 py-8 bg-cover w-full h-full rounded-md shadow-lg justify-center items-center flex-col max-lg:bg-fixed">
      <div className="w-full bg-colorGreyLight py-8 mb-8 text-colorTextB text-[1.3rem] font-[450] text-center flex gap-6 justify-around max-lg:flex-col max-lg:text-[1rem]">
        <p className="border-l-4 px-2 ">Phone : 9121264144 </p>
        <p className="border-l-4 px-2 ">Email : mohith8861@gmail.com </p>
        <p className="border-l-4 px-2 ">Language : English, Telugu, Hindi</p>
      </div>
<div className="bg-colorbg2 w-[85%] m-auto p-10 flex justify-between items-center 2xl:w-[75%] max-lg:px-2 max-lg:w-[90%]">        
  <form className="form w-[75%] mx-auto" onSubmit={onSubmit}>
          <div className="mb-8">
            <h2 className="text-2xl text-colorTextB font-semibold mb-6">
              Lets Talk..!
            </h2>
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="name" 
              className="w-5/6 max-lg:w-[90%] text-lg font-inherit px-6 py-2 rounded-sm bg-[#ececec] border-none border-b-2 border-transparent focus:outline-none focus:shadow-md focus:border-b-2 focus:border-[#2bc7ee] invalid:border-b-2 invalid:border-[rgba(255,166,0,0.842)] placeholder-gray-400"
              placeholder="Full name"
              id="name"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
               name="email" 
              className="w-5/6 max-lg:w-[90%] text-lg font-inherit px-6 py-2 rounded-sm bg-[#ececec] border-none border-b-2 border-transparent focus:outline-none focus:shadow-md focus:border-b-2 focus:border-[#2bc7ee] invalid:border-b-2 invalid:border-[rgba(255,166,0,0.842)] placeholder-gray-400"
              placeholder="Email address"
              id="email"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              type="text"
               name="message" 
              rows="4"
              cols="50"
              className="resize-none w-5/6 max-lg:w-[90%] h-32 text-lg font-inherit px-6 py-4 rounded-sm bg-[#ececec] border-none border-b-2 border-transparent focus:outline-none focus:shadow-md focus:border-b-2 focus:border-[#2bc7ee] invalid:border-b-2 invalid:border-[rgba(255,166,0,0.842)] placeholder-gray-400"
              placeholder="Message"
              id="message"
              required
            />
          </div>
          <div>
            <button className="bg-colorGreyLight text-white px-6 py-3 rounded-sm hover:bg-colorTextB hover:text-colorGreyLight transition-colors duration-300">
              Next step &rarr;
            </button>
          </div>
        </form>
        <div
          className={`h-12 text-center px-4 pt-[0.6rem] text-[1.2rem] border-colorGreyLight border-x-[0.4rem] bg-colorTextB text-colorGreyLight fixed top-[15%] left-[48%] z-50 transition-all duration-300 ease-in-out ${
            result.length === 0 ? "opacity-0" : "opacity-100"
          }`}>
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
}
