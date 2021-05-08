import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image: "...",
      message: "Whats up",
    },
    {
      name: "Ellen",
      image: "...",
      message: "How's it going!",
    },
    {
      message: "Whats up",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        You matched with Ellen on 10/08/2021
      </p>

      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="ChatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="ChatScreen__inputField"
          placeholder="Type a message ..."
          type="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="ChatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
