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
  const set = {
    set1: [36, 37, 38, 39, 40],
    set2: [41, 42, 43, 44, 45],
    set3: [46, 47, 48, 49, 50]
  };

  return (
    <div>
      <Logo />
      <Header />
      <Trending />
      <FirstRowCardScroll set={set} />
      <CategoriesHeader />
      <CategoryImagesFixed />
      <BrandsHeader />
      <BrandsRowScroll />
      <UpComingReleasesHeader />
      <UpcomingReleasesRowSlider />
      <DealsHeader />
      <Deals set={set} />
      <Footer />
    </div>
  );
};

export default WebPageContents;
