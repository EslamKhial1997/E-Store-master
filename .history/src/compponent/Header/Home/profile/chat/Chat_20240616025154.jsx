import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");
import socketIOClient from 'socket.io-client';
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  function sendMessage(e) {
    e.preventDefault();
    socket.emit("send_message", { message: message });
  }
  useEffect(() => {
    const socket = socketIOClient("http://localhost:3000");

    socket.on('previousMessages', (messages) => {
      setMessages(messages);
    });

    socket.on('newMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  console.log(messageReceived);
  return (
    <section className="msger  h-screen">
      <header className="msger-header ">
        <div className="msger-header-title">
          <i className="fas fa-comment-alt"></i> SimpleChat
        </div>
        <div className="msger-header-options">
          <span>
            <i className="fas fa-cog"></i>
          </span>
        </div>
      </header>

      <main className="msger-chat">
        <div className="msg left-msg">
          <div
            className="msg-img"
            style={{
              backgroundImage:
                "url(https://image.flaticon.com/icons/svg/145/145867.svg)",
            }}
          ></div>

          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">BOT</div>
              <div className="msg-info-time">12:45</div>
            </div>

            <div className="msg-text">
              Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
            </div>
          </div>
        </div>

        <div className="msg right-msg">
          <div
            className="msg-img"
            style={{
              backgroundImage:
                "url(https://image.flaticon.com/icons/svg/145/145867.svg)",
            }}
          ></div>

          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">Sajad</div>
              <div className="msg-info-time">12:46</div>
            </div>

            <div className="msg-text">
              You can change your name in JS section!
            </div>
          </div>
        </div>
       
        {messages.map((msg, index) => (
          <div className="msg right-msg" key={index}>
          <div
            className="msg-img"
            style={{
              backgroundImage:
                "url(https://image.flaticon.com/icons/svg/145/145867.svg)",
            }}
          ></div>

          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">Sajad</div>
              <div className="msg-info-time">12:46</div>
            </div>

            <div className="msg-text">
            msg.message
            </div>
          </div>
        </div>
          // <div key={index}>
          //   <strong>{msg.username}: </strong>
          //   <span>{msg.message}</span>
          // </div>
        ))}
        <div className="msg left-msg">
          <div
            className="msg-img"
            style={{
              backgroundImage:
                "url(https://image.flaticon.com/icons/svg/145/145867.svg)",
            }}
          ></div>

          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">BOT</div>
              <div className="msg-info-time">12:45</div>
            </div>

            <div className="msg-text">{message}😄 😄</div>
          </div>
        </div>
      </main>

      <form className="msger-inputarea">
        <input
          type="text"
          className="msger-input"
          placeholder="Enter your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="msger-send-btn" onClick={sendMessage}>
          Send
        </button>
      </form>
    </section>
  );
};

export default Chat;
