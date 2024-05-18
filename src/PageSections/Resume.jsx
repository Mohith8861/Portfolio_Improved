export default function Resume() {
  return (
    <div
      id="Resume"
      className="w-full h-full bg-scroll bg-cover bg-top bg-no-repeat text-colorGreyLight clipSkill2">
      <div className="h-full p-[2rem] flex flex-col gap-6 bg-[#1e293bd7]">
        <div className="w-full text-[2rem] font-semibold text-center">
          Education
        </div>
        <div className="text-[1.3rem]">
          <p className="">Institute of Aeronautical Engineering</p>
          <p className="text-[#ffffffa4]">2021-2025</p>
          B.Tech in ECE, A four-year undergraduate program that focuses on the
          design, development, and application of electronic circuits and
          communication systems.
        </div>
        <div className="w-full text-[2rem] font-semibold text-center">
          Certifications
        </div>
        <div className="text-[1.3rem]">
          <p className="text-center">AWS Certified Cloud Practitioner</p>
          <div className="mx-auto mb-8 w-[15rem] h-[15rem] rounded-full overflow-hidden">
            <img src="/aws.png" className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
