import DateMenu from "../components/booking/date_menu/DateMenu";
import Topbar from "../components/navbar/Topbar";
import "./booking.css";
import React, { useState, useEffect } from "react";
import Locationdetails from "../components/booking/bookingfinal/Locationdetails";

// import DateMenu from "../components/booking/bookingfinal/DateMenu";

const Booking = () => {
  return (
    <div className="booking_page">
      <Topbar />
      <DateMenu />
      <Locationdetails />
    </div>
  );
};

export default Booking;
