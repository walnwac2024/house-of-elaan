import React from 'react';

const Aftersale = () => {
  return (
    <>
      <div className="relative w-full bg-[#FF000E] h-96 sm:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute z-0">
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="HOE/Aftersale-mobile.jpg"
              className="w-full h-auto object-cover object-center"
            />
            <source
              media="(min-width: 641px) and (max-width: 1024px)"
              srcSet="HOE/After Sale Services.jpg"
              className="w-full h-auto object-cover object-center"
            />
            <img
              src="HOE/After Sale Services.jpg"
              alt="Scenic View"
              className="w-full h-auto object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </picture>
        </div>

        <div className="relative z-10 w-full">
          <div className="pl-[42%] xs:pl-[45%] mt-[-27%] xs:mt-[-20%] sm:mt-[-15%] md:mt-[-17%] lg:mt-[-17%] xl:mt-[-15%] w-[90%] xs:w-[85%] sm:w-[90%] md:w-[80%] lg:w-[80%] xl:w-[75%] rounded-lg text-center">
            {/* About Us Title */}
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-left mb-0 xs:mb-1 sm:mb-4 leading-none">
              <span className="text-white">AFTER SALES</span>
              <br />
              <span className="text-white">SERVICES</span>
            </h2>

            {/* About Us Description */}
            <p className="text-[12px] md:text-[14px] lg:text-[16px] text-white leading-normal text-justify xs:mt-2">
              We offer comprehensive business management services aimed at boosting efficiency, growth, and performance. Our approach includes regular feedback and accountability mechanisms to cater to our clients' needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aftersale;
