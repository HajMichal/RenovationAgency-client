import "./SingleAd.sass";
import { useParams } from "react-router-dom";
import { getSingleBuilding } from "../../../fetchData/building/getSinglePost";
import { useQuery } from "@tanstack/react-query";
import { PostHeader } from "../../../components";
import useStore from "../../../store";

const SingleAd = () => {
  const { id } = useParams();
  const { darkTheme } = useStore();
  const { data: buildingData, isSuccess } = useQuery({
    queryKey: ["buildingsData"],
    queryFn: async () => getSingleBuilding(id!),
  });
  return (
    <div id="singleAddContainer" data-theme={darkTheme ? "dark" : "light"}>
      {isSuccess && (
        <PostHeader
          city={buildingData.city}
          date={buildingData.date}
          estimatedCost={buildingData.estimatedCost}
          estimatedArea={buildingData.estimatedArea}
          title={buildingData.title}
        />
      )}
    </div>
  );
};

export default SingleAd;
