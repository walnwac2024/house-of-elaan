


import React from 'react';

const CAndJ = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          <source 
            media="(max-width: 640px)" 
            srcSet="HOE/C&L.jpg" 
            className="w-full h-full object-cover object-center" 
          />
          <source 
            media="(max-width: 1024px)" 
            srcSet="HOE/C&L.jpg" 
            className="w-full h-full object-cover object-center" 
          />
          <img 
            src="HOE/C&L.jpg" 
            alt="Scenic View" 
            className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105" 
          />
        </picture>
      </div>

      {/* Overlay and Content */}
      <div className="relative z-10 text-white px-6 py-10 lg:px-20">
        <div id="kreator" className=" p-8 md:p-10 rounded-md">
          <div className="header mb-8 md:mb-10">
            <div className="logo mb-6 flex justify-center">
              <img src="logos/c&l (1).png" alt="Designing Icon" className="w-32 h-32 md:w-48 md:h-48 object-contain" />
            </div>
            <div className="flex justify-center text-justify">
              <p className="description text-normal leading-normal font-gotham xl:w-[70%]">
              CNL stands for Comfort And Luxury, and that's precisely what we offer.We specialize in owning and managing a portfolio of luxury guest houses that set 
the standard for exceptional hospitality. Each of our meticulously curated properties boasts an array of first-rate amenities and bespoke services, offering 
guests an experience that seamlessly blends opulence with comfort. Catering to discerning individual travelers in search of sumptuous escapes, as well as 
corporate clients seeking upscale retreats, CNL is steadfast in our commitment to deliver unparalleled excellence across all facets of our service.
				  </p>
            </div>
          </div>

          <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="service text-center py-6 rounded-lg">
              <img src="logos/Layer-3 (3).jpg" alt="Designing Icon" className="w-40 h-24 md:w-80 md:h-60 mx-auto mb-4" />
              <h3 className="text-base md:text-xl font-bold mb-4 font-gotham">Transport Management Services</h3>
              <p className="text-normal leading-normal font-gotham">
              Our Transport Management Services are designed to provide reliable and efficient transportation solutions for individual and group travel needs.
              </p>
            </div>

            <div className="service text-center g-white/20 p-6 rounded-lg">
              <img src="logos/Layer-4.png" alt="Photography Icon" className="w-40 h-24 md:w-80 md:h-60 mx-auto mb-4"/>
              <h3 className="text-base md:text-xl font-bold mb-4 font-gotham">Food Services</h3>
              <p className="text-normal leading-normal font-gotham">
              ETC's Food Services offer a range of culinary options to suit various tastes and dietary requirements, from daily meal plans for corporate offices to specialty cuisine for events.
              </p> 
            </div>

            <div className="service text-center p-6 rounded-lg">
            <img src="logos/Layer-5.png" alt="Digital Marketing Icon" className="w-40 h-24 md:w-80 md:h-60 mx-auto mb-4" />

              <h3 className="text-base md:text-xl font-bold mb-4 font-gotham">Event Hospitality Solutions</h3>
              <p className="text-normal leading-normal font-gotham">
              Beyond mere catering, our Event Hospitality Solutions offer a complete package that includes food, beverages, and waitstaff. We manage everything from setup to teardown, ensuring guests enjoy a seamless and luxurious experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CAndJ;
