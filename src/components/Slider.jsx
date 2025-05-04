import arrow from "../../public/arrow.png";
import { useState } from "react";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    // Slider
    <div className="w-full h-[350px] flex gap-[20px] justify-between items-center">
      {imageIndex !== null && (
        <div className="flex absolute w-screen h-screen top-0 left-0 bg-black">
          {/* Arrow */}
          <div
            className="flex-1 cursor-pointer flex items-center justify-center"
            onClick={() => changeSlide("left")}
          >
            <img className="w-[50px] object-cover" src={arrow} alt="" />
          </div>

          {/* Image Container */}
          <div className="flex-[10_10_0%] py-9">
            <img
              className="w-full h-full object-cover rounded-md"
              src={images[imageIndex]}
              alt=""
            />
          </div>

          {/* Arrow */}
          <div
            className="flex-1 cursor-pointer flex items-center justify-center"
            onClick={() => changeSlide("right")}
          >
            <img
              className="w-[50px] object-cover transform rotate-180"
              src={arrow}
              alt=""
            />
          </div>

          {/* Close */}
          <div
            className="absolute top-0 cursor-pointer text-white right-0 font-extrabold text-4xl p-[20px]"
            onClick={() => setImageIndex(null)}
          >
            X
          </div>
        </div>
      )}

      {/* //Big Image */}
      <div className="flex-[3_3_0%]">
        <img
          className="w-full h-full object-cover rounded-xl cursor-pointer"
          src={images[0]}
          alt=""
          onClick={() => setImageIndex(0)}
        />
      </div>
      {/* //Small Images */}
      <div className="flex-1 flex flex-col justify-between gap-[20px]">
        {images.slice(1).map((image, index) => {
          return (
            <img
              className="w-full h-[100px] object-cover rounded-xl cursor-pointer"
              src={image}
              alt=""
              key={index}
              onClick={() => setImageIndex(index + 1)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
