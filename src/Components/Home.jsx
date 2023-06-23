import React, { useState, useEffect } from "react";
import "./Home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
// import homeImg1 from "../assets/Phase 1 Wadala Presenter_V5-01.png";
import homeImg1 from "../assets/Untitled design.png";
import homeImg2 from "../assets/Phase 1 WadalaPresenter_V5-02.png";
import homeImg3 from "../assets/Phase 1 WadalaPresenter_V5-03.png";
import homeMobImg from "../assets/mainMobImg.png";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home-cont">
      {windowWidth < 600 ? (
        <img src={homeMobImg} alt="" className="w-100 h-100" />
      ) : (
        <Swiper
          navigation={true}
          autoplay={{
            delay: 5000,
          }}
          pagination={{dynamicBullets:true, clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
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
      )}
    </div>
  );
};

export default Home;
