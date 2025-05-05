import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ChatWindow = ({ onClick }) => {
  return (
    <div className="absolute bg-slate-500 bottom-2 rounded-lg shadow-md p-4 flex flex-col h-[500px] sm:h-screen sm:mr-0 sm:bottom-[-8px] sm:rounded-none sm:w-screen md:h-[500px] w-full max-w-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-spanish-gray pb-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg" // Placeholder for user image
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="font-semibold text-white">John Doe</h2>
        </div>
        <button className="text-white hover:text-mustard focus:outline-none">
          <FontAwesomeIcon icon={faTimes} onClick={onClick} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-grow overflow-y-auto scrollbar-none space-y-2 pr-2">
        {/* Received Message */}
        <div className="flex justify-start">
          <div className="bg-white rounded-lg p-2 text-sm text-gray-800 max-w-[80%]">
            Lorem ipsum dolor sit amet.
            <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
          </div>
        </div>

        {/* Sent Message */}
        <div className="flex justify-end">
          <div className="bg-mustard rounded-lg p-2 text-sm text-black max-w-[80%]">
            Lorem ipsum dolor sit amet.
            <p className="text-xs text-gray-500 mt-1 text-right">1 hour ago</p>
          </div>
        </div>

        {/* Received Message */}
        <div className="flex justify-start">
          <div className="bg-white rounded-lg p-2 text-sm text-gray-800 max-w-[80%]">
            Lorem ipsum dolor sit amet.
            <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
          </div>
        </div>

        {/* Sent Message */}
        <div className="flex justify-end">
          <div className="bg-mustard rounded-lg p-2 text-sm text-black max-w-[80%]">
            Lorem ipsum dolor sit amet.
            <p className="text-xs text-gray-500 mt-1 text-right">1 hour ago</p>
          </div>
        </div>

        {/* Received Message */}
        <div className="flex justify-start">
          <div className="bg-white rounded-lg p-2 text-sm text-gray-800 max-w-[80%]">
            Lorem ipsum dolor sit amet.
            <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
          </div>
        </div>

        {/* Sent Message */}
        <div className="flex justify-end">
          <div className="bg-mustard rounded-lg p-2 text-sm text-black max-w-[80%]">
            Lorem ipsum dolor sit amet.
            <p className="text-xs text-gray-500 mt-1 text-right">1 hour ago</p>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="mt-4 flex items-center">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-grow bg-white rounded-lg py-2 px-3 text-sm text-gray-700 focus:outline-none"
        />
        <button className="bg-mustard text-black font-semibold py-2 px-4 rounded-lg ml-2 focus:outline-none">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
