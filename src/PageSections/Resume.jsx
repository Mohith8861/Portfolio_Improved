export default function Resume() {
  return (
    <div
      id="Resume"
      className="w-full bg-scroll bg-cover bg-top bg-no-repeat bg-colorGreyLight text-[#030247d8] font-[350] leading-6 clipSkill2">
      <div className="h-full p-[1.5rem] flex flex-col gap-6 ">
        <div className="w-full text-[2rem] font-normal text-center">
          Education
        </div>
        <div className="text-[1.2rem] border-l-2 p-4">
          <p className="">Institute of Aeronautical Engineering</p>
          <p className="">2021-2025</p>
          B.Tech in ECE, A four-year undergraduate program that focuses on the
          design, development, and application of electronic circuits and
          communication systems.
        </div>
        <div className="w-full text-[2rem] font-normal text-center">
          Certifications
        </div>
        <div className="text-[1.3rem] border-l-2 p-4">
          <p className="text-center">AWS Certified Cloud Practitioner</p>
          <div className="mx-auto w-[15rem] h-[15rem] rounded-full overflow-hidden">
            <img src="/aws.png" className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
// bg-[#1e293bd7]
