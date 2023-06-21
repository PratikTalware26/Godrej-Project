import React from 'react'
import "./FloorPlans.css"
import floorImg1 from "../assets/Godrej Horizon - Signature Tower - Floor & Unit plans - Feb 2023 - For internal training purpose-01.png"

const FloorPlans = () => {
  return (
    <div className='floorplan-cont p-4' id="floorplans">
        <div><h2 className='text-center p-2'><span>Floor Plans</span></h2></div>
        <div className='floorplanimg-cont'>
            <div className='floorplan-img-btn-cont'>
                <img src={floorImg1} alt="" className='blur-img'/>
                <button>View Plan</button>
            </div>
            <div className='floorplan-img-btn-cont'>
                <img src={floorImg1} alt="" className='blur-img'/>
                <button>View Plan</button>
            </div>
            <div className='floorplan-img-btn-cont'>
                <img src={floorImg1} alt="" className='blur-img'/>
                <button>View Plan</button>
            </div>
            <div className='floorplan-img-btn-cont'>
                <img src={floorImg1} alt="" className='blur-img'/>
                <button>View Plan</button>
            </div>
        </div>
        
    </div>
  )
}

export default FloorPlans