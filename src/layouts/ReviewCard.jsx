// eslint-disable-next-line no-unused-vars
import React from "react";

const ReviewCard = ({ name, review }) => {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,0,0,0.24)_0px_3px_8px]">
      <div>
        <p className="text-lightText">"{review}"</p>
        <p className="font-semibold mt-3">- {name}</p>
      </div>
    </div>
  );
};

export default ReviewCard;

