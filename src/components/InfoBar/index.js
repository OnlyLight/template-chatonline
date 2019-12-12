import React from "react";
import { Link } from "react-router-dom";
import "./InfoBar.css";
import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";

export const InfoBar = props => {
  const { room } = props;
  return (
    <div className="info-bar">
      <div className="left-inner-container">
        <img className="online-icon" src={onlineIcon} alt="" />
        <h3>{room}</h3>
      </div>
      <div className="right-inner-container">
        <Link to="/">
          <img src={closeIcon} alt="" />
        </Link>
      </div>
    </div>
  );
};
