import JobCards from "./JobCards";
import ui from "../assets/ui-design.png";
import webd from "../assets/website-design.png";
import fd from "../assets/app-design.png";
const About = () => {
  return (
    <>
      <section
        id="aboutPage"
        className="sm:pr-10 sm:pl-10 bg-gradient-to-b from-blue-900 to-blue-800 xl:pr-50 xl:pl-50 2xl:pr-70 2xl:pl-70"
      >
        <div className="sm:pt-15 flex flex-col items-center justify-between pl-10 pr-10 gap-6 ">
          <div className="intro text-white xxs:order-2 xl:mt-15">
            <p className="text-2xl">Hello,</p>
            <p className="text-5xl font-extrabold">
              I'm <span className="text-amber-300">Bhuwan </span>- Frontend
              Developer
            </p>
            <p className="text-[20px] ">
              I am a skilled and passionate web developer with experience in
              making frontend and user-friendly applications.
            </p>
            <button className="flex gap-2 bg-white text-black rounded-md p-2 mt-8">
              <img src="bag.svg" alt="" className="w-5 " />
              Hire me
            </button>
          </div>
          <img
            src="me.png"
            alt=""
            className="w-70 h-70 rounded-[50%] xxs:order-1 xxs:w-min-[10vw] xxs:h-min-[10vw]"
          />
        </div>
        <div className="flex flex-col items-center justify-between pl-10 pr-10 gap-3  mt-10">
          <JobCards
            image={ui}
            title={"UI/UX Design"}
            context={
              "I design intuitive, user-centered designs using Figma, focusing on usability and modern aesthetics."
            }
          />
          <JobCards
            image={webd}
            title={"Website Design"}
            context={
              "I build responsive, fast, and SEO-friendly websites using HTML, CSS, Tailwind, and React."
            }
          />
          <JobCards
            image={fd}
            title={"Frontend Development"}
            context={
              "I develop interactive UIs with React, integrating animations, APIs, and performance optimizations."
            }
          />
        </div>
      </section>
    </>
  );
};

export default About;
