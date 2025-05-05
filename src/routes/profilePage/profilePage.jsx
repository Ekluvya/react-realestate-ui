import React from "react";
import Card from "../../components/Card";
import Message from "../../components/Message";
import List from "../../components/List";
import ChatWindow from "../../components/ChatWindow";
import Chat from "../../components/Chat";

const ProfilePage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Details Section */}
      <div className="lg:flex-[3_3_0%] w-full lg:h-[calc(100vh-100px)]">
        <div className="py-4 lg:pr-6 mb-6 h-full overflow-y-auto lg:scrollbar-none lg:overflow-scroll pb-5">
          {/* User Info Header */}
          <div className="flex items-center justify-between mb-6 mt-4">
            <h1 className="text-3xl sm:text-2xl font-light text-gray-800">
              User Information
            </h1>
            <button className="relative px-4 py-2 bg-mustard text-sm text-black hover:bg-gray-200 hover:text-slate-800 font-medium transition flex items-center gap-2">
              Update Profile
            </button>
          </div>

          {/* User Info Content */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex-shrink-0">
              <img
                src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg"
                alt="User Avatar"
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
              />
            </div>
            <div>
              <p className="text-lg font-medium text-gray-700">John Doe</p>
              <p className="text-gray-500">johndoe@example.com</p>
            </div>
          </div>

          {/* My List Header */}
          <div className="flex items-center justify-between mb-6 mt-8">
            <h1 className="text-3xl sm:text-2xl font-light text-gray-800">
              My List
            </h1>
            <button className="relative px-4 py-2 bg-mustard text-sm text-black hover:bg-gray-200 hover:text-slate-800 font-medium transition flex items-center gap-2">
              Create New Post
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
      <div className="lg:flex-[2_2_0%] w-full bg-sea-shell lg:h-[calc(100vh-100px)] flex items-center justify-center">
        <div className="h-full flex flex-col justify-between max-w-md w-full p-4">
          <h1 className="text-3xl font-light text-gray-800 mb-4">Messages</h1>
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
