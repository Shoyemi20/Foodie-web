// eslint-disable-next-line no-unused-vars
import React from "react";
import img from "../assets/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className="space-y-5 lg:pt-14">
        <h1 className="font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
          quisquam! Fugiat provident ex perspiciatis atque tenetur velit? Sequi
          modi rem quos. Laborum aliquid magni facilis illo officia reiciendis,
          voluptate, nemo neque recusandae impedit molestias veritatis numquam
          officiis repudiandae, minima omnis asperiores nobis culpa similique
          architecto. Fuga, sed accusantium!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit unde nemo accusamus nulla amet ducimus ipsum ipsam
          molestiae eius eaque.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
