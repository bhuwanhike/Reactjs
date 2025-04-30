import React from "react";

const Hero = () => {
  return (
    <>
      <div className="pt-30 flex justify-between" id="home">
        <div className="intro text-white">
          <p className="text-4xl">Hello,</p>
          <p className="text-7xl font-extrabold">
            I'm <span className="text-amber-300">Bhuwan </span>Web Developer
          </p>
          <p>
            I am a skilled and passionate web developer with experience in
            making frontend and user-friendly applications.
          </p>
          <button className="flex gap-2 bg-white text-black rounded-md p-2 mt-2">
            <img src="bag.svg" alt="" className="w-5" />
            Hire me
          </button>
        </div>
        <img src="me.png" alt="" className="w-70 h-70 rounded-[50%]" />
      </div>
    </>
  );
};

export default Hero;
