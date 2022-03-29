import React from "react";
import ChatMessage from "../ChatMessage";

function ChatMessages({ messages }) {
  // Object destructuring
  // { message } = props;
  // message = message.props;

  return (
    <div className="chat-messages">
      {/* Rutan som kommer innehålla alla meddelanden */}

      {messages.map((message) => {
        return (
          <ChatMessage
            key={message.id}
            name={message.name}
            message={message.message}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
