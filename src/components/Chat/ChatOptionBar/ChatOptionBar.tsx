import { Avatar, Button } from "@mantine/core";
import "./ChatOptionBar.sass";
import { IconX } from "@tabler/icons-react";
import socket from "../../../socket/socket";
import { SessionMessage, StartConversationResponse } from "../../../types";
import { useQuery } from "@tanstack/react-query";
import { getBasicUser } from "../../../fetchData/user/getBasicUser";

interface ChatOptionBarProps {
  recipientId: number;
  setConversationState: React.Dispatch<
    React.SetStateAction<StartConversationResponse | null>
  >;
  setSessionMessages: React.Dispatch<React.SetStateAction<SessionMessage[]>>;
}
export const ChatOptionBar = ({
  recipientId,
  setConversationState,
  setSessionMessages,
}: ChatOptionBarProps) => {
  const { data } = useQuery({
    queryKey: ["BasicUserData"],
    queryFn: () => getBasicUser(recipientId),
  });

  /** Hides the chat window, Cleares session messages */
  const handleEndChat = () => {
    setConversationState(null);
    setSessionMessages([]);
    socket.disconnect();
  };

  return (
    <div id="ChatOptionBarContainer">
      <div style={{ display: "flex", alignItems: "center" }}>
        {" "}
        <Avatar radius="xl" size={"md"} style={{ marginRight: "5px" }} />
        <p>{data?.name}</p>
      </div>
      <Button onClick={handleEndChat} variant="transparent" color="gray">
        <IconX stroke={2} />
      </Button>
    </div>
  );
};
