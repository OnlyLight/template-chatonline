import React from "react";
import ReactEmoji from "react-emoji";

import "./Message.css";

export const Message = props => {
  const {
    message: { text, user },
    name
  } = props;

  let isSentByCurrentUser = false; // set default user current is false
  let trimmedName = name.trim().toLowerCase(); // get name user current

  if (user === trimmedName) {
    isSentByCurrentUser = true; // check user login and user send message have same
  }
  return isSentByCurrentUser ? ( // if user login is the person send message
    <div className="message-container justify-end">
      <p className="sent-text pr-10">{trimmedName}</p>
      <div className="message-box background-blue">
        <p className="message-text color-white">
          {ReactEmoji.emojify(text, { emojiType: "emojione" })}
        </p>
      </div>
    </div>
  ) : (
    // if user login is not hte person send message
    <div className="message-container justify-start">
      <div className="message-box background-light">
        <p className="message-text color-dark">
          {ReactEmoji.emojify(text, { emojiType: "emojione" })}
        </p>
      </div>
      <p className="sent-text pl-10 ">{user}</p>
    </div>
  );
};
