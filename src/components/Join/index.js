import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

export const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="join-outer-container">
      <div className="join-inner-container">
        <h1 className="heading">Join</h1>
        <div>
          <input
            className="join-input"
            type="text"
            placeholder="Name"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            className="join-input mt-20"
            type="text"
            placeholder="Room"
            onChange={e => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={e => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button type="submit" className="button mt-20">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};
