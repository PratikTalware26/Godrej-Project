import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import mainLogo from "../assets/logo_godrej_properties.png";
import { useLocation, useNavigate } from "react-router";
import mainFormLogo from "../assets/formlogo_godrej_properties.png";
import axios from "axios";
import { ThanksContext } from "../App";

const Navbar = () => {
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
    e.stopPropagation();
    setIsExiting(true);
    setTimeout(() => {
      setFormpopup(false);
      setIsExiting(false);
    }, 300); // Duration of the transition in milliseconds
  };
  //************** */

  //Nav up-down appearence on scroll
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setIsNavVisible(isScrollingUp || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  //Handeling Navbar toggling icon
  const [isMenuOpen, setIsmenuOpen] = useState(false);

  //handeling click event of nav-btn
  const handleNavClick = () => {
    setIsmenuOpen(!isMenuOpen);
  };
  const handleNavLinkClick = () => {
    setIsmenuOpen(false); // Close the menu when a navigation link is clicked
  };

  return (
    <div className={`nav-cont ${isNavVisible ? "" : "hidden"}`}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={mainLogo} alt="mainLogo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleNavClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={handleNavLinkClick}
              >
                Home
              </a>
              <a className="nav-link" href="#about"                 onClick={handleNavLinkClick}>
                About
              </a>
              <a className="nav-link" href="#location"                 onClick={handleNavLinkClick}>
                Location
              </a>
              <a className="nav-link" href="#price"                 onClick={handleNavLinkClick}>
                Best Price
              </a>
              <a className="nav-link" href="#amenities"                 onClick={handleNavLinkClick}>
                Amenities
              </a>
              <a className="nav-link" href="#floorplans"                 onClick={handleNavLinkClick}>
                Floor Plans
              </a>
              <div>
                <button
                  className="nav-link btn main-btn"
                  onClick={() => setFormpopup(!formPopup)}
                >
                  Enquiry Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {formPopup && (
        <div
          className={`popupContainer ${isExiting ? "exit" : ""}`}
          onClick={closePopup}
        >
          <div
            className={`popup ${transitionClass}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup-img-cont">
              <img src={mainFormLogo} alt="" />
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
  );
};

export default Navbar;
