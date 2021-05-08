import React from "react";
import "./Chats.css";
import Chat from "./Chat";
function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Yo !"
        timestamp="40 seconds ago"
        profilePic="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
      />
      <Chat
        name="Mark"
        message="Yo Whats up!"
        timestamp="40 seconds ago"
        profilePic="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <Chat
        name="Ana"
        message="H!"
        timestamp="40 seconds ago"
        profilePic="https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
}
export default Chats;
