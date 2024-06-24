
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import Cookies from "cookies-js";
const socket = io.connect("http://localhost:3000");
import socketIOClient from "socket.io-client";
import { getUser } from "../../../../Store/userController";
import { getLoggedData } from "../../../../Store/loggedUserController";

const Chat = () => {
  const [username, setUsername] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [receiver, setReceiver] = useState(''); // لتحديد المستلم
  const [users, setUsers] = useState([]); // لإدارة قائمة المستخدمين
  const [isRegistered, setIsRegistered] = useState(false);
  const { dataById } = useSelector((state) => state.StoreSliceUser);
  const { data } = useSelector((state) => state.StoreSliceUserLogged);
  const dispatch = useDispatch();
  const token = Cookies.get("token");

  // const username = data.data.name;

  useEffect(() => {
    dispatch(getUser({ id: "65b565df3247709928b1a1ff", token }));
    dispatch(getLoggedData(token));
    // الاستماع لحدث الرسائل الجديدة
    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
  });
  }, []);
  const registerUser = () => {
    socket.emit('register', { username, isAdmin });
    setIsRegistered(true);
};

const sendMessage = () => {
    const newMessage = { sender: username, receiver, content: message, isAdmin };
    socket.emit('sendMessage', newMessage);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage('');
};

const handleReceiverChange = (user) => {
    setReceiver(user.username);
    // يمكنك هنا جلب الرسائل من قاعدة البيانات للمستخدم المختار
};

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
