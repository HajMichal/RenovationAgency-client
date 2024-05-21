import "./ProposedAds.sass";
import { useQuery } from "@tanstack/react-query";
import { getAllBuildings } from "../../../fetchData/building/getAllBuildings";
import { BuildingsResponse, GetSingleBuildingResponse } from "../../../types";
import { AdvertisementCard } from "../..";

interface ProposedAdsProps {
  buildingData: GetSingleBuildingResponse;
}
export const ProposedAds = ({ buildingData }: ProposedAdsProps) => {
  const { data: proposedBuildings, isSuccess } = useQuery({
    queryKey: ["buildingsData"],
    queryFn: async () =>
      getAllBuildings({
        page: "0",
        gtPrice: buildingData?.estimatedCost.toString(),
      }),
    enabled: !!buildingData,
  });
  return (
    <div id="proposedAds">
      {isSuccess &&
        proposedBuildings.data.map((building: BuildingsResponse) => (
          <AdvertisementCard key={building.id} building={building} singleAdd />
        ))}
    </div>
  );
};
