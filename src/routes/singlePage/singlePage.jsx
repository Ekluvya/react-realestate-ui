import Slider from "../../components/Slider";
import { singlePostData, singleUserData } from "../../lib/dummydata";
import pin from "../../../public/pin.png";
import Map from "../../components/Map";
import chat from "../../../public/chat.png";
import save from "../../../public/save.png";
import utility from "../../../public/utility.png";
import pet from "../../../public/pet.png";
import fee from "../../../public/fee.png";
import size from "../../../public/size.png";
import bedroom from "../../../public/bed.png";
import bathroom from "../../../public/bath.png";

const SinglePage = () => {
  return (
    <div className="flex h-full">
      <div className="flex-[3_3_0%]">
        <div className="pr-12">
          <Slider images={singlePostData.images} />
          {/* Info */}
          <div className="mt-8">
            {/* Top */}
            <div className="flex justify-between items-start">
              {/* Post */}
              <div className="flex flex-col gap-[20px]">
                <h1 className="text-2xl font-semibold text-gray-800">
                  {singlePostData.title}
                </h1>
                {/* Address */}
                <div className="flex items-center mt-2 text-gray-600">
                  <img className="w-4 h-4 mr-2" src={pin} alt="" />
                  <span>{singlePostData.address}</span>
                </div>

                {/* Price */}
                <div className="mt-4 text-xl font-light p-[10px] text-black bg-mustard w-[150px] text-center">
                  ₹ {singlePostData.price}
                </div>
              </div>

              {/* User */}
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <img
                    height={50}
                    width={50}
                    className=" h-full w-full object-cover"
                    src={singleUserData.image}
                    alt=""
                  />
                </div>
                <span className="font-medium text-black">
                  {singleUserData.name}
                </span>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-8 pb-6 border-t border-gray-100 pt-6">
              <h2 className="text-lg font-medium text-gray-800 mb-3">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {singlePostData.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[2_2_0%] bg-sea-shell border-l border-gray-100">
        <div className="p-6">
          <p>General</p>
          <div className="bg-white rounded-lg shadow-sm p-5">
            {/* Vertical List */}
            <div>
              <img src={utility} alt="" />
              <div>
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>

            {/* Feature */}
            <div>
              <img src={pet} alt="" />
              <div>
                <span>Pet Policy</span>
                <p>Pets allowed</p>
              </div>
            </div>

            {/* Feature */}
            <div>
              <img src={fee} alt="" />
              <div>
                <span>Property Fees</span>
                <p>Must have 3x the rent in household income</p>
              </div>
            </div>
          </div>
          <p>Room Sizes</p>
          <div className="bg-white rounded-lg shadow-sm p-5">
            {/* Vertical List */}
            <div>
              <img src={size} alt="" />
              <span>80sqft</span>
            </div>

            <div>
              <img src={bedroom} alt="" />
              <span>1 beds</span>
            </div>

            <div>
              <img src={bathroom} alt="" />
              <span>2 bathroom</span>
            </div>
          </div>

          <p>Nearby Places</p>
          <div className="bg-white rounded-lg shadow-sm p-5">
            {/* Vertical List */}
            <div>
              <img src={pet} alt="" />
              <div>
                <span>Pet Policy</span>
                <p>Pets allowed</p>
              </div>
            </div>

            <div>
              <img src={pet} alt="" />
              <div>
                <span>Pet Policy</span>
                <p>Pets allowed</p>
              </div>
            </div>

            <div>
              <img src={pet} alt="" />
              <div>
                <span>Pet Policy</span>
                <p>Pets allowed</p>
              </div>
            </div>
          </div>
          <p>Location</p>
          <div>
            <Map items={[singlePostData]} />
          </div>

          <div>
            <button>
              <img src={chat} alt="" />
              Send a message
            </button>
            <button>
              <img src={save} alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
