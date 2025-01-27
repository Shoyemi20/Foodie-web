// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/hero30.jpg')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-backgroundColor font-semibold text-6xl">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <p className="text-backgroundColor">
          Discover the rich flavors of Nigeria with every bite! From spicy
          jollof rice to mouthwatering suya, we bring you authentic, home-cooked
          meals that satisfy your cravings. Experience the taste of tradition,
          made fresh and delivered to you.
        </p>
        <div className="lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
