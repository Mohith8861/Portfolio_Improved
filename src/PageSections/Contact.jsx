export default function Contact() {
  return (
    // <section className="py-20 bg-gradient-to-r font-lato from-[#7dd4fc88] to-[#0ea4e9ab]">
    <div
      id="Contact"
      className="homeBG2 py-8 bg-cover w-full h-full rounded-md shadow-lg justify-center items-center flex-col">
      <div className="w-full bg-colorGreyLight py-8 mb-8 text-colorTextB text-[1.3rem] font-[450] text-center flex max-md:flex-col max-md:w-full gap-6 justify-around">
        <p>Phone : 9121264144 </p>
        <p>Email : mohith8861@gmail.com </p>
        <p>Language : English,Telugu, Hindi</p>
      </div>
      <div className="bg-colorbg2 w-[85%] m-auto p-10 flex justify-between items-center 2xl:w-[75%] max-md:flex-col">
        <form className="form w-[75%] mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl text-colorTextB font-semibold mb-6">
              Lets Talk..!
            </h2>
          </div>
          <div className="mb-6">
            <input
              type="text"
              className="w-5/6 text-lg font-inherit px-6 py-2 rounded-sm bg-[#ececec] border-none border-b-2 border-transparent focus:outline-none focus:shadow-md focus:border-b-2 focus:border-[#2bc7ee] invalid:border-b-2 invalid:border-[rgba(255,166,0,0.842)] placeholder-gray-400"
              placeholder="Full name"
              id="name"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              className="w-5/6 text-lg font-inherit px-6 py-2 rounded-sm bg-[#ececec] border-none border-b-2 border-transparent focus:outline-none focus:shadow-md focus:border-b-2 focus:border-[#2bc7ee] invalid:border-b-2 invalid:border-[rgba(255,166,0,0.842)] placeholder-gray-400"
              placeholder="Email address"
              id="email"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              type="text"
              rows="4"
              cols="50"
              className="resize-none w-5/6 h-32 text-lg font-inherit px-6 py-4 rounded-sm bg-[#ececec] border-none border-b-2 border-transparent focus:outline-none focus:shadow-md focus:border-b-2 focus:border-[#2bc7ee] invalid:border-b-2 invalid:border-[rgba(255,166,0,0.842)] placeholder-gray-400"
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
      </div>
    </div>
  );
}
