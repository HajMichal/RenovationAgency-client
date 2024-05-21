import "./RightColumn.sass";
import { Chat, ContactTile, Map, ProposedAds } from "../..";
import { GetSingleBuildingResponse } from "../../../types";
import { useState } from "react";
import { StartConversationOutput } from "../../../fetchData/chat/startConversation";

interface RightColumnProps {
  buildingData: GetSingleBuildingResponse;
}
export const RightColumn = ({ buildingData }: RightColumnProps) => {
  const [conversationState, setConversationState] =
    useState<StartConversationOutput | null>(null);
  return (
    <div id="adContentColumnRight">
      <ContactTile
        recipientId={buildingData.user.id}
        phone={buildingData.user.phone}
        setConversationState={setConversationState}
      />
      <Map city={buildingData.city} address={buildingData.address} />
      <ProposedAds buildingData={buildingData} />
      <Chat
        recipientId={buildingData.userId}
        conversationState={conversationState}
        setConversationState={setConversationState}
      />
    </div>
  );
};
