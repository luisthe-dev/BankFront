// Carousel.jsx
import React, { useRef, useEffect } from "react";

const Carousel = ({
  coinsData,
  selectedCoin,
  selectSingleCoin,
  makeMonetaryNumber,
}) => {
  const carouselRef = useRef(null); // Create a ref for the carousel container

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -200, // Change this value to control scroll amount
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 200, // Change this value to control scroll amount
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative bg-gray-700 w-full p-10">
      <button
        onClick={scrollLeft}
        className="absolute left-0 z-10 bg-gray-800 text-white p-2 rounded"
      >
        &#9664; {}
      </button>

      <div
        ref={carouselRef}
        className="flex flex-row items-center justify-start overflow-hidden gap-6"
      >
        {coinsData.map((coin, coinKey) => (
          <div
            key={coinKey}
            onClick={() => selectSingleCoin(coin.id)}
            className={`flex-none w-60 p-4 border rounded-lg shadow-lg transition-all duration-300 cursor-pointer ${
              coin.id === selectedCoin
                ? "bg-gray-100 text-gray-800"
                : "bg-black text-white"
            }`}
          >
            <h2 className="text-xl font-semibold">{coin.name}</h2>
            <p className="text-md font-extralight">
              {makeMonetaryNumber(coin.current_price)}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 z-10 bg-gray-800 text-white p-2 rounded"
      >
        &#9654; {}
      </button>
    </div>
  );
};

export default Carousel;
