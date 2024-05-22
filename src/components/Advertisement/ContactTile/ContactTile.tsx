import "./ContactTile.sass";
import { memo, useState } from "react";
import { Button, Popover, Text } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";

import { startConversation } from "../../../fetchData/chat/startConversation";
import { Phone } from "../../../icons";
import socket from "../../../socket/socket";
import { refreshToken } from "../../../fetchData/auth/refreshToken";
import { Chat } from "../..";
import { StartConversationResponse } from "../../../types";

interface ContactTileProps {
  recipientId: number;
  phone: string;
}
export const ContactTile = memo(({ phone, recipientId }: ContactTileProps) => {
  const [conversationState, setConversationState] =
    useState<StartConversationResponse | null>(null);

  // Returns message history
  const { mutate } = useMutation({
    mutationFn: startConversation,
    onSuccess: (data) => {
      setConversationState(data);
    },
  });

  const handleStartChat = () => {
    mutate({ recipientId });

    // setting access token to socket.io header
    socket.auth = async (cb: (data: { token: string }) => void) => {
      cb({ token: (await refreshToken()).accessToken });
    };
    socket.connect();
  };

  return (
    <div className="singlAddComponentContainer">
      <div id="contactTileContent">
        <Button
          onClick={() => handleStartChat()}
          color="orange"
          variant="outline"
          id="leftButton"
          disabled={conversationState !== null}
        >
          Send message
        </Button>
        <Popover withArrow shadow="md">
          <Popover.Target>
            <Button w={"30%"} color="orange">
              Call
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Text
              size="xl"
              id="bigText"
              style={{ alignItems: "center", display: "flex" }}
            >
              <Phone />
              {phone.replace(/(\d{3})(?=\d)/g, "$1 ")}
            </Text>
          </Popover.Dropdown>
        </Popover>
      </div>
      {conversationState && (
        <Chat
          recipientId={recipientId}
          conversationState={conversationState}
          setConversationState={setConversationState}
        />
      )}
    </div>
  );
});
