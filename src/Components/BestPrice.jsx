import React, { useState, useEffect, useContext } from 'react'
import "./BestPrice.css"
import { ThanksContext } from '../App';
import { useLocation, useNavigate } from 'react-router-dom';
import mainLogo from "../assets/formlogo_godrej_properties.png";
import axios from 'axios';

const BestPrice = () => {
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
    <div className='d-flex align-items-center p-4 price-cont' id='bestprice'>
        <div className='w-100'>
        <div className="head-cont">
        <h2 className='text-center p-4 text-light'>Best Pricing</h2>
      </div>
      <div className="pricetable-cont">
        <table className="table table-hover text-center">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Type</th>
              <th>Area (Sq.Ft.)</th>
              <th>Price Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2 BHK</td>
              <td>828</td>
              <td>
                <button className='btn main-btn' onClick={()=>setFormpopup(!formPopup)}>
                  View Price
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>3 BHK</td>
              <td>1000</td>
              <td>
                <button className='btn main-btn' onClick={()=>setFormpopup(!formPopup)}>
                  View Price
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>3 BHK</td>
              <td>1477</td>
              <td>
                <button className='btn main-btn' onClick={()=>setFormpopup(!formPopup)}>
                  View Price
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>

      {formPopup && (
          <div className={`popupContainer ${isExiting ? "exit" : ""}`} onClick={closePopup}>
            <div className={`popup ${transitionClass}`} onClick={(e)=>e.stopPropagation()}>
              <div className="popup-img-cont">
                <img src={mainLogo} alt="" />
              </div>
              <div className="popup-inp-cont">
                <h2>Register to view price</h2>
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
                      View Price
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
  )
}

export default BestPrice