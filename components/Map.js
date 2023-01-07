import React, { useState } from "react";
import Map from "react-map-gl";
import { getCenter } from "geolib";

function MapSearch({ searchResults }) {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  const [viewport, setViewPort] = useState({
    width: "40%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <>
      <Map
        mapStyle="mapbox://styles/adamjunios/clclz4run000a14pi2ttss85c"
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewPort(nextViewport)}
        attributionControl={false}
      >
        {/* {searchResults.map((res) => (
          <div key={res.long}>
            <Marker
              longitude={res.long}
              latitude={res.lat}
              offsetLeft={-20}
              offsetRight={-10}
            >
              <p className="cursor-pointer text-4xl">🚩</p>
            </Marker>
          </div>
        ))} */}
      </Map>
    </>
  );
}

export default MapSearch;
