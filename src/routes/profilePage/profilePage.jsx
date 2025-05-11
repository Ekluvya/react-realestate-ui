import React, { useContext } from "react";
import Card from "../../components/Card";
import Message from "../../components/Message";
import List from "../../components/List";
import ChatWindow from "../../components/ChatWindow";
import Chat from "../../components/Chat";
import apiRequest from "../../lib/apiRequest";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import noAvatar from "../../../public/noavatar.jpg";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);

  const handleLogout = () => {
    apiRequest.post("/auth/logout").then(function (response) {
      if (response.status == 200) {
        updateUser(null);
        navigate("/");
      }
    });
  };

  return (
    <div className="flex flex-col xl:gap[20px] xl:flex-row lg:flex-row h-full">
      {/* Details Section */}
      <div className=" xl:flex-[3_3_0%] lg:flex-[3_3_0%] w-full xl:h-[calc(100vh-100px)] lg:h-[calc(100vh-100px)]">
        <div className="py-4 xl:pr-6 lg:pr-6 mb-6 h-full overflow-y-auto xl:scrollbar-none lg:scrollbar-none lg:overflow-scroll pb-5">
          {/* User Info Header */}
          <div className="flex items-center justify-between mb-6 mt-4">
            <h1 className="text-3xl sm:text-2xl font-light text-gray-800">
              User Information
            </h1>
            <a href="#/update">
              <button className="relative px-4 py-2 bg-mustard text-sm text-black hover:bg-gray-200 hover:text-slate-800 font-medium transition flex items-center gap-2">
                Update Profile
              </button>
            </a>
          </div>

          {/* User Info Content */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex-shrink-0">
              <img
                src={currentUser.avatar || noAvatar}
                alt="User Avatar"
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
              />
            </div>
            <div>
              <p className="text-lg font-medium text-gray-700">
                {currentUser.username}
              </p>
              <p className="text-gray-500">{currentUser.email}</p>
            </div>
          </div>
          <div className="my-4">
            <button
              className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md
             text-gray-900 bg-[#fece51] hover:bg-[#fdd868] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors 
             duration-300"
              onClick={() => handleLogout()}
            >
              Log Out
            </button>
          </div>
          {/* My List Header */}
          <div className="flex items-center justify-between mb-6 mt-8">
            <h1 className="text-3xl sm:text-2xl font-light text-gray-800">
              My List
            </h1>
            <button className="relative px-4 py-2 bg-mustard text-sm text-black hover:bg-gray-200 hover:text-slate-800 font-medium transition flex items-center gap-2">
              <Link to={"/createPost"}>Create New Post</Link>
            </button>
          </div>

          <List />

          {/* Saved List Header */}
          <div className="flex items-center justify-between mb-6 mt-8">
            <h1 className="text-3xl sm:text-2xl font-light text-gray-800">
              Saved List
            </h1>
          </div>

          <List />
        </div>
      </div>

      {/* Chat Section */}
      <div className="xl:flex-[2_2_0%] lg:flex-[2_2_0%] w-full bg-sea-shell lg:h-[calc(100vh-100px)] flex items-center justify-center">
        <div className="h-full flex flex-col justify-between max-w-md w-full p-4">
          <h1 className="text-3xl font-light text-gray-800 mb-4">Messages</h1>
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
