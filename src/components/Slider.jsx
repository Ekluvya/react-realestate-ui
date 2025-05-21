import { useState } from "react";
import arrow from "../../public/arrow.png";
function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="w-full h-[350px] flex gap-5 sm:h-[280px] sm:flex-col">
      {imageIndex !== null && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black z-[2000] flex gap-[50px] justify-between items-center">
          <div
            className="flex-1 flex items-center justify-center cursor-pointer"
            onClick={() => changeSlide("left")}
          >
            <img
              src={arrow}
              alt="left arrow"
              className="w-[50px] object-cover sm:w-[15px]"
            />
          </div>
          <div className="flex-[10_10_0%] py-9">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div
            className="flex-1 flex items-center justify-center cursor-pointer"
            onClick={() => changeSlide("right")}
          >
            <img
              src={arrow}
              className="rotate-180 w-[50px] object-cover sm:w-[15px]"
              alt="I am not available"
            />
          </div>
          <div
            className="absolute top-0 right-0 text-white text-3xl font-bold p-12 cursor-pointer"
            onClick={() => setImageIndex(null)}
          >
            X
          </div>
        </div>
      )}
      <div className="flex-grow sm:flex-2/3 rounded-xl overflow-hidden cursor-pointer">
        <img
          src={images[0]}
          alt=""
          onClick={() => setImageIndex(0)}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between gap-5 sm:flex-row sm:overflow-y-hidden sm:overflow-x-scroll sm:min-h-fit">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
            className="w-full h-[100px] sm:h-[80px] sm:w-24 sm:gap-3 object-cover rounded-xl cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
