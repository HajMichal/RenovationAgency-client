import { memo } from "react";
import "./LocationMap.sass";
import { ContactTile } from "..";

export const LocationMap = memo(() => {
  return (
    <div>
      <ContactTile />
    </div>
  );
});
