import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex gap-[20px]">
          <img
            height={64}
            width={64}
            className=" object-cover rounded-md"
            src={item.img}
            alt=""
          />
          <div className="flex flex-col justify-between">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span className="">{item.bedroom} bedroom</span>
            <b>₹ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
