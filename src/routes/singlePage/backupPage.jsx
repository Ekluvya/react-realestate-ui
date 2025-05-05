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
        <div className="px-6 space-y-4">
          <p className="font-bold text-gray-700 mb-2">General</p>
          <div className="bg-white rounded-lg shadow-sm px-5 py-2 divide-y divide-gray-100">
            {/* Vertical List */}
            <div className="flex items-center gap-4 py-3">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full">
                <img src={utility} alt="" className="w-5 h-5" />
              </div>
              <div>
                <span className="font-medium text-gray-800 block">
                  Utilities
                </span>
                <p className="text-gray-500 text-sm">Renter is responsible</p>
              </div>
            </div>

            {/* Feature */}
            <div className="flex items-center gap-4 py-3">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full">
                <img src={pet} alt="" className="w-5 h-5" />
              </div>
              <div>
                <span className="font-medium text-gray-800 block">
                  Pet Policy
                </span>
                <p className="text-gray-500 text-sm">Pets allowed</p>
              </div>
            </div>

            {/* Feature */}
            <div className="flex items-center gap-4 py-3">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full">
                <img src={fee} alt="" className="w-5 h-5" />
              </div>
              <div>
                <span className="font-medium text-gray-800 block">
                  Property Fees
                </span>
                <p className="text-gray-500 text-sm">
                  Must have 3x the rent in household income
                </p>
              </div>
            </div>

            {/* End */}
          </div>
          {/* Room Sizes Title */}
          <p className="font-bold text-gray-700 mb-2">Room Sizes</p>

          {/* Room Sizes Container */}
          <div className="bg-white rounded-lg shadow-sm p-5">
            {/* Flex Row Container for Items */}
            <div className="flex justify-between items-center gap-x-4 sm:gap-x-8">
              {" "}
              {/* Use justify-between or adjust gap */}
              {/* Size */}
              <div className="flex items-center gap-3">
                {" "}
                {/* Item container */}
                <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full flex-shrink-0">
                  {" "}
                  {/* Icon container */}
                  <img src={size} alt="Size" className="w-5 h-5" />
                </div>
                <div>
                  {" "}
                  {/* Text container */}
                  <span className="font-medium text-gray-800 block text-sm">
                    {" "}
                    {/* Label */}
                    Size
                  </span>
                  <p className="text-gray-500 text-xs">
                    {" "}
                    {/* Value */}
                    80 sqft {/* Extracted value */}
                  </p>
                </div>
              </div>
              {/* Bedrooms */}
              <div className="flex items-center gap-3">
                {" "}
                {/* Item container */}
                <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full flex-shrink-0">
                  {" "}
                  {/* Icon container */}
                  <img src={bedroom} alt="Bedrooms" className="w-5 h-5" />
                </div>
                <div>
                  {" "}
                  {/* Text container */}
                  <span className="font-medium text-gray-800 block text-sm">
                    {" "}
                    {/* Label */}
                    Bedrooms
                  </span>
                  <p className="text-gray-500 text-xs">
                    {" "}
                    {/* Value */}1 bed {/* Extracted value */}
                  </p>
                </div>
              </div>
              {/* Bathrooms */}
              <div className="flex items-center gap-3">
                {" "}
                {/* Item container */}
                <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full flex-shrink-0">
                  {" "}
                  {/* Icon container */}
                  <img src={bathroom} alt="Bathrooms" className="w-5 h-5" />
                </div>
                <div>
                  {" "}
                  {/* Text container */}
                  <span className="font-medium text-gray-800 block text-sm">
                    {" "}
                    {/* Label */}
                    Bathroom
                  </span>
                  <p className="text-gray-500 text-xs">
                    {" "}
                    {/* Value */}1 bathroom {/* Extracted value */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="font-bold text-gray-700 mb-2">Nearby Places</p>
          <div className="bg-white rounded-lg shadow-sm p-5 divide-y divide-gray-100">
            {/* Vertical List */}

            {/* Row Container */}
            <div className="flex justify-between items-center gap-x-4 sm:gap-x-8">
              {/* School */}
              <div className="flex items-center gap-3">
                {" "}
                {/* Item container */}
                <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full flex-shrink-0">
                  {" "}
                  {/* Icon container */}
                  {/* Replace with actual school icon */}
                  <img src={utility} alt="School" className="w-5 h-5" />
                </div>
                <div>
                  {" "}
                  {/* Text container */}
                  <span className="font-medium text-gray-800 block text-sm">
                    {" "}
                    {/* Adjusted text size slightly */}
                    School
                  </span>
                  <p className="text-gray-500 text-xs">
                    {" "}
                    {/* Adjusted text size slightly */}
                    250m Away
                  </p>
                </div>
              </div>

              {/* Bus Stop */}
              <div className="flex items-center gap-3">
                {" "}
                {/* Item container */}
                <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full flex-shrink-0">
                  {" "}
                  {/* Icon container */}
                  {/* Replace with actual bus icon */}
                  <img src={pet} alt="Bus Stop" className="w-5 h-5" />{" "}
                  {/* Using pet icon as placeholder */}
                </div>
                <div>
                  {" "}
                  {/* Text container */}
                  <span className="font-medium text-gray-800 block text-sm">
                    Bus Stop
                  </span>
                  <p className="text-gray-500 text-xs">100m Away</p>
                </div>
              </div>

              {/* Restaurant */}
              <div className="flex items-center gap-3">
                {" "}
                {/* Item container */}
                <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full flex-shrink-0">
                  {" "}
                  {/* Icon container */}
                  {/* Replace with actual restaurant icon */}
                  <img src={fee} alt="Restaurant" className="w-5 h-5" />{" "}
                  {/* Using fee icon as placeholder */}
                </div>
                <div>
                  {" "}
                  {/* Text container */}
                  <span className="font-medium text-gray-800 block text-sm">
                    Restaurant
                  </span>
                  <p className="text-gray-500 text-xs">200m Away</p>
                </div>
              </div>

              {/* End */}
            </div>
          </div>
          <p className="font-bold text-gray-700 mb-2">Location</p>
          <div className="rounded-lg overflow-hidden shadow-md h-[170px]">
            <Map items={[singlePostData]} />
          </div>

          <div className="mt-6 flex gap-4">
            <button className="flex items-center gap-2 bg-mustard hover:bg-slate-200 hover:text-black text-white font-bold py-4 px-4 rounded-md shadow-sm transition-colors duration-200">
              <img src={chat} alt="" className="w-5 h-5" />
              Send a message
            </button>
            <button className="flex items-center gap-2 bg-gray-300 hover:bg-gray-400 hover:text-slate-50 text-gray-700 font-bold py-4 px-4 rounded-md shadow-sm transition-colors duration-200">
              <img src={save} alt="" className="w-5 h-5" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
