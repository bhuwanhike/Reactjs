import React from "react";

const MovieCard = ({
  movie: {
    primaryTitle,
    averageRating,
    primaryImage,
    releaseDate,
    spokenLanguages,
  },
}) => {
  return (
    <div className="movie-card">
      <img src={primaryImage} alt="" />
      <div className="mt-4">
        <h3>{primaryTitle}</h3>
        <div className="content">
          <div className="rating">
            <img src="star.png" alt="" />
            <p>{averageRating ? averageRating.toFixed(1) : "NA"}</p>
          </div>

          <span>.</span>
          <p className="lang">{spokenLanguages}</p>
          <span>.</span>
          <p className="year">
            {releaseDate ? releaseDate.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
