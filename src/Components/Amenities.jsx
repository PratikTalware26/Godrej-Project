import React, { useState } from "react";
import "./Amenities.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

import amenImg1 from "../assets/Phase 1 Wadala Presenter_V5-11.png";
import amenImg2 from "../assets/Phase 1 Wadala Presenter_V5-12.png"
import amenImg3 from "../assets/Phase 1 Wadala Presenter_V5-21.png"
import amenImg4 from "../assets/Phase 1 Wadala Presenter_V5-23.png"
import amenImg5 from "../assets/Phase 1 Wadala Presenter_V5-24.png"
import amenImg6 from "../assets/Phase 1 Wadala Presenter_V5-27.png"
import amenImg7 from "../assets/Phase 1 Wadala Presenter_V5-28.png"
import amenImg8 from "../assets/Phase 1 Wadala Presenter_V5-30.png"
import amenImg9 from "../assets/Phase 1 Wadala Presenter_V5-31.png"

const Amenities = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Function to handle image click and enlarge it
  const handleImageClick = (src) => {
    setEnlargedImage(src);
  };

  // Function to close the enlarged image
  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  return (
    <div className="d-flex align-items-center p-4 amenities-cont">
        <div className="w-100">
      <div>
        <h2 className="text-center p-3"><span>Amenities</span></h2>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper amenities-slides-cont"
        >
          <SwiperSlide>
            <div onClick={() => handleImageClick(amenImg1)} className="h-100">
              <img src={amenImg1} alt="" className="w-100 h-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => handleImageClick(amenImg2)} className="h-100">
              <img src={amenImg2} alt="" className="w-100 h-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => handleImageClick(amenImg3)} className="h-100">
              <img src={amenImg3} alt="" className="w-100 h-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => handleImageClick(amenImg4)} className="h-100">
              <img src={amenImg4} alt="" className="w-100 h-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => handleImageClick(amenImg5)} className="h-100">
              <img src={amenImg5} alt="" className="w-100 h-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => handleImageClick(amenImg6)} className="h-100">
              <img src={amenImg6} alt="" className="w-100 h-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => handleImageClick(amenImg7)} className="h-100">
              <img src={amenImg7} alt="" className="w-100 h-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => handleImageClick(amenImg8)} className="h-100">
              <img src={amenImg8} alt="" className="w-100 h-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div onClick={() => handleImageClick(amenImg9)} className="h-100">
              <img src={amenImg9} alt="" className="w-100 h-100" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {enlargedImage && (
        <div className="enlarged-image-overlay" onClick={closeEnlargedImage}>
          <div className="enlarged-image-container">
            <img src={enlargedImage} alt="" className="enlarged-image" />
            <div className="close-button" onClick={closeEnlargedImage}>
              &#x2715;
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Amenities;

