import "./LeftColumn.sass";
import { DescriptionSection, Footer, PostHeader } from "../..";
import { GetSingleBuildingResponse } from "../../../types";

interface LeftColumnProps {
  buildingData: GetSingleBuildingResponse;
}
export const LeftColumn = ({ buildingData }: LeftColumnProps) => {
  return (
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
  );
};
