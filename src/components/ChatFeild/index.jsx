import React, { useState } from "react";
import axios from "axios";

function ChatField() {
  const [text, setText] = useState("");

  async function sendMessage() {
    const newMessage = {
      name: "Aleks",
      message: text,
    };

    await axios.post("https://chat.osuka.dev/chat", newMessage);
    setText("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage();
  }

  return (
    <form className="chat-field" onSubmit={handleSubmit}>
      {/* Det vi skriver i inputfältet */}
      <input
        type="text"
        className="chat-field-input"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button type="submit" className="chat-field-button">
        Skicka
      </button>
    </form>
  );
}

export default ChatField;
