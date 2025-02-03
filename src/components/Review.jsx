// eslint-disable-next-line no-unused-vars
import React from "react";
import ReviewCard from "../layouts/ReviewCard";

const reviews = [
  {
    name: "Damilola Adewale",
    review: "The food was amazing! Quick delivery and very affordable. Definitely my go-to food app now.",
  },
  {
    name: "John Micheal",
    review: "I love how seamless the ordering process is. My jollof rice was still hot when it arrived. Fantastic service!",
  },
  {
    name: "Ngozi Okoro",
    review: "Great experience! Customer service was helpful, and I got my pounded yam just as I like it. Highly recommended!",
  },
];

const Review = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>

      <div className="flex flex-col md:flex-row gap-5 mt-5">
        {reviews.map((review, index) => (
          <ReviewCard key={index} name={review.name} review={review.review} />
        ))}
      </div>
    </div>
  );
};

export default Review;

