import "./Chat.sass";
import { useEffect, useState } from "react";

import socket from "../../socket/socket";
import { StartConversationOutput } from "../../fetchData/chat/startConversation";
import { MessageBubble } from "./MessageBubble/MessageBubble";

interface ChatProps {
  recipientId: number;
  conversationState: StartConversationOutput | null;
  setConversationState: React.Dispatch<
    React.SetStateAction<StartConversationOutput | null>
  >;
}
export const Chat = ({
  recipientId,
  conversationState,
  setConversationState,
}: ChatProps) => {
  const [newMessage, setNewMessage] = useState<string>();
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
  return (
    <>
      {conversationState && (
        <div id="chatContainer">
          <div>
            <input
              type="text"
              placeholder="Type here..."
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={sendMessage}>wyslij</button>
            <button onClick={() => setConversationState(null)}>X</button>
          </div>
          <div id="messageContainer">
            {conversationState.messages.length === 0 ? (
              <div>pusta</div>
            ) : (
              conversationState.messages.map(({ id, body, senderId }) => (
                <MessageBubble key={id} body={body} senderId={senderId} />
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};
