
const JobCards = ({image, title, context }) => {
  return (
    <>
      <div className="flex container p-1 pr-2 pl-2 text-white bg-[#222222] justify-start items-center gap-5 rounded-md ">
        <img src={image} alt="" className="w-8 h-8" />
        <div className="card">
          <div className="title font-bold text-2xl">{title}</div>
          <div className="context text-white">{context}</div>
        </div>
      </div>
    </>
  );
};

export default JobCards;
