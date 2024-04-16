import "./SingleAd.sass";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleBuilding } from "../../../fetchData/building/getSinglePost";
import { useQuery } from "@tanstack/react-query";
import {
  AdvertisementCard,
  ContactTile,
  DescriptionSection,
  Footer,
  Logo,
  Map,
  NavBar,
  PostHeader,
} from "../../../components";
import useStore from "../../../store";
import { getAllBuildings } from "../../../fetchData/building/getAllBuildings";
import { BuildingResponse } from "../../../types";
import { useSession } from "../../../hooks/useSession";
import { useEffect } from "react";

const SingleAd = () => {
  const { id } = useParams();
  const { darkTheme } = useStore();
  const { userData } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) navigate("/auth/signin");
  }, [userData, navigate]);

  const { data: buildingData, isSuccess } = useQuery({
    queryKey: ["singleBuilding", id],
    queryFn: () => getSingleBuilding(id!),
    enabled: !!userData,
  });

  const { data: proposedBuildings, isSuccess: isSuccessProposed } = useQuery({
    queryKey: ["buildingsData"],
    queryFn: async () =>
      getAllBuildings({
        page: "0",
        gtPrice: buildingData?.estimatedCost.toString(),
      }),
    enabled: !!buildingData,
  });

  return (
    <div id="singleAddContainer" data-theme={darkTheme ? "dark" : "light"}>
      <div id="topBar">
        <Logo />
        <NavBar />
      </div>
      {isSuccess && (
        <div id="adContent">
          <div id="adContentColumnLeft">
            <PostHeader
              city={buildingData.city}
              date={buildingData.date}
              estimatedCost={buildingData.estimatedCost}
              estimatedArea={buildingData.estimatedArea}
              title={buildingData.title}
            />
            <DescriptionSection description={buildingData.description} />
            <Footer />
          </div>
          <div id="adContentColumnRight">
            <ContactTile phone={buildingData.user.phone} />
            <Map city={buildingData.city} address={buildingData.address} />
            <div id="proposedAds">
              {isSuccessProposed &&
                proposedBuildings.data.map((building: BuildingResponse) => (
                  <AdvertisementCard
                    key={building.id}
                    building={building}
                    singleAdd
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleAd;
