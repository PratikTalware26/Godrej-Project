import React from 'react'
import "./Location.css"
import locationImg from "../assets/Phase 1 Wadala Presenter_V5-13.png"

const Location = () => {
  return (
    <div className='p-4'>
        <div>
            <h2 className='text-center p-2'><span>Location</span></h2>
        </div>
        <div className='d-flex align-items-center g-20 location-desc'>
        <div className='w-100'>
            <img src={locationImg} alt="locationImg" className='w-100 about-img'/>
        </div>
        <div className='w-100'>
            {/* <div><h3>Project Highlights</h3></div> */}
            <div>
                <p>- Luxury 2&3 bed residences with sprawling deck</p>
                <p>- Overlooking eastern seaboard and City Skyline</p>
                <p>- With all World Class amenities </p>
                <p>- Well-Connected Location - RA Kidwai Road</p>
                <p>- Development by 5 Acres Land parcel</p>
                <p>
                Located in Wadala, one of Mumbai's most sought-after neighborhoods, Godrej Horizon Crest offers excellent connectivity to major commercial hubs, educational institutions, healthcare facilities, and entertainment zones. With seamless access to transportation networks, residents can enjoy the convenience of easy commutes and explore the vibrant city at their leisure.
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Location