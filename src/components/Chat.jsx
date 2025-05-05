import React from "react";
import Message from "./Message";
import ChatWindow from "./ChatWindow";
import { useState } from "react";

const Chat = () => {
  const [chat, setChat] = useState(false);

  const handleOpenChat = () => {
    setChat((prev) => !prev);
  };

  return (
    <>
      <div className="h-full w-full flex flex-col items-center relative">
        <div className="flex flex-col gap-4 h-full w-full rounded-lg overflow-y-auto">
          {" "}
          {/* Added flex, flex-col, gap-4, padding, and overflow */}
          <Message
            imageSrc={
              "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg"
            }
            name={"John Doe"}
            message={"lorem ipsum se amet ipet japut....."}
            onClick={handleOpenChat}
          />
          <Message
            imageSrc={
              "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg"
            }
            name={"John Doe"}
            message={"lorem ipsum se amet ipet japut....."}
            onClick={handleOpenChat}
          />
          <Message
            imageSrc={
              "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg"
            }
            name={"John Doe"}
            message={"lorem ipsum se amet ipet japut....."}
            onClick={handleOpenChat}
          />
          <Message
            imageSrc={
              "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg"
            }
            name={"John Doe"}
            message={"lorem ipsum se amet ipet japut....."}
            onClick={handleOpenChat}
          />
        </div>
        {chat && <ChatWindow onClick={handleOpenChat} />}
      </div>
    </>
  );
};

export default Chat;
