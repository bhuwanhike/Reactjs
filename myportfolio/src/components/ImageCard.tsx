import React from "react";

const ImageCard = ({ image, width, height }) => {
  return (
    <div id="portfolio">
      <img src={image} alt="" className={`w-${width} h-${height}`} />
    </div>
  );
};

export default ImageCard;
