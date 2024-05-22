import "./RightColumn.sass";
import { ContactTile, Map, ProposedAds } from "../..";
import { GetSingleBuildingResponse } from "../../../types";

interface RightColumnProps {
  buildingData: GetSingleBuildingResponse;
}
export const RightColumn = ({ buildingData }: RightColumnProps) => {
  return (
    <div id="adContentColumnRight">
      <ContactTile
        recipientId={buildingData.userId}
        phone={buildingData.user.phone}
      />
      <Map city={buildingData.city} address={buildingData.address} />
      <ProposedAds buildingData={buildingData} />
    </div>
  );
};
