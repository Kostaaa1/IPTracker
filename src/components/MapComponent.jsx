import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import { renderToStaticMarkup } from "react-dom/server";
import { Icon } from "leaflet";

const MapComponent = ({ data, center }) => {
  const marker =
    "data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(renderToStaticMarkup(<FaMapMarkerAlt color="red" size={25} />));

  const markerIcon = new Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
  });

  const RecenterAutomatically = ({ center }) => {
    const map = useMap();
    useEffect(() => {
      map.setView([center[0], center[1]]);
    }, [center]);
    return null;
  };

  return (
    <div className="h-[60%] w-full absolute bottom-0 z-0">
      <MapContainer center={center} zoom={13} scrollWheelZoom={true} className="h-[100%]">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={markerIcon}>
          <Popup>
            <p>
              <span className="font-bold "> Lon: </span>
              {data.longitude.toFixed(4)}
            </p>
            <p>
              <span className="font-bold "> Lat: </span>
              {data.latitude.toFixed(4)}
            </p>
          </Popup>
        </Marker>
        <RecenterAutomatically center={center} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
