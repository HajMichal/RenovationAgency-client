import "./Map.sass";
import { memo, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@mantine/core";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import useStore from "../../store";
import { MapProps } from "../../types";
import { GetLatLng } from "../../fetchData/building/getLatLng";

export const Map = memo(({ city, address }: MapProps) => {
  const { darkTheme } = useStore();
  const [latLngValues, setLatLngValues] = useState({
    lat: 0,
    lng: 0,
  });

  const { data, isSuccess } = useQuery({
    queryKey: ["buildingLocation"],
    queryFn: async () => await GetLatLng({ city, address }),
    refetchOnWindowFocus: false,
    staleTime: 100000, // data is holding for 100seconds in cache
  });

  useEffect(() => {
    if (isSuccess) {
      setLatLngValues({
        lat: Number(data.lat),
        lng: Number(data.lon),
      });
    }
  }, [isSuccess, data]);
  return (
    <>
      {latLngValues.lat ? (
        <MapContainer
          center={[latLngValues.lat, latLngValues.lng]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            url={
              darkTheme
                ? "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            }
          />
          <Marker position={[latLngValues.lat, latLngValues.lng]} />
        </MapContainer>
      ) : (
        <Loader color="orange" />
      )}
    </>
  );
});
