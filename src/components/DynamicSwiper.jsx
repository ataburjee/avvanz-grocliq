import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { swiperData } from "../data/swiperData"; // Replace with the actual path to your data
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import arrow icons

const DynamicSwiper = () => {
  const swiperRefs = useRef([]); // Create an array of refs

  return (
    <div className="container m-auto bg-gray-50 py-10">
      {swiperData.map((section, index) => (
        <div
          key={index}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative"
        >
          {/* Header */}
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
            {section.header}
          </h2>
          <div className="h-1 bg-yellow-500 w-24 mx-auto mb-10"></div>

          {/* Carousel */}
          <Swiper
            onSwiper={(swiper) => (swiperRefs.current[index] = swiper)} // Assign the swiper ref dynamically
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="swiper-container"
          >
            {section.carouselItems.map((item, idx) => (
              <SwiperSlide
                key={idx}
                className="p-2"
                onMouseEnter={() => swiperRefs.current[index]?.autoplay.stop()}
                onMouseLeave={() => swiperRefs.current[index]?.autoplay.start()}
              >
                <div style={{backgroundColor: '#12475f'}} className="text-white rounded-xl shadow-lg flex flex-col items-center justify-center h-80 w-full mx-auto hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  {/* Icon */}
                  <div className="text-5xl mb-4">{item.icon}</div>
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    {item.title}
                  </h3>
                  {/* Description */}
                  <p className="text-base text-center">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            onClick={() => swiperRefs.current[index]?.slidePrev()} // Navigate to the previous slide
            className="swiper-button-prev absolute left-0 z-10 w-10 h-10 flex items-center justify-center hover:scale-125 transition-transform duration-200 -translate-y-[-50px]"
            aria-label="Previous Slide"
          >
            <FiChevronLeft size={24} /> {/* Left Arrow Icon */}
          </button>
          <button
            onClick={() => swiperRefs.current[index]?.slideNext()} // Navigate to the next slide
            className="swiper-button-next absolute right-0 z-10 w-10 h-10 flex items-center justify-center hover:scale-125 transition-transform duration-200 -translate-y-[-50px]"
            aria-label="Next Slide"
          >
            <FiChevronRight size={24} /> {/* Right Arrow Icon */}
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination absolute bottom-[-80px] left-0 right-0 z-10 flex justify-center space-x-2">
            {/* This is where you can apply custom styling */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DynamicSwiper;
