import React from "react";
import SearchBar from "../../components/SearchBar";

const HomePage = () => {
  return (
    <div className="flex">
      {/* Text */}
      <div className="h-screen flex flex-col justify-center gap-12 flex-[3_3_0%]">
        <div className="flex flex-col gap-12 pr-24">
          <h1 className="text-5xl font-bold leading-tight">
            Find Real Estate & Get Your Dream Place
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            nobis unde ab eveniet eaque aliquid voluptatum vero sapiente, quia
            iure accusantium quos hic molestiae architecto quae minima ut
            repellat fugit.
          </p>
          <SearchBar />
        </div>
        {/* Boxes */}
        <div className="flex justify-between pr-24">
          {/* Box */}
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-1">16+</h1>
            <h2 className="text-xl text-gray-600 max-w-xl">
              Years of Experience
            </h2>
          </div>

          {/* Box */}
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-1">200+</h1>
            <h2 className="text-xl text-gray-600 max-w-xl">Awards Gained</h2>
          </div>

          {/* Box */}
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-1">2000+</h1>
            <h2 className="text-xl text-gray-600 max-w-xl">Property Ready</h2>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="flex-[2_2_0%] bg-sea-shell h-screen relative flex items-center">
        <img
          className="absolute top-0 right-0 max-w-none w-[115%]"
          src="/bg.png"
          alt="background"
        />
      </div>
    </div>
  );
};

export default HomePage;
