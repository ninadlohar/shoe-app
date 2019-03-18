import React from "react";
import Header from "./Header/Header";
import Trending from "./Trending/Treding";
import CategoriesHeader from "./CategoriesHeader/CategoriesHeader";
import FirstRowCardScroll from "./FirstRowCardScroll/FirstRowCardScroll";
import CategoryImagesFixed from "./CategoryImagesFixed/CategoryImagesFixed";
import UpComingReleasesHeader from "./UpcomingReleasesHeader/UpcomingReleasesHeader";
import UpcomingReleasesRowSlider from "./UpcomingReleasesRowSlider/UpcomingReleasesRowSlider";
import Deals from "./Deals/Deals";
import Logo from "./Logo/Logo";
import DealsHeader from "./DealsHeader/DealsHeader";
import BrandsHeader from "./BrandsHeader/BrandsHeader";
import BrandsRowScroll from "./BrandsRowScroll/BrandsRowScroll";
import Footer from "./Footer/Footer";

const WebPageContents = () => {
  return (
    <div>
      <Logo />
      <Header />
      <Trending />
      <FirstRowCardScroll />
      <CategoriesHeader />
      <CategoryImagesFixed />
      <BrandsHeader />
      <BrandsRowScroll />
      <UpComingReleasesHeader />
      <UpcomingReleasesRowSlider />
      <DealsHeader />
      <Deals />
      <Footer />
    </div>
  );
};

export default WebPageContents;
