import ui from "../assets/ui-design.png";

const JobCards = ({ title, context }) => {
  return (
    <>
      <div className="flex container p-2 text-white bg-[#222222] justify-start items-center gap-7 rounded-md ">
        <img src={ui} alt="" className="w-10 h-10" />
        <div className="card">
          <div className="title font-bold text-3xl">{title}</div>
          <div className="context text-black">{context}</div>
        </div>
      </div>
    </>
  );
};

export default JobCards;
