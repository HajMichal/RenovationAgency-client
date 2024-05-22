import "./MessageBubble.sass";
import { useSession } from "../../../hooks/useSession";

interface MessageBubbleProps {
  senderId: number;
  body: string;
}
export const MessageBubble = ({ senderId, body }: MessageBubbleProps) => {
  const { userData } = useSession();

  return (
    <div
      className={`chat-bubble ${senderId === userData?.id ? "user" : "other"}`}
    >
      <p style={{ width: "fit-content" }}>{body}</p>
    </div>
  );
};
