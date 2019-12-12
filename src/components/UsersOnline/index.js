import React from "react";
import onlineIcon from "../../icons/onlineIcon.png";
import "./UsersOnline.css";

export const UsersOnline = props => {
  const { users } = props;
  return (
    <div className="text-container">
      {users ? (
        <>
          <h1>People currently chatting:</h1>
          <div className="active-container">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="active-item">
                  <img src={onlineIcon} alt="Online Icon" />
                  <span className="active-text">{name}</span>
                </div>
              ))}
            </h2>
          </div>
        </>
      ) : null}
    </div>
  );
};
