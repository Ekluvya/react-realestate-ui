import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "./Pin";

const Map = ({ items }) => {
  return (
    <MapContainer
      center={[items[0].latitude, items[0].longitude]}
      zoom={7}
      scrollWheelZoom={false}
      className="w-full h-full rounded-md"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => {
        return <Pin key={item.id} item={item} />;
      })}
    </MapContainer>
  );
};

export default Map;
