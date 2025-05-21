import pin from "../../public/pin.png";
import bed from "../../public/bed.png";
import bath from "../../public/bath.png";
import save from "../../public/save.png";
import chat from "../../public/chat.png";
import saved from "../../public/saveddone.png";
import { Link } from "react-router-dom";
import apiRequest from "../lib/apiRequest";
import { useState } from "react";

const Card = ({ item, isInitiallySaved }) => {
  console.log(item);
  const [isSaved, setIsSaved] = useState(isInitiallySaved);
  const handleSaveClick = async () => {
    try {
      if (isSaved) {
        await apiRequest.post(`/post/unsave/${item._id}`);
      } else {
        await apiRequest.post(`/post/save/${item._id}`);
      }
      setIsSaved((prev) => !prev);
    } catch (error) {
      console.error("Save/Unsave failed", error);
    }
  };

  console.log("isSaved is:", isSaved);
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 sm:max-w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
      {/* Image Section */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover md:h-56 lg:h-64 xl:h-72"
          src={item.img}
          alt={item.title}
        />
        <div className="absolute top-2 left-2 bg-mustard text-black font-bold px-3 py-1 rounded-md text-sm md:text-base shadow-sm">
          ₹ {item.price}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-6">
        {/* Title & Address */}
        <div className="mb-3">
          <Link
            to={`/post/${item._id}`}
            className="text-xl font-semibold text-gray-900 hover:text-rebecca-purple transition-colors duration-200 md:text-2xl lg:text-3xl"
          >
            {item.title}
          </Link>

          <div className="flex items-center mt-2 text-gray-600 text-sm md:text-base">
            <img className="w-4 h-4 mr-2" src={pin} alt="Location pin" />
            <span>{item.address}</span>
          </div>
        </div>

        {/* Features & Action Buttons */}
        <div className="flex flex-col gap-y-4 sm:flex-row sm:justify-between sm:items-center">
          {/* Features */}
          <div className="flex items-center gap-x-6 text-gray-700 text-sm md:text-base">
            <div className="flex items-center gap-x-1">
              <img className="w-5 h-5" src={bed} alt="Bed icon" />
              <span>{item.bedroom} Beds</span>
            </div>
            <div className="flex items-center gap-x-1">
              <img className="w-5 h-5" src={bath} alt="Bath icon" />
              <span>{item.bathroom} Baths</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-x-3">
            {isSaved ? (
              <button
                className="p-2 rounded-full bg-mustard hover:bg-gray-200 transition duration-200 md:p-3"
                onClick={handleSaveClick}
              >
                <img
                  className="w-5 h-5 md:w-6 md:h-6"
                  src={saved}
                  alt="Save icon"
                />
              </button>
            ) : (
              <button
                className="p-2 rounded-full bg-gray-300 hover:bg-gray-200 transition duration-200 md:p-3"
                onClick={handleSaveClick}
              >
                <img
                  className="w-5 h-5 md:w-6 md:h-6"
                  src={save}
                  alt="Save icon"
                />
              </button>
            )}

            <button className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-200 md:p-3">
              <img
                className="w-5 h-5 md:w-6 md:h-6"
                src={chat}
                alt="Chat icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
