"use client"

import { MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const MapView = () => {
  return (
      <MapContainer className='h-[650px] w-[500px] mx-auto my-2' center={[17.8089548,-91.5356331]} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        >
        </TileLayer>
      </MapContainer>
  );
};

export default MapView;
