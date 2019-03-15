import React from "react";
import RightNavbar from "./Navbar/Navbar";
import Logo from "./Logo/Logo";
import Header from "./Header/Header";
import Trending from "./Trending/Treding";
import CategoriesHeader from "./CategoriesHeader/CategoriesHeader";
import FirstRowCardScroll from "./FirstRowCardScroll/FirstRowCardScroll";
import CategoryImagesFixed from "./CategoryImagesFixed/CategoryImagesFixed";
import UpComingReleasesHeader from "./UpcomingReleasesHeader/UpcomingReleasesHeader";
import UpcomingReleasesRowSlider from "./UpcomingReleasesRowSlider/UpcomingReleasesRowSlider";
import Deals from "./Deals/Deals";
import DealsHeader from "./DealsHeader/DealsHeader";
import BrandsHeader from "./BrandsHeader/BrandsHeader";
import InputBox from "./InputBox/InputBox";
import BrandsRowScroll from "./BrandsRowScroll/BrandsRowScroll";
import Footer from "./Footer/Footer";

const WebPageContents = () => {
  return (
    <div>
      <Logo />
      {/* <RightNavbar /> */}
      {/* <InputBox /> */}
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
