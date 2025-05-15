import React from "react";

const CompanyCard = ({ image }) => {
  return (
    <div id="portfolio">
      <img src={image} alt="" className="w-40" />
    </div>
  );
};

export default CompanyCard;
