import { SessionMessage } from "./SessionMessage";

export interface StartConversationResponse {
  id: number;
  createdAt: Date;
  convParticipants: {
    userId: number;
  }[];
  messages: SessionMessage[];
}
