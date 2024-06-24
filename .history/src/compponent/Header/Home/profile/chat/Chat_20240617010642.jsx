// import React, { useEffect, useState } from 'react'
// import io from "socket.io-client";
// const socket = io.connect("http://localhost:3000");
// const Chat = () => {
//   const [message, setMessage] = useState("");
//   const [messageReceived, setMessageReceived] = useState("");
//   function sendMessage(e) {
//   e.preventDefault();
//     socket.emit("send_message", { message: message });
//   }
//   useEffect(() => {
//     socket.on("message", (data) => {
//       setMessageReceived(data.message);
//     });
//   }, []);
//   console.log(messageReceived);
//   return (
//     <section className="msger  h-screen">
//     <header className="msger-header ">
//       <div className="msger-header-title">
//         <i className="fas fa-comment-alt"></i> SimpleChat
//       </div>
//       <div className="msger-header-options">
//         <span><i className="fas fa-cog"></i></span>
//       </div>
//     </header>

//     <main className="msger-chat">
//       <div className="msg left-msg">
//         <div
//          className="msg-img"
//          style={{backgroundImage: "url(https://image.flaticon.com/icons/svg/145/145867.svg)"}}
//         ></div>

//         <div className="msg-bubble">
//           <div className="msg-info">
//             <div className="msg-info-name">BOT</div>
//             <div className="msg-info-time">12:45</div>
//           </div>

//           <div className="msg-text">
//             Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
//           </div>
//         </div>
//       </div>

//       <div className="msg right-msg">
//         <div
//          className="msg-img"
//          style={{backgroundImage: "url(https://image.flaticon.com/icons/svg/145/145867.svg)"}}
//         ></div>

//         <div className="msg-bubble">
//           <div className="msg-info">
//             <div className="msg-info-name">Sajad</div>
//             <div className="msg-info-time">12:46</div>
//           </div>

//           <div className="msg-text">
//             You can change your name in JS section!
//           </div>
//         </div>
//       </div>
//       <div className="msg right-msg">
//         <div
//          className="msg-img"
//          style={{backgroundImage: "url(https://image.flaticon.com/icons/svg/145/145867.svg)"}}
//         ></div>

//         <div className="msg-bubble">
//           <div className="msg-info">
//             <div className="msg-info-name">Sajad</div>
//             <div className="msg-info-time">12:46</div>
//           </div>

//           <div className="msg-text">
//             You can change your name in JS section!
//           </div>
//         </div>
//       </div>
//       <div className="msg left-msg">
//       <div
//        className="msg-img"
//        style={{backgroundImage: "url(https://image.flaticon.com/icons/svg/145/145867.svg)"}}
//       ></div>

//       <div className="msg-bubble">
//         <div className="msg-info">
//           <div className="msg-info-name">BOT</div>
//           <div className="msg-info-time">12:45</div>
//         </div>

//         <div className="msg-text">
//           Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
//         </div>
//       </div>
//     </div>
//     </main>

//     <form className="msger-inputarea">
//       <input type="text" className="msger-input" placeholder="Enter your message..."  value={message}
//       onChange={(e) => setMessage(e.target.value)}/>
//       <button type="submit" className="msger-send-btn" onClick={sendMessage}>Send</button>
//     </form>
//   </section>
//   )
// }

// export default Chat
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");
import socketIOClient from "socket.io-client";
import { getUser } from "../../../../Store/userController";
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [receiver, setReceiver] = useState("");
  const [room, setRoom] = useState("room");
  const {data} = useSelector((state)=>state.StoreSliceUser);
  const dispatch = useDispatch()
  const username = data.data.name
  const joinRoom = () => {
    const socket = socketIOClient("http://localhost:3000");
    socket.emit("joinRoom", { username, room });
  };
  useEffect(() => {
    const socket = socketIOClient("http://localhost:3000");
dispatch(getUser ,65b565df3247709928b1a1ff)
    socket.on("previousMessages", (message) => {
      setMessages(message);
    });
    socket.on("newMessage", (message) => {
      setReceiver(message);
    });
    joinRoom();
    return () => {
      socket.disconnect();
    };
  }, []);
  console.log(receiver);

  const sendMessage = (e) => {
    e.preventDefault();
    const socket = socketIOClient("http://localhost:3000");
    const newMessage = { sender: username, receiver: room, message };
    socket.emit("sendMessage", newMessage);
    setMessage("");
  };
  console.log(messages);
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
        {messages.map((msg, index) => (
          <div key={index}>
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

                <div className="msg-text">{msg.sender}</div>
              </div>
            </div>
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

                <div className="msg-text">{msg.message}😄 😄</div>
              </div>
            </div>
          </div>
        ))}
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
