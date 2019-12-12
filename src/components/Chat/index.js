import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";
import { InfoBar } from "../InfoBar";
import { Input } from "../Input";
import { Messages } from "../Messages";
import { UsersOnline } from "../UsersOnline";

let socket;

export const Chat = props => {
  const { location } = props;
  const [nameUser, setNameUser] = useState("");
  const [roomLogin, setRoomLogin] = useState("");
  const [roomCurrent, setRoomCurrent] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const PORT = "http://localhost:5000/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    setNameUser(name);
    setRoomLogin(room);

    socket = io(PORT);

    socket.emit("join", { name, room }, error => {
      // check user connect if had throw notif
      if (error) {
        alert(error);
      }
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [PORT, location.search]);

  useEffect(() => {
    socket.on("message", data => {
      // check who connect
      setMessages([...messages, data]);
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  });

  useEffect(() => {
    socket.on("roomData", data => {
      const { room, users } = data;
      setRoomCurrent(room);
      setUsers(users);
    });
  }, [roomCurrent, users]);

  const sendMessage = event => {
    event.preventDefault();
    if (message) {
      socket.emit("send-message", message, () => {
        setMessage("");
      });
    }
  };

  console.log(users.length);

  return (
    <div className="outer-container">
      <div className="container">
        <InfoBar room={roomLogin} />
        <Messages messages={messages} name={nameUser} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <UsersOnline users={users} />
    </div>
  );
};
