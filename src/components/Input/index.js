import React from "react";
import "./Input.css";

export const Input = props => {
  const { message, setMessage, sendMessage } = props;
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button className="send-button" onClick={e => sendMessage(e)}>
        Send
      </button>
    </form>
  );
};
