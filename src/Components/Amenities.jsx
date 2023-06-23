// import React, { useEffect, useState } from "react";
// import "./Amenities.css";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Pagination, Navigation, Autoplay } from "swiper";

// import amenImg1 from "../assets/Phase 1 Wadala Presenter_V5-11.png";
// import amenImg2 from "../assets/Phase 1 Wadala Presenter_V5-12.png";
// import amenImg3 from "../assets/Phase 1 Wadala Presenter_V5-21.png";
// import amenImg4 from "../assets/Phase 1 Wadala Presenter_V5-23.png";
// import amenImg5 from "../assets/Phase 1 Wadala Presenter_V5-24.png";
// import amenImg6 from "../assets/Phase 1 Wadala Presenter_V5-27.png";
// import amenImg7 from "../assets/Phase 1 Wadala Presenter_V5-28.png";
// import amenImg8 from "../assets/Phase 1 Wadala Presenter_V5-30.png";
// import amenImg9 from "../assets/Phase 1 Wadala Presenter_V5-31.png";

// const Amenities = () => {
//   const [enlargedImage, setEnlargedImage] = useState(null);

//   // Function to handle image click and enlarge it
//   const handleImageClick = (src) => {
//     setEnlargedImage(src);
//   };

//   // Function to close the enlarged image
//   const closeEnlargedImage = () => {
//     setEnlargedImage(null);
//   };
//   useEffect(() => {
//     if (enlargedImage) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [enlargedImage]);

//   //handling slides wrt windowWidth
//   const [slidesPerView, setSlidesPerView] = useState(3);
//   const [windowWidth, setWindowwidth] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => {
//       setWindowwidth(window.innerWidth);
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     if (windowWidth < 700) {
//       setSlidesPerView(1);
//     } else if (windowWidth < 1200) {
//       setSlidesPerView(2);
//     } else {
//       setSlidesPerView(3);
//     }
//   }, [windowWidth]);

//     return (
//       <div
//         className="d-flex align-items-center p-2 amenities-cont"
//         id="amenities"
//       >
//         <div className="w-100">
//           <div>
//             <h2 className="text-center p-3">
//               <span>Amenities</span>
//             </h2>
//           </div>
//           <div>
//             <Swiper
//               slidesPerView={slidesPerView}
//               spaceBetween={30}
//               pagination={{
//                 dynamicBullets: true,
//                 clickable: true,
//               }}
//               autoplay={{
//                 delay: 5000,
//               }}
//               navigation={true}
//               modules={[Pagination, Navigation, Autoplay]}
//               className="mySwiper amenities-slides-cont"
//             >
//               <SwiperSlide>
//                 <div
//                   onClick={() => handleImageClick(amenImg1)}
//                   className="h-100"
//                 >
//                   <img src={amenImg1} alt="" className="w-100 h-100" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div
//                   onClick={() => handleImageClick(amenImg2)}
//                   className="h-100"
//                 >
//                   <img src={amenImg2} alt="" className="w-100 h-100" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div
//                   onClick={() => handleImageClick(amenImg3)}
//                   className="h-100"
//                 >
//                   <img src={amenImg3} alt="" className="w-100 h-100" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div
//                   onClick={() => handleImageClick(amenImg4)}
//                   className="h-100"
//                 >
//                   <img src={amenImg4} alt="" className="w-100 h-100" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div
//                   onClick={() => handleImageClick(amenImg5)}
//                   className="h-100"
//                 >
//                   <img src={amenImg5} alt="" className="w-100 h-100" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div
//                   onClick={() => handleImageClick(amenImg6)}
//                   className="h-100"
//                 >
//                   <img src={amenImg6} alt="" className="w-100 h-100" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div
//                   onClick={() => handleImageClick(amenImg7)}
//                   className="h-100"
//                 >
//                   <img src={amenImg7} alt="" className="w-100 h-100" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div
//                   onClick={() => handleImageClick(amenImg8)}
//                   className="h-100"
//                 >
//                   <img src={amenImg8} alt="" className="w-100 h-100" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div
//                   onClick={() => handleImageClick(amenImg9)}
//                   className="h-100"
//                 >
//                   <img src={amenImg9} alt="" className="w-100 h-100" />
//                 </div>
//               </SwiperSlide>
//             </Swiper>
//           </div>
//           {enlargedImage && (
//             <div
//               className="enlarged-image-overlay"
//               onClick={closeEnlargedImage}
//             >
//               <div className="enlarged-image-container">
//                 <img src={enlargedImage} alt="" className="enlarged-image" />
//                 <div className="close-button" onClick={closeEnlargedImage}>
//                   &#x2715;
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     );
// };

// export default Amenities;

// import React, { useEffect, useState } from "react";
// import "./Amenities.css";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Pagination, Navigation, Autoplay } from "swiper";

// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";

// import amenImg1 from "../assets/Phase 1 Wadala Presenter_V5-11.png";
// import amenImg2 from "../assets/Phase 1 Wadala Presenter_V5-12.png";
// import amenImg3 from "../assets/Phase 1 Wadala Presenter_V5-21.png";
// import amenImg4 from "../assets/Phase 1 Wadala Presenter_V5-23.png";
// import amenImg5 from "../assets/Phase 1 Wadala Presenter_V5-24.png";
// import amenImg6 from "../assets/Phase 1 Wadala Presenter_V5-27.png";
// import amenImg7 from "../assets/Phase 1 Wadala Presenter_V5-28.png";
// import amenImg8 from "../assets/Phase 1 Wadala Presenter_V5-30.png";
// import amenImg9 from "../assets/Phase 1 Wadala Presenter_V5-31.png";

// const Amenities = () => {
//   const [enlargedImage, setEnlargedImage] = useState(null);

//   // Function to handle image click and enlarge it
//   const handleImageClick = (src) => {
//     setEnlargedImage(src);
//   };

//   // Function to close the enlarged image
//   const closeEnlargedImage = () => {
//     setEnlargedImage(null);
//   };
//   useEffect(() => {
//     if (enlargedImage) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [enlargedImage]);

//   //handling slides wrt windowWidth
//   const [slidesPerView, setSlidesPerView] = useState(3);
//   const [windowWidth, setWindowwidth] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => {
//       setWindowwidth(window.innerWidth);
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     if (windowWidth < 700) {
//       setSlidesPerView(1);
//     } else if (windowWidth < 1200) {
//       setSlidesPerView(2);
//     } else {
//       setSlidesPerView(3);
//     }
//   }, [windowWidth]);

//   //Image gallary for mobile code
//   // Store the image paths in an array
//   const images = [
//     {
//       original: amenImg1,
//       thumbnail: amenImg1,
//       description: "Amenity 1",
//     },
//     {
//       original: amenImg2,
//       thumbnail: amenImg2,
//       description: "Amenity 2",
//     },
//     {
//       original: amenImg3,
//       thumbnail: amenImg3,
//       description: "Amenity 3",
//     },
//     {
//       original: amenImg4,
//       thumbnail: amenImg4,
//       description: "Amenity 4",
//     },
//     {
//       original: amenImg5,
//       thumbnail: amenImg5,
//       description: "Amenity 5",
//     },
//     {
//       original: amenImg6,
//       thumbnail: amenImg6,
//       description: "Amenity 6",
//     },
//     {
//       original: amenImg7,
//       thumbnail: amenImg7,
//       description: "Amenity 7",
//     },
//     {
//       original: amenImg8,
//       thumbnail: amenImg8,
//       description: "Amenity 8",
//     },
//     {
//       original: amenImg9,
//       thumbnail: amenImg9,
//       description: "Amenity 9",
//     },
//   ];

//   if (windowWidth < 900) {
//     return (
//       <div>
//         <h2 className="text-center p-3">
//           <span>Amenities</span>
//         </h2>
//         <div>
//           <ImageGallery items={images} />
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div
//         className="d-flex align-items-center p-2 amenities-cont"
//         id="amenities"
//       >
//         <div className="w-100">
//           <div>
//             <h2 className="text-center p-3">
//               <span>Amenities</span>
//             </h2>
//           </div>
//           <div>
//             <Swiper
//               slidesPerView={slidesPerView}
//               spaceBetween={30}
//               pagination={{
//                 dynamicBullets: true,
//                 clickable: true,
//               }}
//               autoplay={{
//                 delay: 5000,
//               }}
//               navigation={true}
//               modules={[Pagination, Navigation, Autoplay]}
//               className="mySwiper amenities-slides-cont"
//             >
//               <SwiperSlide>
//                 <div
//                   onClick={() => handleImageClick(amenImg1)}
//                   className="h-100"
//                 >
//                   <img src={amenImg1} alt="" className="w-100 h-100" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div
//                   onClick={() => handleImageClick(amenImg2)}
//                   className="h-100"
//                 >
//                   <img src={amenImg2} alt="" className="w-100 h-100" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div
//                   onClick={() => handleImageClick(amenImg3)}
//                   className="h-100"
//                 >
//                   <img src={amenImg3} alt="" className="w-100 h-100" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div
//                   onClick={() => handleImageClick(amenImg4)}
//                   className="h-100"
//                 >
//                   <img src={amenImg4} alt="" className="w-100 h-100" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div
//                   onClick={() => handleImageClick(amenImg5)}
//                   className="h-100"
//                 >
//                   <img src={amenImg5} alt="" className="w-100 h-100" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div
//                   onClick={() => handleImageClick(amenImg6)}
//                   className="h-100"
//                 >
//                   <img src={amenImg6} alt="" className="w-100 h-100" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div
//                   onClick={() => handleImageClick(amenImg7)}
//                   className="h-100"
//                 >
//                   <img src={amenImg7} alt="" className="w-100 h-100" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div
//                   onClick={() => handleImageClick(amenImg8)}
//                   className="h-100"
//                 >
//                   <img src={amenImg8} alt="" className="w-100 h-100" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div
//                   onClick={() => handleImageClick(amenImg9)}
//                   className="h-100"
//                 >
//                   <img src={amenImg9} alt="" className="w-100 h-100" />
//                 </div>
//               </SwiperSlide>
//             </Swiper>
//           </div>
//           {enlargedImage && (
//             <div
//               className="enlarged-image-overlay"
//               onClick={closeEnlargedImage}
//             >
//               <div className="enlarged-image-container">
//                 <img src={enlargedImage} alt="" className="enlarged-image" />
//                 <div className="close-button" onClick={closeEnlargedImage}>
//                   &#x2715;
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// };

// export default Amenities;


import React, { useEffect, useState, useRef } from "react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";
import "./Amenities.css";

import amenImg1 from "../assets/Phase 1 Wadala Presenter_V5-11.png";
import amenImg2 from "../assets/Phase 1 Wadala Presenter_V5-12.png";
import amenImg3 from "../assets/Phase 1 Wadala Presenter_V5-21.png";
import amenImg4 from "../assets/Phase 1 Wadala Presenter_V5-23.png";
import amenImg5 from "../assets/Phase 1 Wadala Presenter_V5-24.png";
import amenImg6 from "../assets/Phase 1 Wadala Presenter_V5-27.png";
import amenImg7 from "../assets/Phase 1 Wadala Presenter_V5-28.png";
import amenImg8 from "../assets/Phase 1 Wadala Presenter_V5-30.png";
import amenImg9 from "../assets/Phase 1 Wadala Presenter_V5-31.png";

SwiperCore.use([Pagination, Navigation, Autoplay]);

const Amenities = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (enlargedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [enlargedImage, swiperInstance]);

  const handleImageClick = (src) => {
    setEnlargedImage(src);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.update();
    }
  }, [enlargedImage, swiperInstance]);

    //handling slides wrt windowWidth
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [windowWidth, setWindowwidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 700) {
      setSlidesPerView(1);
    } else if (windowWidth < 1200) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  }, [windowWidth]);

  return (
    <div className="d-flex align-items-center p-2 amenities-cont" id="amenities">
      <div className="w-100">
        <div>
          <h2 className="text-center p-3">
            <span>Amenities</span>
          </h2>
        </div>
        <div>
          <Swiper
            ref={swiperRef}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            slidesPerView={slidesPerView}
            spaceBetween={30}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
            }}
            navigation={true}
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
          <div className="enlarged-image-overlay">
            <div className="enlarged-image-container">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                navigation={true}
                className="enlarged-swiper"
              >
                {/* <SwiperSlide>
                  <img src={enlargedImage} alt="" className="enlarged-image" />
                </SwiperSlide> */}
                <SwiperSlide>
                  <img src={amenImg1} alt="" className="enlarged-image" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={amenImg2} alt="" className="enlarged-image" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={amenImg3} alt="" className="enlarged-image" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={amenImg4} alt="" className="enlarged-image" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={amenImg5} alt="" className="enlarged-image" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={amenImg6} alt="" className="enlarged-image" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={amenImg7} alt="" className="enlarged-image" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={amenImg8} alt="" className="enlarged-image" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={amenImg9} alt="" className="enlarged-image" />
                </SwiperSlide>
              </Swiper>
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
