import React from 'react';
import ResponsiveImage from './ResponsiveImage';

const LastPage = () => {
  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* <ResponsiveImage
            src="HOE/BGtext.png"
            alt="Responsive Image"
            aspectRatio={20 / 12}
          /> */}



          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="HOE/bgmobile.png"
              className="w-full h-full object-cover object-center"
            />
            <source
              media="(min-width: 641px) and (max-width: 1024px)"
              srcSet="HOE/bgtext1024.png"
              className="w-full h-full object-cover object-center"
            />
            <img
              src="HOE/BGtext.png"
              alt="Scenic View"
              className="w-full h-auto object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </picture>
        </div>

        {/* Content Section */}
        <div className="absolute top-32 lg:top-64 lg:top-96 left-0 right-0 z-10 flex items-start justify-center p-4 sm:p-6 lg:p-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg w-full max-w-[70%] sm:max-w-[45%] md:max-w-[45%] lg:max-w-[40%] xl:max-w-[25%] p-4 sm:p-6 lg:p-8 ml-28">
            {/* About Us Title */}
            <h3 className="text-base sm:text-xl md:text-3xl lg:text-4xl leading-normal font-bold text-left sm:text-left">
              <span className="text-[#E62E2D]">HOUSE OF ELAAN IS MORE THAN A GROUP OF COMPANIES</span>
            </h3>

            {/* About Us Description */}
            <p className="text-xs sm:text-normal text-black leading-normal text-left sm:text-justify">
              IT IS A REVOLUTION IN MODERN BUSINESS SOLUTIONS. WE INVITE YOU TO BE PART OF OUR JOURNEY TOWARDS
            </p>

            {/* Highlighted Future Statement */}
            <h2 className="text-base sm:text-xl md:text-3xl lg:text-4xl leading-normal font-bold text-left sm:text-left">
              <span className="text-[#E62E2D]">CREATING A BETTER FUTURE FOR ALL.</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastPage;
