import React from "react";
import { useParams } from "react-router-dom";
import { toursList } from "../data";
import Rating from "./Rating";
import "./contenr.css";
import "./semor.css";
let adventure = "ADVENTURE";
const Semor = () => {
  const { id } = useParams();
  const tour = toursList.find((t) => t.id === +id);
  const { title, priceFrom, image, duration, rating, reviews } = tour;
  return (
    <div className="divSemor">
      <div className="contenre">
        <p className="onepa">
          United Arab Emirates Things to do in Dubai Safari
        </p>
        <button className="semorBtn">{adventure}</button>
        <h1 className="semorH1">Dubai : {tour.title}</h1>

        <div className="imgTor">
          <img src={require(`${image}`)} alt="" />
          <div className="toRigth">
            <h3>Save up to 35%</h3>
            <div className="pading">
              <h4>Booked 42 times yesterday</h4>
              <div className="price">
                <div className="pri">
                  <h2>${priceFrom}</h2>
                  <p>per person</p>
                </div>
              </div>
              <div className="final">
                <p>
                  <i className="fa fa-calendar-check"></i>
                  <span style={{ color: "blue", fontWeight: "500" }}>
                    {" "}
                    Reserve now and play later{" "}
                  </span>{" "}
                  to book your sport and pay nothing today
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="vbb">
          <p className="p">
            Discover a different side of Dubai an a fun-filled safari aceoss the
            desert. try sandboarding, dune bashing and a camel ride, whit the
            option to add an electifying quad bike ride or immersive Al khayma
            Camp dinner experence to your adventure.
          </p>
          <h1>About this activity</h1>
          <div className="ftr">
            <div className="icon">
              <i
                style={{ color: "rgb(0, 131, 87)" }}
                className="fa fa-square-check"
              ></i>
              <h2>Free cancellation</h2>
            </div>
            <div>
              <p>Cancel up to 24 hours in advance to receive a full refund</p>
            </div>
            <div className="icon">
              <i style={{ color: "#019664" }} className="fa fa-square-plus"></i>
              <h2>Reserve now & pay later</h2>
            </div>
            <div>
              <p>
                Keep your travel plan flexible --- book your spot and pay
                nothinng today
              </p>
            </div>
            <div className="icon">
              <i style={{ color: "#fc1717" }} className="fa fa-virus"></i>
              <h2>Covid-19 precautions</h2>
            </div>
            <div>
              <p>
                Specical health and safely measures are in place Check your
                activity voucher once you book for full detais
              </p>
            </div>
            <div className="icon">
              <i style={{ color: "#5c015c" }} className="fa fa-clock"></i>
              <h2>{duration}</h2>
            </div>
            <div>
              <p>Check availability to see startng times</p>
            </div>
            <div className="icon">
              <i style={{ color: "#e20ae2" }} className="fa fa-user-check"></i>
              <h2>Live tour guide</h2>
            </div>
            <div>
              <p>English</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Semor;
