import { memo } from "react";
import "./DescriptionSection.sass";

interface DescriptionSectionProps {
  description: string;
}
export const DescriptionSection = memo(
  ({ description }: DescriptionSectionProps) => {
    return (
      <div className="singlAddComponentContainer">
        <div className="bigText" style={{ paddingLeft: "8%" }}>
          Description
        </div>
        <hr id="line" />
        <div id="postDesc" className="text">
          {description}
        </div>
      </div>
    );
  }
);
