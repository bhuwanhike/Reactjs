import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import ham from "../assets/menu.png";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [menu, setMenu] = useState(true);

  return (
    <>
      <section className=" sm:pr-20 sm:pl-20 lg:pl-40 lg:pr-40  sm:bg-gradient-to-b sm:from-blue-950 sm:to-blue-900  bg-blue-900 flex justify-between pl-2 pr-2 items-center xl:pr-50 xl:pl-50 2xl:pr-70 2xl:pl-70">
        <img src={logo} alt="" className="w-30 h-20 lg:w-40 lg:h-40" />

        <div
          className={`flex  justify-between items-center  text-white font-bold flex-col bg-zinc-800 opacity-50 w-fit ${
            menu ? "hidden" : "block"
          } absolute right-12 top-12  border-1 rounded-md items-center p-2 sm:right-28 sm:p-3 sm:text-2xl text-center lg:block lg:relative lg:border-none lg:flex-row lg:rounded-none lg:opacity-100 lg:bg-transparent lg:gap-4 lg:right-0 lg:top-0`}
        >
          <div className="flex flex-col lg:flex-row lg:gap-8">
            <Link
              activeClass="active"
              to="aboutPage"
              spy={true}
              smooth={true}
              offset={-1500}
              duration={500}
              onClick={() => {
                setActiveTab("About");
              }}
              className={`cursor-pointer ${
                activeTab === "About"
                  ? "text-yellow-300 border-b-2 border-amber-300"
                  : "text-white"
              } hover:text-yellow-300 hover:border-b-2 border-amber-300`}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="portfolioPage"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onClick={() => {
                setActiveTab("Portfolio");
              }}
              className={`cursor-pointer ${
                activeTab === "Portfolio"
                  ? "text-yellow-300 border-b-2 border-amber-300"
                  : "text-white"
              } hover:text-yellow-300 hover:border-b-2 border-amber-300`}
            >
              Portfolio
            </Link>
            <Link
              activeClass="active"
              to="clientsPage"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onClick={() => {
                setActiveTab("Clients");
              }}
              className={`cursor-pointer ${
                activeTab === "Clients"
                  ? "text-yellow-300 border-b-2 border-amber-300"
                  : "text-white"
              } hover:text-yellow-300 hover:border-b-2 border-amber-300`}
            >
              Clients
            </Link>
            <div
              className="text-black bg-white rounded-full w-fit p-2  text-sm "
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact me
            </div>
          </div>
        </div>
        <img
          src={ham}
          alt=""
          className=" w-10 h-10 p-2 lg:hidden"
          onClick={() => {
            setMenu(!menu);
          }}
        />
      </section>
    </>
  );
};

export default Header;
