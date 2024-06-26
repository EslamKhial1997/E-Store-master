import React, { useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

function Test() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  socket.on("receiveMessage", (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  });
console.log(messages);
  const register = async () => {
    await axios.post("http://localhost:3000/register", {
      username,
      password,
      role,
    });
  };

  const login = async () => {
    const response = await axios.post("http://localhost:3000/login", {
      username,
      password,
    });
    console.log(response);
    setToken(response.data.token);
    if (role === "admin") {
      const usersResponse = await axios.get(
        "http://localhost:3000/message-users",
        {
          headers: { Authorization: response.data.token },
        }
      );
      setUsers(usersResponse.data);
    }
  };
console.log(us);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message ,selectedUser);
    socket.emit("sendMessage", { token, message, receiverId: selectedUser });
    setMessage("");
  };

  const getMessages = async (userId) => {
    const response = await axios.get(
      `http://localhost:3000/messages/${userId}`,
      {
        headers: { Authorization: token },
      }
    );
    setMessages(response.data);
  };

  const handleUserChange = (e) => {
    const userId = e.target.value;
    setSelectedUser(userId);
    getMessages(userId);
  };

  return (
    <div>
      <h1>Chat Service</h1>
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={register}>Register</button>
        <button onClick={login}>Login</button>
      </div>
      {token && (
        <div>
          {role === "admin" && (
            <div>
              <select onChange={handleUserChange} value={selectedUser}>
                <option value="">Select a user</option>
                {users.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.username}
                  </option>
                ))}
              </select>
            </div>
          )}
          <input
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" onClick={sendMessage}>Send Message</button>
        </div>
      )}
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            {msg.username}: {msg.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
