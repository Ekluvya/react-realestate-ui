import pin from "../../public/pin.png";
import bed from "../../public/bed.png";
import bath from "../../public/bath.png";
import save from "../../public/save.png";
import chat from "../../public/chat.png";

import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="flex gap-[20px]">
      <Link to={`/${item.id}`} className="flex-[2_2_0%] h-[200px]">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={item.img}
          alt=""
        />
      </Link>
      <div className="flex-[3_3_0%] flex flex-col justify-between gap-[10px]">
        <h2 className="text-xl font-semibold text-gray-800 hover:underline">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="text-gray-500 flex items-center gap-2 text-sm">
          <img width={16} height={16} src={pin} alt="" />
          <span>{item.address}</span>
        </p>
        <p className="text-lg text-center rounded-md font-light bg-light-yellow text-black w-max p-[5px]">
          ₹ {item.price}
        </p>

        {/* Bottom */}
        <div className="flex justify-between items-center mt-2 gap-[10px]">
          {/* Features */}
          <div className="flex gap-4 text-sm text-gray-600">
            {/* Feature */}
            <div className="flex items-center gap-1 p-[5px] bg-slate-200 rounded-md">
              <img width={16} height={16} src={bed} alt="" />
              <span>{item.bedroom} Bedrooms</span>
            </div>
            {/* Feature */}
            <div className="flex items-center gap-1 p-[5px] bg-slate-200 rounded-md">
              <img width={16} height={16} src={bath} alt="" />
              <span>{item.bathroom} Bathrooms</span>
            </div>
          </div>

          {/* Icons */}
          <div className="flex gap-3">
            {/* ICon */}
            <div className=" border border-solid border-spanish-gray rounded-md p-[5px] cursor-pointer hover:bg-slate-200">
              <img width={16} height={16} src={save} alt="" />
            </div>
            {/* ICon */}
            <div className="border border-solid border-spanish-gray rounded-md p-[5px] cursor-pointer hover:bg-slate-200">
              <img width={16} height={16} src={chat} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
