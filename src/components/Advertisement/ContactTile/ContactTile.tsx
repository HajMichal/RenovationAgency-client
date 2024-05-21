import "./ContactTile.sass";
import { memo } from "react";
import { Button, Popover, Text } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";

import {
  startConversation,
  StartConversationOutput,
} from "../../../fetchData/chat/startConversation";
import { Phone } from "../../../icons";
import socket from "../../../socket/socket";
import { refreshToken } from "../../../fetchData/auth/refreshToken";

interface ContactTileProps {
  recipientId: number;
  phone: string;
  setConversationState: React.Dispatch<
    React.SetStateAction<StartConversationOutput | null>
  >;
}
export const ContactTile = memo(
  ({ phone, recipientId, setConversationState }: ContactTileProps) => {
    const { mutate } = useMutation({
      mutationFn: startConversation,
      onSuccess: (data) => {
        setConversationState(data);
      },
    });

    const handleConnection = () => {
      mutate({ recipientId });

      socket.auth = async (cb: (data: { token: string }) => void) => {
        cb({ token: (await refreshToken()).accessToken });
      };
      socket.connect();
    };

    return (
      <div className="singlAddComponentContainer">
        <div id="contactTileContent">
          <Button
            onClick={() => handleConnection()}
            color="orange"
            variant="outline"
            id="leftButton"
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
      </div>
    );
  }
);
