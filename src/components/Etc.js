

import React from 'react';

const Etc = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          <source 
            media="(max-width: 640px)" 
            srcSet="logos/ElaanETC.JPG" 
            className="w-full h-full object-cover object-center" 
          />
          <source 
            media="(max-width: 1024px)" 
            srcSet="logos/ElaanETC.JPG" 
            className="w-full h-full object-cover object-center" 
          />
          <img 
            src="logos/ElaanETC.JPG" 
            alt="Scenic View" 
            className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105" 
          />
        </picture>
      </div>

      {/* Overlay and Content */}
      <div className="relative z-10 black px-6 py-10 lg:px-20">
        <div id="kreator" className=" p-8 md:p-10 rounded-md">
          <div className="header mb-8 md:mb-10">
            <div className="logo mb-6 flex justify-center">
              <img src="images/ETC-c.png" alt="Designing Icon" className="w-20 h-20 md:w-32 md:h-32 object-contain" />
            </div>
            <div className="flex text-justify">
              <p className="description text-base md:text-lg leading-relaxed text-center">
              Etc is a multifaceted company specializing in the management of transport and food services, including event 
					hospitality solutions. With a comprehensive approach to logistics and hospitality, we deliver seamless 
					solutions designed to meet a wide array of needs. Our transport services ensure reliable and efficient mobility, 
					whether for individuals or large groups, while our food and catering offerings are tailored to delight the palate 
					and elevate any event. With a focus on quality, convenience, and customer satisfaction, Etc stands as a 
					one-stop solution for all your transport and culinary requirements.
				  </p>
            </div>
          </div>

          <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="service text-center p-6 rounded-lg">
              <img src="logos/Transport Management Services.png" alt="Designing Icon" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#F05C06]">Transport Management Services</h3>
              <p className="text-sm md:text-base">
              Our Transport Management Services are designed to provide reliable and efficient transportation solutions for individual and group travel needs.
						  </p>
            </div>

            <div className="service text-center g-white/20 p-6 rounded-lg">
              <img src="logos/Food Services.png" alt="Photography Icon" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#F05C06]">Food Services</h3>
              <p className="text-sm md:text-base">
              ETC's Food Services offer a range of culinary options to suit various tastes and dietary requirements, from daily meal plans for corporate offices to specialty cuisine for events.
						  </p>
            </div>

            <div className="service text-center p-6 rounded-lg">
              <img src="logos/Event Hospitality Solutions.png" alt="Digital Marketing Icon" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#F05C06]">Event Hospitality Solutions</h3>
              <p className="text-sm md:text-base">
              Beyond mere catering, our Event Hospitality Solutions offer a complete package that includes food, beverages, and waitstaff. We manage everything from setup to teardown, ensuring guests enjoy a seamless and luxurious experience.
						  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Etc;

