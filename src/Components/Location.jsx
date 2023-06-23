import React,{useState, useEffect} from 'react'
import "./Location.css"
import locationImg from "../assets/Phase 1 Wadala Presenter_V5-13.png"
// import locationImg from "../assets/locationMobImg.png"

const Location = () => {
    const [enlargedImage, setEnlargedImage] = useState(null);

  // Function to handle image click and enlarge it
  const handleImageClick = (src) => {
    setEnlargedImage(src);
  };

  // Function to close the enlarged image
  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };
  useEffect(() => {
    if (enlargedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [enlargedImage]);

  return (
    <div className='p-4' id='location'>
        <div>
            <h2 className='text-center p-2'><span>Location</span></h2>
        </div>
        <div className='d-flex align-items-center g-20 location-desc'>
        <div className='w-100 location-img-cont' onClick={()=>handleImageClick(locationImg)}>
            <img src={locationImg} alt="locationImg" className='w-100 h-100 about-img'/>
        </div>
        <div className='w-100 location-desc'>
            {/* <div><h3>Project Highlights</h3></div> */}
            <div>
                <p>Luxury 2&3 bed residences with sprawling deck</p>
                <p>Overlooking eastern seaboard and City Skyline</p>
                <p>With all World Class amenities </p>
                <p>Well-Connected Location - RA Kidwai Road</p>
                <p>Development by 5 Acres Land parcel</p>
                <p>
                Located in Wadala, one of Mumbai's most sought-after neighborhoods, Godrej Horizon Crest offers excellent connectivity to major commercial hubs, educational institutions, healthcare facilities, and entertainment zones. With seamless access to transportation networks, residents can enjoy the convenience of easy commutes and explore the vibrant city at their leisure.
                </p>
            </div>
        </div>
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
  )
}

export default Location