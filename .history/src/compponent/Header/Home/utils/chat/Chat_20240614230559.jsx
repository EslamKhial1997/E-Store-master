import React from "react";

const Chat = () => {
  return (
    <section className="bg-danger  d-flex justify-content-center flex-wrap col-6 m-auto">
      <header className="bg-info col-12 d-flex justify-content-between p-3">
        <div className="">
          <i className="fas fa-comment-alt"></i> SimpleChat
        </div>
        <div className="msger-header-options">
          <span>
            <i className="fas fa-cog"></i>
          </span>
        </div>
      </header>

      <main className="bg-success d-flex col-12 justify-content-between flex-wrap">
        <div className="col-8 bg-danger justify-content-left">
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

        <div className="col-8 bg-dark align-items-right">
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
      </main>

      <form className="msger-inputarea">
        <input
          type="text"
          className="msger-input"
          placeholder="Enter your message..."
        />
        <button type="submit" className="msger-send-btn">
          Send
        </button>
      </form>
    </section>
  );
};

export default Chat;
