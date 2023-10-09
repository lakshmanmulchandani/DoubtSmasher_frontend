import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getMessages } from "../../api/chatroom";
import io from "socket.io-client";
import "./Chatroom.css";

function Chatroom() {
  const messagesRef = useRef(null)
  const sender = JSON.parse(localStorage.getItem("Profile"))?.result.name
  const state = useLocation().state;
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);

  const [socket, setSocket] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  useEffect(() => {
    const newSocket = io("https://doubt-smasher.onrender.com/");

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);
  useEffect(()=>{
    if(messagesRef) messagesRef.current.scrollIntoView({behaviour:'smooth'})
  },[messagesRef,messages])
  useEffect(() => {
    if (socket) {
      socket.on("new-message", (message) => {
        setMessages([...messages, message]);
      });
    }
  }, [socket, messages]);

  const handlesendMessage = (e) => {
    e.preventDefault();
    if(messageInput === "") return;
    const sender = JSON.parse(localStorage.getItem("Profile"))?.result._id;
    const chatroom = state._id;
    console.log({ content: messageInput, sender, chatroom });
    if (socket) {
      socket.emit("new-message", { content: messageInput, sender, chatroom });
    }

    setMessageInput("");
  };
  useEffect(() => {
    if (!socket) return;
    socket.emit("join-room", state._id);
  }, [socket, state]);

  console.log(state);

  const isSender = (msgsender) =>{
    if(sender === msgsender) return 'sender';
    return ''
  }

  useEffect(() => {
    const setm = async () => {
      const data = (await getMessages(state._id)).data;
      setMessages(data.messages ? data.messages : []);
      console.log(data);
    };
    setm();
  }, [dispatch, state]);

  return (
    <div className="messages-container">
      <div className="header">
      <h1>{state.name}</h1>
      <div className="topics">
        <b>Topics: </b>
        {state.topics.map((topic) => (
          <p>{topic.name}</p>
        ))}
      </div>
      </div>
      <div className="messages">
        {messages.map((message,idx) => (
          <div key={idx} className={`message ${isSender(message.sender?.name)}`}>
            <div className="header">{message.sender?.name}</div>
            <div className="body">{message.content}</div>
            <div className="footer">00:00</div>
          </div>
        ))}
        <div ref = {messagesRef}></div>
      </div>
      <form onSubmit={handlesendMessage}>
      <div className="message-footer">
        <input
          type="text"
          placeholder="Type Message"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        ></input>
        <button type="submit">Send</button>
      </div>
      </form>
    </div>
  );
}

export default Chatroom;
