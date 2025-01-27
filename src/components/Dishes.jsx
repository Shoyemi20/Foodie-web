// eslint-disable-next-line no-unused-vars
import React from "react";
import DishesCard from "../layouts/DishesCard";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";

const Dishes = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard img={img7} title="Tasty Dish" price="#5000" />
        <DishesCard img={img8} title="Tasty Dish" price="#5000" />
        <DishesCard img={img9} title="Tasty Dish" price="#5000" />
        <DishesCard img={img10} title="Tasty Dish" price="#5000" />
        <DishesCard img={img11} title="Tasty Dish" price="#5000" />
        <DishesCard img={img12} title="Tasty Dish" price="#5000" />
      </div>
    </div>
  );
};

export default Dishes;
