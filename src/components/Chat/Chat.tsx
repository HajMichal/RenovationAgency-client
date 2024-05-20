import { useEffect, useState } from "react";
import socket from "../../socket/socket";
import "./Chat.sass";
import { refreshToken } from "../../fetchData/auth/refreshToken";
import { useMutation } from "@tanstack/react-query";
import {
  startConversation,
  StartConversationOutput,
} from "../../fetchData/chat/startConversation";

interface ChatProps {
  recipientId: number;
}
export const Chat = ({ recipientId }: ChatProps) => {
  const [newMessage, setNewMessage] = useState<string>();
  const [conversationState, setConversationState] =
    useState<StartConversationOutput>();

  const { mutate } = useMutation({
    mutationFn: startConversation,
    onSuccess: (data) => {
      setConversationState(data);
    },
  });

  useEffect(() => {
    socket.on(`onMessage-#${conversationState?.id}`, (receivedMessage) => {
      console.log("receivedMessage", receivedMessage);
    });
  }, [conversationState?.id]);

  const sendMessage = () => {
    socket.emit("newMessage", {
      content: newMessage,
      recipientId: recipientId,
      conversationId: conversationState?.id,
    });
  };
  const handleConnection = () => {
    mutate({ recipientId });

    socket.auth = async (cb: (data: { token: string }) => void) => {
      cb({ token: (await refreshToken()).accessToken });
    };
    socket.connect();
  };

  return (
    <div id="chatContainer">
      <input
        type="text"
        placeholder="Type here..."
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>wyslij</button>
      <button onClick={() => handleConnection()}>connect</button>
    </div>
  );
};
