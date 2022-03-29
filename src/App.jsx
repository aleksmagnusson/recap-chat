import ChatMessages from "./components/ChatMessages";
import Container from "./components/Container";
import ChatField from "./components/ChatFeild";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  async function getData() {
    const response = await axios.get("https://chat.osuka.dev/chat");
    setMessages(response.data.reverse());
  }

  useEffect(() => {
    const id = setInterval(getData, 1000);
    // Cleanup-funktion
    return () => {
      clearInterval(id);
    };
  }, []);
  // getData();

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <ChatMessages messages={messages} />
          <ChatField />
        </Container>
      </header>
    </div>
  );
}

export default App;
