import React, { useContext, useState, useEffect } from 'react'
import "./FloorPlans.css"
import floorImg1 from "../assets/Godrej Horizon - Signature Tower - Floor & Unit plans - Feb 2023 - For internal training purpose-01.png"
import { ThanksContext } from '../App';
import { useNavigate, useLocation } from 'react-router-dom';
import mainLogo from "../assets/formlogo_godrej_properties.png";
import axios from 'axios';

const FloorPlans = () => {

    const { setThanksState } = useContext(ThanksContext);
    const navigate = useNavigate();
  //Handeling Form Logic
  //data
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    origin: "",
    area: "form_popup",
    ip: "",
    domain: "godrejofficial.in",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setEnquiryData({ ...enquiryData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(enquiryData);
    try {
        const fetchData = async () => {
          const jsonData = JSON.stringify(enquiryData);
          await axios
            .post(
              "https://www.crm.brickfolio.in/api/leads/add_raw_lead",
              jsonData,
              {
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  "Access-Control-Allow-Origin": "*",
                },
              }
            )
            .then((res) => {
              setThanksState(true);
              navigate("/thanks");
            });
        };
        fetchData();
    //   console.log(enquiryData);
    } catch (error) {
      console.log(error.message);
    }
  };

    //User ip address fetching
    useEffect(() => {
        const fetchIP = async () => {
          try {
            const response = await axios.get('https://godrejofficial.in/userApi.php');
            const ip = response.data.ip;
            // console.log(ip)
            setEnquiryData((prevData) => ({ ...prevData, ip }));
          } catch (error) {
            console.log('Error fetching IP address:', error);
          }
        };
    
        fetchIP();
      }, []);

  //utm data
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("utm_source")) {
      setEnquiryData((prevData) => ({
        ...prevData,
        utm_source: searchParams.get("utm_source"),
        utm_medium: searchParams.get("utm_medium"),
        utm_campaign: searchParams.get("utm_campaign"),
        utm_term: searchParams.get("utm_term"),
        utm_content: searchParams.get("utm_content"),
      }));
    }
  }, [location]);

  const [formPopup, setFormpopup] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [transitionClass, setTransitionClass] = useState("");

  useEffect(() => {
    if (formPopup) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        setTransitionClass("popupEffect");
      }, 10); // Delay adding the class
    } else {
      setTransitionClass(""); // Remove the class immediately
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [formPopup]);

  const closePopup = (e) => {
    e.stopPropagation()
    setIsExiting(true);
    setTimeout(() => {
      setFormpopup(false);
      setIsExiting(false);
    }, 300); // Duration of the transition in milliseconds
  };
  //************** */

  return (
     <div className='floorplan-cont p-4 d-flex align-items-center' id="floorplans">
        <div>
        <div><h2 className='text-center p-3'><span>Floor Plans</span></h2></div>
        <div className='floorplanimg-cont'>
            <div className='floorplan-img-btn-cont'>
                <img src={floorImg1} alt="" className='blur-img'/>
                <button className='btn main-btn' onClick={()=>setFormpopup(!formPopup)}>View Plan</button>
            </div>
            <div className='floorplan-img-btn-cont'>
                <img src={floorImg1} alt="" className='blur-img'/>
                <button className='btn main-btn' onClick={()=>setFormpopup(!formPopup)}>View Plan</button>
            </div>
            <div className='floorplan-img-btn-cont'>
                <img src={floorImg1} alt="" className='blur-img'/>
                <button className='btn main-btn' onClick={()=>setFormpopup(!formPopup)}>View Plan</button>
            </div>
            <div className='floorplan-img-btn-cont'>
                <img src={floorImg1} alt="" className='blur-img'/>
                <button className='btn main-btn' onClick={()=>setFormpopup(!formPopup)}>View Plan</button>
            </div>
        </div>
        {formPopup && (
          <div className={`popupContainer ${isExiting ? "exit" : ""}`} onClick={closePopup}>
            <div className={`popup ${transitionClass}`} onClick={(e)=>e.stopPropagation()}>
              <div className="popup-img-cont">
                <img src={mainLogo} alt="" />
              </div>
              <div className="popup-inp-cont">
                <h2>Register to view plan</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    pattern="[A-Za-z\s]+"
                    title="Please enter a valid name (only letters and spaces allowed)."
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    minLength="10"
                    maxLength="12"
                    pattern="[0-9]+"
                    title="Please enter a valid number (only numbers allowed)."
                    onChange={handleChange}
                    required
                  />
                  <div className="popup-submit-btn-cont">
                    <button type="submit" className="submit-btn">
                      View Plan
                    </button>
                  </div>
                </form>
                <button className="close-btn" onClick={closePopup}>
                  X
                </button>
              </div>
            </div>
          </div>
        )}
        </div>        
    </div>
  )
}

export default FloorPlans