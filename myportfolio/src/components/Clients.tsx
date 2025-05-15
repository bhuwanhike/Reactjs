import ImageCard from "./ImageCard";
import facebook from "../assets/facebook.png";
import adobe from "../assets/adobe.png";
import microsoft from "../assets/microsoft.png";
import walmart from "../assets/walmart.png";
import CompanyCard from "./CompanyCard";

const Clients = () => {
  return (
    <section
      id="clientsPage"
      className="sm:pr-10 sm:pl-10 bg-gradient-to-b from-blue-700 to-blue-600 xl:pr-50 xl:pl-50 2xl:pr-70 2xl:pl-70"
    >
      <div className="flex flex-col pt-10 gap-4">
        <h1 className="text-5xl text-white font-bold mx-auto  text-center ">
          My Clients
        </h1>
        <p className="pr-10 pl-10 text-center text-white text-[20px] ">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with includes
        </p>
        <div className="grid grid-cols-2 gap-8 pr-10 pl-10 place-items-center xl:grid-cols-4">
         
            <CompanyCard image={walmart} />
          <CompanyCard image={adobe} />
          <CompanyCard image={microsoft} />
          <CompanyCard image={facebook} />
        </div>
      </div>
    </section>
  );
};

export default Clients;
