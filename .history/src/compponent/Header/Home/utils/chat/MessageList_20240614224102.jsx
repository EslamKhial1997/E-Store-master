import React from 'react'

const MessageList = () => {
  return (
    <MessageList>
    {messages &&
      messages.map((message) => {
        return message.user.username === "mercy" ? (
          <Message
            model={{
              message: message.text,
              sender: message.user.name,
            }}
          />
        ) : (
          <div style={{ justifyContent: "flex-end", display: "flex" }}>
            <Message
              model={{
                message: message.text,
                sender: message.user.name,
              }}
            />
          </div>
        );
      })}
   </MessageList>
  )
}

export default MessageList
