import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content absolute-center text-white px-2">
        <h1 className="font-weight-bold">
          Photo by Ave Calvar Martinez The best free stock photos & videos
          shared by talented creators.
        </h1>
        <div className="banner__search">
          <input
            type="text"
            placeholder="Search for free photos and videos"
            className="form-control rounded-lg"
          />
        </div>
        <p className="font-12 mt-1">
          Suggested: christmas welcome jungle gun globe chocolate more
        </p>
      </div>
    </div>
  );
};

export default Banner;
