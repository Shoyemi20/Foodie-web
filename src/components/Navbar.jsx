import React, { useState } from "react";
import { BiChevronDown, BiRestaurant } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div>
      <div className="fixed w-full">
        <div>
          <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
            <div className="flex flex-row items-center cursor-pointer">
              {/* ScrollLink added to FoodieWeb */}
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="flex items-center gap-1"
              >
                <BiRestaurant size={32} />
                <h1 className="text-xl font-semibold">FoodieWeb</h1>
              </ScrollLink>
            </div>
            <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
              {/* React Scroll for in-page navigation */}
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-brightColor transition-all cursor-pointer"
              >
                Home
              </ScrollLink>
              <div className="relative group">
                <div className="flex items-center gap-1">
                  <ScrollLink
                    to="dishes"
                    smooth={true}
                    duration={500}
                    className="hover:text-brightColor transition-all cursor-pointer"
                  >
                    Dishes
                  </ScrollLink>

                  <BiChevronDown className="cursor-pointer" size={25} />
                </div>
                <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                  <li>
                    <ScrollLink
                      to="dishes"
                      smooth={true}
                      duration={500}
                      className="hover:text-brightColor transition-all cursor-pointer"
                    >
                      Spicy
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="dishes"
                      smooth={true}
                      duration={500}
                      className="hover:text-brightColor transition-all cursor-pointer"
                    >
                      Tasty
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="dishes"
                      smooth={true}
                      duration={500}
                      className="hover:text-brightColor transition-all cursor-pointer"
                    >
                      Delicious
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="dishes"
                      smooth={true}
                      duration={500}
                      className="hover:text-brightColor transition-all cursor-pointer"
                    >
                      Crispy
                    </ScrollLink>
                  </li>
                </ul>
              </div>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-brightColor transition-all cursor-pointer"
              >
                About
              </ScrollLink>
              <ScrollLink
                to="menu"
                smooth={true}
                duration={500}
                className="hover:text-brightColor transition-all cursor-pointer"
              >
                Menu
              </ScrollLink>
              <ScrollLink
                to="reviews"
                smooth={true}
                duration={500}
                className="hover:text-brightColor transition-all cursor-pointer"
              >
                Reviews
              </ScrollLink>

              <Link to="/login">
                <Button title="Login" />
              </Link>
              <Link to="/order" className="link">
                Order Food
              </Link>
            </nav>
            <div className="md:hidden flex items-center">
              {menu ? (
                <AiOutlineClose size={25} onClick={handleChange} />
              ) : (
                <AiOutlineMenuUnfold size={25} onClick={handleChange} />
              )}
            </div>
          </div>
          <div
            className={`${
              menu ? "translate-x-0" : "-translate-x-full"
            } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-full transition-transform duration-300 z-50 min-h-screen`}
          >
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="dishes"
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Dishes
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="menu"
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Menu
            </ScrollLink>
            <ScrollLink
              to="reviews"
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Reviews
            </ScrollLink>

            <Link to="/order" className="link">
              Order Food
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
