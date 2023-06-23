import React from 'react'
import "./About.css"
// import aboutImg from "../assets/Phase 1 Wadala Presenter_V5-14.png"
import aboutImg from "../assets/aboutImg.png"

const About = () => {
  return (
    <div className='about-cont p-4' id="about">
        <div>
            <h2 className='text-center p-2'><span>About Us</span></h2>
        </div>
        <div className='d-flex align-items-center g-20 about-desc'>
        <div className='w-100 about-img-cont'>
            <img src={aboutImg} alt="aboutImg" className='w-100 about-img'/>
        </div>
        <div className='w-100 about-desc'>
        <p>
        Welcome to Godrej Horizon Crest, an exquisite residential project located in the bustling neighborhood of Wadala, Mumbai. Nestled amidst the vibrant cityscape, Godrej Horizon Crest stands tall as a testament to luxury, comfort, and convenience.
        </p>
        <p>
        With a rich legacy of over a century, Godrej Properties has crafted this magnificent residential complex, offering a perfect blend of contemporary design and thoughtful amenities. The project showcases impeccable craftsmanship and attention to detail, ensuring an unparalleled living experience for its residents.
        </p>
        <p>
        Godrej Horizon Crest is a testament to Godrej Properties' commitment to excellence, innovation, and customer satisfaction. Come, experience a life of luxury and tranquility at Godrej Horizon Crest, where every detail is crafted to perfection.
        </p>
        </div>
        </div>
    </div>
  )
}

export default About