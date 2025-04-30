import { useState } from "react";
import { styleText } from "util";
import { Link } from "react-scroll";
import { useHover } from "react-use";

const App = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <>
      <div className="header">
        <ul className="flex h-15 justify-around items-center  text-white font-bold">
          <li>logo</li>
          <div className="flex gap-8">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => {
                setActiveTab("Home");
              }}
              className={`cursor-pointer ${
                activeTab === "Home"
                  ? "text-yellow-300 border-b-2 border-amber-300"
                  : "text-white"
              } hover:text-yellow-300 hover:border-b-2 border-amber-300`}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
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
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
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
              to="clients"
              spy={true}
              smooth={true}
              offset={-100}
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
          </div>
          <button
            className="text-black bg-white rounded-full w-fit p-2  "
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact me
          </button>
        </ul>
      </div>
    </>
  );
};

export default App;
