
import React from 'react';

const Dynamic = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          <source 
            media="(max-width: 640px)" 
            srcSet="HOE/Dynamics.jpg" 
            className="w-full h-full object-cover object-center" 
          />
          <source 
            media="(max-width: 1024px)" 
            srcSet="HOE/Dynamics.jpg" 
            className="w-full h-full object-cover object-center" 
          />
          <img 
            src="HOE/Dynamics.jpg" 
            alt="Scenic View" 
            className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105" 
          />
        </picture>
      </div>

      {/* Overlay and Content */}
      <div className="relative z-10 text-white px-6 py-10 lg:px-20">
        <div id="kreator" className=" p-8 md:p-10 rounded-md">
          <div className="header mb-8 md:mb-10">
            <div className="logo mb-6 flex justify-center  ">
              <img src="logos/Dyn.png" alt="Designing Icon" className="w-40 h-40 md:w-60 md:h-60 object-contain" />
            </div>
            <div className="flex justify-center text-justify">
              <p className="description text-normal leading-normal font-gotham xl:w-[70%]">
              Elaan Dynamics is a specialized software house with a core focus on web development and SaaS solutions. Leveraging 
cutting-edge technologies like HTML, CSS, jQuery, PHP, and MySQLi, we deliver tailor-made services that meet the unique needs 
of each client. Our offerings range from custom web development and SaaS product creation to comprehensive web 
maintenance, optimization, and cloud migration services. Committed to quality and innovation, Elaan Dynamics aims to provide 
scalable, secure, and effcient solutions that drive business success. </p>
            </div>
          </div>

          <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-1">
            <div className="service text-center p-6 rounded-lg">
              <img src="logos/Custom Web Development.png" alt="Designing Icon" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
              <h3 className="text-base md:text-xl font-bold mb-4 font-gotham">CUSTOM WEB DEVELOPMENT</h3>
              <p className="text-normal leading-normal font-gotham">
              Our Custom Web Development 
							service provides businesses with 
							tailor-made websites that are both visually 
							appealing and functionally robust. We 
							focus on creating responsive, user-friendly 
							interfaces while ensuring optimum 
							performance and security.</p>
            </div>

            <div className="service text-center g-white/20 p-6 rounded-lg">
              <img src="logos/Saas Product Development.png" alt="Photography Icon" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
              <h3 className="text-base md:text-xl font-bold mb-4 font-gotham">SAAS PRODUCT DEVELOPMENT</h3>
              <p className="text-normal leading-normal font-gotham">
              We specialize in the full-cycle 
							development of SaaS products. From initial 
							ideation to final deployment, we provide 
							end-to-end solutions that are scalable, secure, 
							and effcient. Our SaaS development services 
							are designed to provide multi-tenant solutions 
							that can serve a wide range of customers.
              </p>
            </div>

            <div className="service text-center py-6 rounded-lg">
              <img src="logos/Web Maintenance.png" alt="Digital Marketing Icon" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
              <h3 className="text-base md:text-xl font-bold mb-4 font-gotham">WEB MAINTENANCE, OPTIMIZATION
							& CLOUD MIGRATION</h3>
              <p className="text-normal leading-normal font-gotham">
              This service combines the essentials of regular 
							web maintenance and cloud migration. We help 
							businesses keep their websites up-to-date while 
							also assisting them in transitioning to 
							cloud-based solutions for greater scalability and 
							performance.
						  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dynamic;

