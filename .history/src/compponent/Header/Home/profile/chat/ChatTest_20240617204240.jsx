import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

function ChatTest() {
  const [username, setUsername] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [receiver, setReceiver] = useState(""); // لتحديد المستلم
  const [users, setUsers] = useState([]); // لإدارة قائمة المستخدمين
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const registerUser = () => {
    socket.emit("register", { username, isAdmin });
    setIsRegistered(true);
  };

  const sendMessage = () => {
    const newMessage = {
      sender: username,
      receiver,
      content: message,
      isAdmin,
    };
    socket.emit("sendMessage", newMessage);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage("");
  };

  const handleReceiverChange = (user) => {
    setReceiver(user.username);
    // يمكنك هنا جلب الرسائل من قاعدة البيانات للمستخدم المختار
  };

  return (
    <div>
      {!isRegistered ? (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>
            Admin:
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={() => setIsAdmin(!isAdmin)}
            />
          </label>
          <button onClick={registerUser} className="btn btn-danger">Register</button>
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          {isAdmin && (
            <div
              style={{
                width: "200px",
                borderRight: "1px solid black",
                padding: "10px",
              }}
            >
              <h3>Users</h3>
              {users.map((user, index) => (
                <div key={index} onClick={() => handleReceiverChange(user)}>
                  {user.username}
                </div>
              ))}
            </div>
          )}
          <div style={{ flex: 1, padding: "10px" }}>
            <div
              style={{
                border: "1px solid black",
                padding: "10px",
                height: "400px",
                overflowY: "scroll",
              }}
            >
              {messages
                .filter(
                  (msg) => msg.receiver === receiver || msg.sender === receiver
                )
                .map((msg, index) => (
                  <div
                    key={index}
                    style={{
                      textAlign: msg.sender === username ? "right" : "left",
                    }}
                  >
                    <strong>{msg.sender}</strong>: {msg.content}
                  </div>
                ))}
            </div>
            <input
              type="text"
              placeholder="Receiver"
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
            />
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatTest;
