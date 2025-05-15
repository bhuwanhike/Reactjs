import netclone from "../assets/netflixclone.png";
import msclone from "../assets/msclone.png";
import calc from "../assets/calc.png";
import i4 from "../assets/portfolio-4.png";
import i5 from "../assets/portfolio-5.png";
import i6 from "../assets/portfolio-6.png";
import ImageCard from "./ImageCard";

const PortfolioSec = () => {
  return (
    <section
      id="portfolioPage"
      className="sm:pr-10 sm:pl-10 bg-gradient-to-b from-blue-800 to-blue-700 xl:pr-50 xl:pl-50 2xl:pr-70 2xl:pl-70"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl text-white font-bold text-center mt-10">
          My portfolio
        </h1>
        <p className="pr-10 pl-10 text-center text-white text-[20px]">
          I take pride in paying attention to the smallest details and making
          sure that my work is pixel perfect. I am excited to bring my skills
          and experience to help businesses achieve their goals and create a
          strong online presence. As I’m just starting out, here are a few
          self-initiated and volunteer projects that reflect the kind of work I
          can do for clients.
        </p>
        <div className="grid grid-cols-3 gap-8 p-10">
          <a href="https://microsoft-clone-fawn.vercel.app/" target="_blank">
            <ImageCard image={msclone} width={300} height={300} />
          </a>
          <a href="https://netflixclone-three-iota.vercel.app/" target="_blank">
            <ImageCard image={netclone} width={50} height={50} />
          </a>
          <a
            href="https://calculator-roan-seven-37.vercel.app/"
            target="_blank"
          >
            <ImageCard image={calc} width={300} height={300} />
          </a>
        </div>
        {/* <button className="text-black bg-white rounded-full w-fit p-2 mx-auto ">
          See more
        </button> */}
      </div>
    </section>
  );
};

export default PortfolioSec;
