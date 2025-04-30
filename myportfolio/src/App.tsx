import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageCard from "./components/ImageCard";
import i1 from "./assets/portfolio-1.png";
import i2 from "./assets/portfolio-2.png";
import i3 from "./assets/portfolio-3.png";
import i4 from "./assets/portfolio-4.png";
import i5 from "./assets/portfolio-5.png";
import i6 from "./assets/portfolio-6.png";
import facebook from "./assets/facebook.png";
import adobe from "./assets/adobe.png";
import microsoft from "./assets/microsoft.png";
import walmart from "./assets/walmart.png";
import JobCards from "./components/JobCards";
import Contact from "./components/Contact";
import faceIcon from "./assets/facebook-icon.png";
import twit from "./assets/twitter.png";
import yt from "./assets/youtube.png";
import insta from "./assets/instagram.png";
const App = () => {
  return (
    <>
      <Header />
      <div className="pr-60 pl-60 flex flex-col gap-10">
        <Hero />
        <JobCards title={"UI/UX Design"} context={"I design"} />
        <JobCards title={"Website Design"} context={"I design"} />
        <JobCards title={"UI/UX Design"} context={"I design"} />

        <h1 className="text-6xl text-white font-bold mx-auto mt-10">
          My portfolio
        </h1>
        <p className="pr-20 pl-20 text-center text-white">
          I take pride in paying attention to the smallest details and making
          sure that my work is pixel perfect. I am excited to bring my skills
          and experience to help businesses achieve their goals and create a
          strong online presence.
        </p>
        <div className="grid grid-cols-3 gap-8">
          <ImageCard image={i1} width={250} />
          <ImageCard image={i2} width={250} />
          <ImageCard image={i3} width={250} />
          <ImageCard image={i4} width={250} />
          <ImageCard image={i5} width={250} />
          <ImageCard image={i6} width={250} />
        </div>
        <button className="text-black bg-white rounded-full w-fit p-2 mx-auto ">
          See more
        </button>
        <h1 className="text-6xl text-white font-bold mx-auto mt-10">
          My Clients
        </h1>
        <p className="pr-20 pl-20 text-center text-white">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with includes
        </p>
        <div className="grid grid-cols-4 gap-8">
          <ImageCard image={walmart} width={250} />
          <ImageCard image={adobe} width={250} />
          <ImageCard image={microsoft} width={250} />
          <ImageCard image={facebook} width={250} />
        </div>
        <h1 className="text-6xl text-white font-bold mx-auto mt-10">
          Contact Me
        </h1>
        <p className="pr-20 pl-20 text-center text-white">
          Please fill out the form below to discuss any work opportunities.
        </p>
        <Contact />
        <button className="text-black bg-white rounded-md w-fit p-2 pl-10 pr-10 mx-auto ">
          Submit
        </button>
        <div className="icons flex mx-auto gap-5">
          <ImageCard image={faceIcon} width={50} />
          <ImageCard image={twit} width={50} />
          <ImageCard image={yt} width={50} />
          <ImageCard image={insta} width={50} />
        </div>
      </div>
      <div className="footer bg-[#222222] p-2 text-white justify-center flex mt-5">
        Copyright &copy; Bhuwan Sharma. All rights reserved.
      </div>
    </>
  );
};

export default App;
