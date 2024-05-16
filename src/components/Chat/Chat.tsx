import { useEffect } from "react";
import socket from "../../socket/socket";
import "./Chat.sass";

export const Chat = () => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Users connected");
    });

    socket.on(`onMessage-#${15}`, (socket) => {
      console.log("message received");
      console.log(socket);
    });
  }, []);
  const sendMessage = () => {
    socket.emit("newMessage", {
      content: "Hello, this message is from bob to bob",
      recipientId: 3,
      conversationId: 15,
    });
  };
  const handleConnection = () => {
    socket.connect();
    console.log(socket);
  };

  return (
    <div id="chatContainer">
      <input type="text" placeholder="Type here..." />
      <button onClick={sendMessage}>wyslij</button>
      <button onClick={() => handleConnection()}>connect</button>
    </div>
  );
};
