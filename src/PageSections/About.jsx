/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
export default function About({ childElement }) {
  return (
     <div id="About" ref={childElement} className="w-full text-colorGreyLight">
      <div className="h-full p-[7vw] bg-[#1e293bd7] flex flex-col clipHome3 max-lg:px-[1.2vw]">
        <div className="w-full text-center p-4 text-4xl max-lg:text-2xl">
          About Me
        </div>
        <div className="w-[80%] mx-auto text-[1.2rem] font-light flex flex-col gap-8 max-lg:text-[0.8rem] max-lg:gap-4">
          <p>
            Welcome to my corner of the web! I'm Mohith, I am currently persuing
            B.Tech in Institute of Aeronautical Engineering, in the stream of
            ECE. I am a passionate and dedicated developer with a knack for
            turning ideas into reality through code.
          </p>
          <p>
            My journey into the world of software development began since my
            entry into college. Since then, I've been on a relentless quest for
            learning and improvement, constantly honing my skills in Problem
            Solving, Web Development and Machine Learning. What sets me apart is
            my commitment to not just writing code, but crafting solutions that
            solve real-world problems and deliver tangible results. I thrive in
            collaborative environments where I can brainstorm ideas, iterate on
            designs, and ultimately build products that make a difference. I am
            eager to approach every project with enthusiasm and a drive to
            exceed expectations.
          </p>
          <p>
            Outside of coding, you'll often find me reading books, watching web
            series, listening music, etc as I believe in maintaining a healthy
            work-life balance to fuel creativity and productivity. Feel free to
            explore my portfolio to see some of the projects I've worked on. If
            you have a project in mind or just want to connect, don't hesitate
            to reach out—I'm always eager to collaborate and tackle new
            challenges! Thank you for stopping by . . . . . .
          </p>
        </div>
        <div className="w-full text-center">
          <p className="text-[3rem] font-sacramento max-lg:text-[1.5rem]">
            Mohith
          </p>
        </div>
      </div>
    </div>
  );
}
