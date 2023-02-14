import React from "react";
import "./locationcard.css";
import { useNavigate } from "react-router-dom";

const Location_card = () => {
  const navigate = useNavigate();
  const handleselectedLocation = () => {
    navigate("/booking/location/selected");
  };
  return (
    <div>
      <div className="locationcard_menu">
        <div className="locationcard_menu_location">
          <i className="fa-solid fa-square-parking"></i>
          <span>car park near location</span>
        </div>
        <div>
          <p>total 69 location found</p>
        </div>
      </div>
      <div>
        <div className="locationcard" onClick={handleselectedLocation}>
          <div>
            <img
              src="https://static.parclick.com/parking/2016/06/9f0/598/ab/9f0598ab-5d36-59ec-94b7-c14d06bedef0.jpg"
              alt="location image"
            />
          </div>
          <div className="location_card_info">
            <h3>indigo harlay pont neuf</h3>
            <p>price $5</p>
            <p>Lorem ipsum dolor, sit amet consecte</p>
          </div>
        </div>
        <div className="locationcard">
          <div>
            <img
              src="https://static.parclick.com/parking/2016/06/9f0/598/ab/9f0598ab-5d36-59ec-94b7-c14d06bedef0.jpg"
              alt="location image"
            />
          </div>
          <div className="location_card_info">
            <h3>indigo harlay pont neuf</h3>
            <p>price $5</p>
            <p>Lorem ipsum dolor, sit amet </p>
          </div>
        </div>
        <div className="locationcard">
          <div>
            <img
              src="https://static.parclick.com/parking/2016/06/9f0/598/ab/9f0598ab-5d36-59ec-94b7-c14d06bedef0.jpg"
              alt="location image"
            />
          </div>
          <div className="location_card_info">
            <h3>indigo harlay pont neuf</h3>
            <p>price $5</p>
            <p>Lorem ipsum dolor, sit amet consecte</p>
          </div>
        </div>
        <div className="locationcard">
          <div>
            <img
              src="https://static.parclick.com/parking/2016/06/9f0/598/ab/9f0598ab-5d36-59ec-94b7-c14d06bedef0.jpg"
              alt="location image"
            />
          </div>
          <div className="location_card_info">
            <h3>indigo harlay pont neuf</h3>
            <p>price $5</p>
            <p>Lorem ipsum dolor, sit amet </p>
          </div>
        </div>
        <div className="locationcard">
          <div>
            <img
              src="https://static.parclick.com/parking/2016/06/9f0/598/ab/9f0598ab-5d36-59ec-94b7-c14d06bedef0.jpg"
              alt="location image"
            />
          </div>
          <div className="location_card_info">
            <h3>indigo harlay pont neuf</h3>
            <p>price $5</p>
            <p>Lorem ipsum dolor, sit amet consecte</p>
          </div>
        </div>
        <div className="locationcard">
          <div>
            <img
              src="https://static.parclick.com/parking/2016/06/9f0/598/ab/9f0598ab-5d36-59ec-94b7-c14d06bedef0.jpg"
              alt="location image"
            />
          </div>
          <div className="location_card_info">
            <h3>indigo harlay pont neuf</h3>
            <p>price $5</p>
            <p>Lorem ipsum dolor, sit amet </p>
          </div>
        </div>
        <div className="locationcard">
          <div>
            <img
              src="https://static.parclick.com/parking/2016/06/9f0/598/ab/9f0598ab-5d36-59ec-94b7-c14d06bedef0.jpg"
              alt="location image"
            />
          </div>
          <div className="location_card_info">
            <h3>indigo harlay pont neuf</h3>
            <p>price $5</p>
            <p>Lorem ipsum dolor, sit amet consecte</p>
          </div>
        </div>
        <div className="locationcard">
          <div>
            <img
              src="https://static.parclick.com/parking/2016/06/9f0/598/ab/9f0598ab-5d36-59ec-94b7-c14d06bedef0.jpg"
              alt="location image"
            />
          </div>
          <div className="location_card_info">
            <h3>indigo harlay pont neuf</h3>
            <p>price $5</p>
            <p>Lorem ipsum dolor, sit amet </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location_card;
