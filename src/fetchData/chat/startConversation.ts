import { StartConversationResponse } from "../../types";
import axiosAuthenticatedInstance from "../axiosAuthenticatedInstace";

interface StartConversationProps {
  recipientId: number;
}
export const startConversation = async ({
  recipientId,
}: StartConversationProps): Promise<StartConversationResponse> => {
  const response = await axiosAuthenticatedInstance.post(
    `/conversation/openChat/${recipientId}`
  );

  return response.data;
};
