// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./components/Home";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Menu from "./components/Menu";
import Review from "./components/Review";
import Footer from "./components/Footer";

// Import your new pages
import Login from "./pages/Login";
import FoodOrderPage from "./pages/FoodOrderPage";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar: Keeps scrollable navigation */}
        <Navbar />

        <main>
          <Routes>
            {/* Define your routes for the main sections */}
            <Route
              path="/"
              element={
                <div>
                  {/* Home Page */}
                  <div id="home">
                    <Home />
                  </div>

                  {/* Dishes Section */}
                  <div id="dishes">
                    <Dishes />
                  </div>

                  {/* About Section */}
                  <div id="about">
                    <About />
                  </div>

                  {/* Menu Section */}
                  <div id="menu">
                    <Menu />
                  </div>

                  {/* Reviews Section */}
                  <div id="reviews">
                    <Review />
                  </div>
                </div>
              }
            />

            {/* Route for Login page */}
            <Route path="/login" element={<Login />} />

            {/* Route for Food Order page */}
            <Route path="/order" element={<FoodOrderPage />} />
          </Routes>
        </main>

        {/* Footer stays the same */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
