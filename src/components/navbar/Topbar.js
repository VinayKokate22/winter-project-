import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";

// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./topbar.css";

const Topbar = () => {
  const [showTopBarRight, setShowTopBarRight] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/login");
  };
  const handlecontact = () => {
    navigate("/contact");
  };
  const handlehomepage = () => {
    navigate("/");
  };
  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="topbarcontainer">
      <div className="topbarleft">
        <span className="logo" onClick={handlehomepage}>
          parklik
        </span>
      </div>
      {windowWidth > 1100 ? (
        <></>
      ) : (
        <>
          <div
            className="hamburger"
            onClick={() => setShowTopBarRight(!showTopBarRight)}
          >
            <i className="fa-solid fa-bars"></i>
          </div>
        </>
      )}

      <div className="topbarcenter"></div>
      {windowWidth > 1100 ? (
        <>
          <div className="topbarright">
            <li>
              <div className="loginbutton">
                <a onClick={handleSignup}>signup</a>
              </div>
            </li>
            <li>
              <a>help</a>
            </li>
            <li>
              <a onClick={handlecontact}>contact us</a>
            </li>

            <div className="loginbutton">
              {/* {showprofile && <button onClick={handleSearch}>profile</button>} */}
              <a onClick={handleSearch}>login</a>
            </div>
          </div>
        </>
      ) : (
        <>
          {showTopBarRight && (
            <div className="topbarright">
              <li>
                <div className="loginbutton">
                  <a onClick={handleSignup}>signup</a>
                </div>
              </li>
              <li>
                <a>help</a>
              </li>
              <li>
                <a onClick={handlecontact}>contact us</a>
              </li>

              <div className="loginbutton">
                {/* {showprofile && <button onClick={handleSearch}>profile</button>} */}
                <a onClick={handleSearch}>login</a>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Topbar;
