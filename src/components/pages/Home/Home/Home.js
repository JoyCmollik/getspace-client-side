import React from "react";
import Footer from "../../../shared/Footer/Footer";
import Header from "../../../shared/Header/Header";
import Banner from "../Banner/Banner";
import CategoryCarousel from "../CategoryCarousel/CategoryCarousel";
import FeaturedPlaces from "../FeaturedPlaces/FeaturedPlaces";
import PopularCities from "../PopularCities/PopularCities";
import ReviewSection from "../ReviewSection/ReviewSection";
import TravelInspiration from "../TravelInspiration/TravelInspiration";

const Home = () => {
  return (
    <div>
      <Header />

      <Banner />
      <CategoryCarousel />
      {/* featured places */}
      <FeaturedPlaces />
      <PopularCities />
      <ReviewSection />
      <TravelInspiration />
      <Footer />
    </div>
  );
};

export default Home;
