import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");
import socketIOClient from 'socket.io-client';
const Adminchat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  // const [messageReceived, setMessageReceived] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    const socket = socketIOClient("http://localhost:3000");
    const newMessage = { message };
    socket.emit("sendMessage", newMessage);
    setMessage("");
  };
  useEffect(() => {
    const socket = socketIOClient("http://localhost:3000");

    socket.on("previousMessages", (messages) => {
      setMessages(messages);
    });

    socket.on("newMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div className="d-flex col-10 overflow-hidden h-screen ">
      <section className="discussions col-3 h-screen overflow-y-scroll SideBarProduct bg-white">
        <div className="discussion bg-gradient-to-r from-gray-500 search mt-16">
          <div className="searchbar">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="Search..."></input>
          </div>
        </div>
        <div className="discussion message-active">
          <div className="photo">
            <div className="online"></div>
          </div>
          <div className="desc-contact">
            <p className="name">Megan Leib</p>
            <p className="message">9 pm at the bar if possible 😳</p>
          </div>
          <div className="timer">12 sec</div>
        </div>

        <div className="discussion">
          <div className="photo">
            <div className="online"></div>
          </div>
          <div className="desc-contact">
            <p className="name">Dave Corlew</p>
            <p className="message">
              Let's meet for a coffee or something today ?
            </p>
          </div>
          <div className="timer">3 min</div>
        </div>

        <div className="discussion">
          <div className="photo"></div>
          <div className="desc-contact">
            <p className="name">Jerome Seiber</p>
            <p className="message">I've sent you the annual report</p>
          </div>
          <div className="timer">42 min</div>
        </div>

        <div className="discussion">
          <div className="photo">
            <div className="online"></div>
          </div>
          <div className="desc-contact">
            <p className="name">Thomas Dbtn</p>
            <p className="message">See you tomorrow ! 🙂</p>
          </div>
          <div className="timer">2 hour</div>
        </div>

        <div className="discussion">
          <div className="photo"></div>
          <div className="desc-contact">
            <p className="name">Elsie Amador</p>
            <p className="message">What the f**k is going on ?</p>
          </div>
          <div className="timer">1 day</div>
        </div>

        <div className="discussion">
          <div className="photo"></div>
          <div className="desc-contact">
            <p className="name">Billy Southard</p>
            <p className="message">Ahahah 😂</p>
          </div>
          <div className="timer">4 days</div>
        </div>

        <div className="discussion">
          <div className="photo">
            <div className="online"></div>
          </div>
          <div className="desc-contact">
            <p className="name">Paul Walker</p>
            <p className="message">You can't see me</p>
          </div>
          <div className="timer">1 week</div>
        </div>
      </section>
      <section className="chat col-9   mt-16 SideBarProduct overflow-scroll h-screen">
        <div className="header-chat bg-gradient-to-r from-gray-500 p-3 ">
          <div className="d-flex  align-items-center">
            {" "}
            <i className=" fa fa-user-o m-2 fw-bolder" aria-hidden="true"></i>
            <p className=" m-2 fw-bolder text-light">Megan Leib</p>
          </div>
          <i
            className="icon clickable fa fa-ellipsis-h "
            aria-hidden="true"
          ></i>
        </div>
        <div className="messages-chat bg-white col-12">
          <div className="message">
            <div className="photo">
              <div className="online"></div>
            </div>
            <p className="text"> Hi, how are you ? </p>
          </div>
          <div className="message text-only">
            <p className="text">
              {" "}
              What are you doing tonight ? Want to go take a drink ?
            </p>
          </div>
          <p className="time"> 14h58</p>
          <div className="message text-only">
            <p className="text">
              {" "}
              What are you doing tonight ? Want to go take a drink ?
            </p>
          </div>
          <p className="time"> 14h58</p>
          <div className="message text-only">
            <p className="text">
              {" "}
              What are you doing tonight ? Want to go take a drink ?
            </p>
          </div>
          <p className="time"> 14h58</p>
          <div className="message text-only">
            <p className="text">
              {" "}
              What are you doing tonight ? Want to go take a drink ?
            </p>
          </div>
          <p className="time"> 14h58</p>
          <div className="message text-only">
            <p className="text">
              {" "}
              What are you doing tonight ? Want to go take a drink ?
            </p>
          </div>
          <p className="time"> 14h58</p>
          <div className="message text-only">
            <p className="text">
              {" "}
              What are you doing tonight ? Want to go take a drink ?
            </p>
          </div>
          <p className="time"> 14h58</p>
          <div className="message text-only">
            <p className="text">
              {" "}
              What are you doing tonight ? Want to go take a drink ?
            </p>
          </div>
          <p className="time"> 14h58</p>
          <div className="message text-only">
            <div className="response">
              <p className="text"> Hey Megan ! It's been a while 😃</p>
            </div>
          </div>
          {messages.map((msg, index) => (
          <div className="message text-only">
            <div className="response">
              <p className="text">{msg.message}</p>
            </div>
          </div>
          <p className="response-time time"> 15h04</p>
          <div className="message text-only">
            <div className="photo">
              <div className="online"></div>
            </div>
            <p className="text"> elsma 😳</p>
          </div>
          <p className="time"> 15h09</p>
          <div className="footer-chat bg-gray-200">
            <i className="icon fa fa-smile-o clickable" aria-hidden="true"></i>
            <input
              type="text"
              className="write-message"
              placeholder="Type your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></input>
            <i
              className="icon send fa fa-paper-plane-o clickable"
              aria-hidden="true"
              onClick={sendMessage}
            ></i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Adminchat;
