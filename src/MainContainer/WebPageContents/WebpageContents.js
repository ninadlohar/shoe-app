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
import OfferShoe from "../../assets/d1-offer.png";
import NikeShoe from "../../assets/shoe.png";

const WebPageContents = (props) => {


  return (
    <div>
      <Logo />
      <Header />
      <Trending />
      <FirstRowCardScroll set1={props.set1} set2={props.set2} set3={props.set3} NikeShoe={NikeShoe} />
      <CategoriesHeader />
      <CategoryImagesFixed />
      <BrandsHeader />
      <BrandsRowScroll />
      <UpComingReleasesHeader />
      <UpcomingReleasesRowSlider />
      <DealsHeader />
      <Deals set1={props.set1} set2={props.set2} set3={props.set3} OfferShoe={OfferShoe} />
      <Footer />
    </div>
  );
};

export default WebPageContents;
