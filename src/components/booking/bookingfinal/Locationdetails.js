import React, { useState, useEffect } from "react";

import GoogleMapReact from "google-map-react";
import Location_card from "../location_avail/locationcard/Location_card";
import BookingLocationInfo from "../location_avail/SelectedLocation/BookingLocationInfo";

const Locationdetails = () => {
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
          <div className="location_map">
            <BookingLocationInfo />
          </div>
        </>
      ) : (
        <>
          {/* {showFirstDiv && (
            <div className="location_option">
              <Location_card />
            </div>
          )} */}

          {/* <button onClick={handleButtonClick}>Show map</button> */}
          {/* {showSecondDiv && ( */}
          <div className="location_map">
            <BookingLocationInfo />
          </div>
          {/* )} */}
        </>
      )}
    </div>
  );
};

export default Locationdetails;
