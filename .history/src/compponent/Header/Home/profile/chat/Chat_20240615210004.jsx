import React, { useEffect, useState } from 'react'
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");
const Chat = () => {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  function sendMessage() {
    console.log("Button clicked");
    socket.emit("send_message", { message: message });
  }
  useEffect(() => {
    socket.on("message", (data) => {
      setMessageReceived(data.message);
    });
  }, []);
  return (
    <section className="msger  h-screen">
    <header className="msger-header ">
      <div className="msger-header-title">
        <i className="fas fa-comment-alt"></i> SimpleChat
      </div>
      <div className="msger-header-options">
        <span><i className="fas fa-cog"></i></span>
      </div>
    </header>
  
    <main className="msger-chat">
      <div className="msg left-msg">
        <div
         className="msg-img"
         style={{backgroundImage: "url(https://image.flaticon.com/icons/svg/145/145867.svg)"}}
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
         style={{backgroundImage: "url(https://image.flaticon.com/icons/svg/145/145867.svg)"}}
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
      <div className="msg right-msg">
        <div
         className="msg-img"
         style={{backgroundImage: "url(https://image.flaticon.com/icons/svg/145/145867.svg)"}}
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
      <div className="msg left-msg">
      <div
       className="msg-img"
       style={{backgroundImage: "url(https://image.flaticon.com/icons/svg/145/145867.svg)"}}
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
    </main>
  
    <form className="msger-inputarea">
      <input type="text" className="msger-input" placeholder="Enter your message..." />
      <button type="submit" className="msger-send-btn" onClick={sendMessage}>Send</button>
    </form>
  </section>
  )
}

export default Chat
