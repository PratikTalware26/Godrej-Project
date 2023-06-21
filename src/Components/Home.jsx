import React from "react";
import "./Home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
// import homeImg1 from "../assets/Phase 1 Wadala Presenter_V5-01.png";
import homeImg1 from "../assets/Untitled design.png";
import homeImg2 from "../assets/Phase 1 WadalaPresenter_V5-02.png";
import homeImg3 from "../assets/Phase 1 WadalaPresenter_V5-03.png";

const Home = () => {
  return (
    <div className="home-cont">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div>
            <img src={homeImg1} alt="" className="w-100" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={homeImg2} alt="" className="w-100" />
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={homeImg3} alt="" className="w-100" />
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
