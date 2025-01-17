// eslint-disable-next-line no-unused-vars
import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,0,0,0.24)_0px_3px_8px]">
      <div>
        <p className="text-lightText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ullam
          iste, accusamus vel tempora commodi, animi suscipit reiciendis
          eveniet, laudantium officia sit adipisci? Quas eius libero esse minus
          sint. Et?
        </p>
      </div>

      <div className="flex flex-row justify-center items-center  mt-4 gap-4">
        <img className="rounded-full w-1/4" src={props.img} alt="img" />
        <h3 className="font-semibold">{props.name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
