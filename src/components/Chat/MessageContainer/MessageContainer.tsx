import "./MessageContainer.sass";
import { SessionMessage, StartConversationResponse } from "../../../types";
import { MessageBubble } from "../MessageBubble/MessageBubble";
import { IconSpeedboat } from "@tabler/icons-react";

interface MessageContainerProps {
  conversationState: StartConversationResponse;
  sessionMessages: SessionMessage[];
}
export const MessageContainer = ({
  conversationState,
  sessionMessages,
}: MessageContainerProps) => {
  return (
    <div id="messageContainer">
      {conversationState.messages.length == 0 &&
      sessionMessages.length === 0 ? (
        <div className="centerContent">
          <IconSpeedboat stroke={1} size={230} />
          <p>Ask a question here</p>
        </div>
      ) : (
        <>
          {conversationState.messages.map(({ id, body, senderId }) => (
            <MessageBubble key={id} body={body} senderId={senderId} />
          ))}
          {sessionMessages.map(({ id, body, senderId }) => (
            <MessageBubble key={id} body={body} senderId={senderId} />
          ))}
        </>
      )}
    </div>
  );
};
