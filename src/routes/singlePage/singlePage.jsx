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
import { useLoaderData } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { useEffect, useCallback, useState } from "react";

const SinglePage = () => {
  const post = useLoaderData();
  const [user, setUser] = useState({
    username: "Not Available",
    avatar: null,
    email: "Not Available",
  });
  console.log(post);

  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  const getUser = useCallback(async () => {
    await apiRequest.get("/user/get_user/" + post.user_id).then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  }, [post]);

  useEffect(() => {
    getUser();
  }, [getUser]);
  return (
    <div className="flex sm:flex-col md:flex-col xl:h-screen">
      <div className="flex-[3_3_0%] h-full w-">
        <div className="pr-12 sm:pr-0 md:pr-0">
          <Slider images={post.postDetail.images} />
          {/* Info */}
          <div className="mt-8">
            {/* Top */}
            <div className="flex justify-between items-start">
              {/* Post */}
              <div className="flex flex-col gap-[20px]">
                <h1 className="text-2xl font-semibold text-gray-800 sm:text-xl">
                  {post.title}
                </h1>
                {/* Address */}
                <div className="flex items-center mt-2 text-gray-600 sm:text-sm">
                  <img className="w-4 h-4 mr-2" src={pin} alt="" />
                  <span>{post.address}</span>
                </div>

                {/* Price */}
                <div className="mt-4 text-xl font-light p-[10px] text-black bg-mustard w-[150px] text-center sm:text-base sm:w-[100px]">
                  ₹ {post.price}
                </div>
              </div>

              {/* User */}
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm sm:flex-col sm:text-center">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <img
                    height={50}
                    width={50}
                    className=" h-full w-full object-cover"
                    src={user.avatar ? user.avatar : "/noavatar.jpg"}
                    alt=""
                  />
                </div>
                <span className="font-medium text-black sm:text-sm">
                  {user.username}
                </span>
              </div>
            </div>

            {/* Bottom */}
            {/* Bottom */}
            <div className="mt-8 pb-6 border-t border-gray-100 pt-6 max-w-full break-words">
              <h2 className="text-lg font-medium text-gray-800 mb-3">
                Description
              </h2>
              <div className="break-words">
                <p className="text-gray-600 leading-relaxed">
                  {removeTags(post.postDetail.desc)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[2_2_0%] md:py-4 sm:py-4 bg-sea-shell border-l border-gray-100 md:w-full md:max-h-[calc(100vh-100px)]">
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
                <p
                  className="text-gray-500 text-sm"
                  title={post.postDetail.utilities}
                >
                  {post.postDetail.utilities.length > 50
                    ? post.postDetail.utilities.slice(0, 48) + " ...."
                    : post.postDetail.utilities}
                </p>
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
                <p className="text-gray-500 text-sm">{post.postDetail.pet}</p>
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
                  {post.postDetail.income}
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
              <div className="flex items-center gap-3 sm:flex-col">
                {" "}
                {/* Item container */}
                <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full flex-shrink-0">
                  {" "}
                  {/* Icon container */}
                  <img src={size} alt="Size" className="w-5 h-5" />
                </div>
                <div className="text-center">
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
                    {post.postDetail.size} sqft {/* Extracted value */}
                  </p>
                </div>
              </div>
              {/* Bedrooms */}
              <div className="flex items-center gap-3 sm:flex-col">
                {" "}
                {/* Item container */}
                <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full flex-shrink-0">
                  {" "}
                  {/* Icon container */}
                  <img src={bedroom} alt="Bedrooms" className="w-5 h-5" />
                </div>
                <div className="text-center">
                  {" "}
                  {/* Text container */}
                  <span className="font-medium text-gray-800 block text-sm">
                    {" "}
                    {/* Label */}
                    Bedrooms
                  </span>
                  <p className="text-gray-500 text-xs">
                    {" "}
                    {/* Value */}
                    {post.bedroom} bed {/* Extracted value */}
                  </p>
                </div>
              </div>
              {/* Bathrooms */}
              <div className="flex items-center gap-3 sm:flex-col">
                {" "}
                {/* Item container */}
                <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full flex-shrink-0">
                  {" "}
                  {/* Icon container */}
                  <img src={bathroom} alt="Bathrooms" className="w-5 h-5" />
                </div>
                <div className="text-center">
                  {" "}
                  {/* Text container */}
                  <span className="font-medium text-gray-800 block text-sm">
                    {" "}
                    {/* Label */}
                    Bathroom
                  </span>
                  <p className="text-gray-500 text-xs">
                    {" "}
                    {/* Value */}
                    {post.bathroom} bathroom {/* Extracted value */}
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
              <div className="flex items-center gap-3 sm:flex-col">
                {" "}
                {/* Item container */}
                <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full flex-shrink-0">
                  {" "}
                  {/* Icon container */}
                  {/* Replace with actual school icon */}
                  <img src={utility} alt="School" className="w-5 h-5" />
                </div>
                <div className="text-center">
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
                    {post.postDetail.school > 1000
                      ? `${post.postDetail.school / 1000} km`
                      : `${post.postDetail.school} m`}{" "}
                    Away
                  </p>
                </div>
              </div>

              {/* Bus Stop */}
              <div className="flex items-center gap-3 sm:flex-col">
                {" "}
                {/* Item container */}
                <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full flex-shrink-0">
                  {" "}
                  {/* Icon container */}
                  {/* Replace with actual bus icon */}
                  <img src={pet} alt="Bus Stop" className="w-5 h-5" />{" "}
                  {/* Using pet icon as placeholder */}
                </div>
                <div className="text-center">
                  {" "}
                  {/* Text container */}
                  <span className="font-medium text-gray-800 block text-sm">
                    Bus Stop
                  </span>
                  <p className="text-gray-500 text-xs">
                    {post.postDetail.bus > 1000
                      ? `${post.postDetail.bus / 1000} km`
                      : `${post.postDetail.bus} m`}{" "}
                    Away
                  </p>
                </div>
              </div>

              {/* Restaurant */}
              <div className="flex items-center gap-3 sm:flex-col">
                {" "}
                {/* Item container */}
                <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full flex-shrink-0">
                  {" "}
                  {/* Icon container */}
                  {/* Replace with actual restaurant icon */}
                  <img src={fee} alt="Restaurant" className="w-5 h-5" />{" "}
                  {/* Using fee icon as placeholder */}
                </div>
                <div className="text-center">
                  {" "}
                  {/* Text container */}
                  <span className="font-medium text-gray-800 block text-sm">
                    Restaurant
                  </span>
                  <p className="text-gray-500 text-xs">
                    {post.postDetail.restaurant > 1000
                      ? `${post.postDetail.restaurant / 1000} km`
                      : `${post.postDetail.restaurant} m`}{" "}
                    Away
                  </p>
                </div>
              </div>

              {/* End */}
            </div>
          </div>
          <p className="font-bold text-gray-700 mb-2">Location</p>
          <div className="rounded-lg overflow-hidden shadow-md h-[170px]">
            <Map items={[post]} />
          </div>

          <div className="mt-6 flex gap-4 sm:text-xs">
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
