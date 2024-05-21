import "./SingleAd.sass";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import useStore from "../../../store";
import { useSession } from "../../../hooks/useSession";
import { Chat, LeftColumn, RightColumn, TopBar } from "../../../components";
import { getSingleBuilding } from "../../../fetchData/building/getSinglePost";

const SingleAd = () => {
  const navigate = useNavigate();
  const { userData } = useSession();
  const { darkTheme } = useStore();
  const { id } = useParams();

  useEffect(() => {
    if (!userData) navigate("/auth/signin");
  }, [userData, navigate]);

  const { data: buildingData, isSuccess } = useQuery({
    queryKey: ["singleBuilding", id],
    queryFn: () => getSingleBuilding(id),
    enabled: !!userData,
  });

  return (
    <div id="singleAddContainer" data-theme={darkTheme ? "dark" : "light"}>
      <TopBar />
      {isSuccess && (
        <div id="adContent">
          <LeftColumn buildingData={buildingData} />
          <RightColumn buildingData={buildingData} />
          <Chat recipientId={buildingData.userId} />
        </div>
      )}
    </div>
  );
};

export default SingleAd;
