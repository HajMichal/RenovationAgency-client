import axiosAuthenticatedInstance from "../axiosAuthenticatedInstace";

export interface StartConversationOutput {
  id: number;
  createdAt: Date;
  convParticipants: {
    userId: number;
  }[];
  messages: {
    id: number;
    body: string;
    read: boolean;
    createdAt: Date;
    senderId: number;
    conversationId: number;
  }[];
}

interface StartConversationProps {
  recipientId: number;
}
export const startConversation = async ({
  recipientId,
}: StartConversationProps): Promise<StartConversationOutput> => {
  const response = await axiosAuthenticatedInstance.post(
    `/conversation/openChat/${recipientId}`
  );

  return response.data;
};
