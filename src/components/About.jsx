// eslint-disable-next-line no-unused-vars
import React from "react";
import img from "../assets/about.png";
import Button from "../layouts/Button";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className="space-y-5 lg:pt-14">
        <h1 className="font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>

        <p>
          At FoodieWeb, we bring you the best of Nigerian cuisine, prepared with
          love and fresh ingredients. Whether you're craving smoky jollof rice,
          peppered suya, or a hearty plate of pounded yam and egusi soup, we've
          got you covered. Our meals are crafted to give you the true taste of
          home, no matter where you are.
        </p>
        <p>
          We prioritize quality, hygiene, and timely delivery, ensuring that
          every order arrives hot and delicious. With a seamless ordering
          process and a menu packed with your favorite Nigerian dishes,
          FoodieWeb is your go-to platform for satisfying your food cravings.
        </p>

        <div className="flex justify-center lg:justify-start">
          <Link to="about" spy={true} smooth={true} duration={500}>
            <Button title="Learn More" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
