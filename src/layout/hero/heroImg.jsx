import React, { useState } from "react";
import Img1 from "../../assets/img/img1.jpg";
import Img2 from "../../assets/img/img2.jpg";
import ChevronRight from "../../assets/icons/ic-chevronRight.svg";

export default function HeroImg() {
  const images = [Img2, Img1];
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [slideDirection, setSlideDirection] = useState("left");

  const handleNext = () => {
    setSlideDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSlideDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="w-full lg:w-[55%] flex flex-col gap-[42px] items-start">
      <div className="slider w-full relative overflow-hidden">
        <button className="absolute right-[35px] top-1/2 transform -translate-y-1/2 z-10" onClick={handleNext} disabled={slideDirection === "right"}>
          <img src={ChevronRight} alt="Next" />
        </button>
        <button className="absolute left-[35px] top-1/2 transform -translate-y-1/2 z-10" onClick={handlePrev} disabled={slideDirection === "left"}>
          <img src={ChevronRight} className="rotate-180" alt="Previous" />
        </button>
        {/* Gambar dengan efek geser */}
        <div className={`w-full h-full transition-transform duration-500 ${slideDirection === "right" ? "translate-x-0" : slideDirection === "left" ? "" : "translate-x-[-100%]"}`}>
          <img src={images[currentIndex]} className="w-full" alt="Main Image" />
        </div>
      </div>

      {/* Thumbnail */}
      <div className="flex flex-row items-center gap-[20px] justify-start mt-4">
        {images.map((image, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)} className={`w-[100px] h-[75px] overflow-hidden ${currentIndex === index ? "opacity-50" : ""}`}>
            <img src={image} className="w-full h-full object-cover" alt={`Thumbnail ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}


