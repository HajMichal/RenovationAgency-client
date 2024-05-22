import "./Chat.sass";
import { useEffect, useState } from "react";

import socket from "../../socket/socket";
import { SessionMessage, StartConversationResponse } from "../../types";
import { MessageContainer } from "./MessageContainer/MessageContainer";
import { Input } from "@mantine/core";
import { IconSend } from "@tabler/icons-react";
import { ChatOptionBar } from "./ChatOptionBar/ChatOptionBar";

interface ChatProps {
  recipientId: number;
  conversationState: StartConversationResponse;
  setConversationState: React.Dispatch<
    React.SetStateAction<StartConversationResponse | null>
  >;
}
export const Chat = ({
  recipientId,
  conversationState,
  setConversationState,
}: ChatProps) => {
  const [newMessage, setNewMessage] = useState<string>();
  const [sessionMessages, setSessionMessages] = useState<SessionMessage[]>([]);

  useEffect(() => {
    socket.on(`onMessage-#${conversationState.id}`, ({ body, from }) => {
      const date = new Date();
      setSessionMessages([
        ...sessionMessages,
        {
          id: Date.now(),
          body: body,
          senderId: from,
          conversationId: conversationState.id,
          read: false,
          createdAt: new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
          ),
        },
      ]);
    });
  }, [conversationState.id, sessionMessages]);

  const sendMessage = () => {
    socket.emit("newMessage", {
      content: newMessage,
      recipientId: recipientId,
      conversationId: conversationState.id,
    });
  };

  return (
    <div id="chatContainer">
      <ChatOptionBar
        setConversationState={setConversationState}
        setSessionMessages={setSessionMessages}
        recipientId={recipientId}
      />
      <MessageContainer
        conversationState={conversationState}
        sessionMessages={sessionMessages}
      />
      <div>
        <Input
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type here..."
          rightSectionPointerEvents="all"
          rightSection={<IconSend size={26} onClick={sendMessage} />}
        />
      </div>
    </div>
  );
};
