import React from "react";

const Message = ({ imageSrc, name, message, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4 cursor-pointer"
    >
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm truncate">{message}</p>
      </div>
    </div>
  );
};

export default Message;
