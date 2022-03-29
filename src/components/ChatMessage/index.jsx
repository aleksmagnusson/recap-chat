import React from "react";

function ChatMessage({ name, message }) {
  return (
    <div className="chat-message">
      {/* Ett meddelande */}
      <h4>{name}</h4>
      <p>{message}</p>
    </div>
  );
}

export default ChatMessage;
