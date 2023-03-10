import React, { useState, useEffect } from "react";
import "./location.css";
import Location_card from "./locationcard/Location_card";
import BookingLocationInfo from "./SelectedLocation/BookingLocationInfo";
import GoogleMapReact from "google-map-react";
const Location = () => {
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [showFirstDiv, setShowFirstDiv] = useState(true);

  const handleButtonClick = () => {
    setShowSecondDiv(!showSecondDiv);
    setShowFirstDiv(!showFirstDiv);
  };
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

  return (
    <div className="location_flex">
      {windowWidth > 1100 ? (
        <>
          <div className="location_option">
            <Location_card />
          </div>
          <div className="location_map">{/* <BookingLocationInfo /> */}</div>
        </>
      ) : (
        <>
          {showFirstDiv && (
            <div className="location_option">
              <Location_card />
            </div>
          )}
          {showSecondDiv && <div className="location_map"></div>}
          <button className="showmap_button" onClick={handleButtonClick}>
            Show map
          </button>
        </>
      )}
    </div>
  );
};

export default Location;
