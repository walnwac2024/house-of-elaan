import React from 'react';

const Kreator = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          <source 
            media="(max-width: 640px)" 
            srcSet="HOE/Kreators.jpg" 
            className="w-full h-full object-cover object-center" 
          />
          <source 
            media="(max-width: 1024px)" 
            srcSet="HOE/Kreators.jpg" 
            className="w-full h-full object-cover object-center" 
          />
          <img 
            src="HOE/Kreators.jpg" 
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
              <img src="logos/kreat.png" alt="Designing Icon" className="w-32 h-32 md:w-48 md:h-48 object-contain" />
            </div>
            <div className="flex justify-center text-justify">
              <p className="description text-normal leading-normal font-gotham xl:w-[70%]">
                Kreators is a full-service advertising agency specializing in a broad spectrum of creative and digital solutions. With expertise in design services, digital marketing, SEO, as well as photography and videography, we offer a one-stop solution for brands seeking to make a significant impact in their respective markets. Our multidisciplinary approach allows us to deliver cohesive and innovative strategies that drive engagement and business growth. From crafting visually stunning designs to optimizing online presence through SEO, Kreators is committed to elevating our brand’s identity and reach, both online and offline.
              </p>
            </div>
          </div>

          <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="service text-center p-6 rounded-lg">
              <img src="images/Designing.png" alt="Designing Icon" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
              <h3 className="text-base md:text-xl font-bold mb-4 font-gotham">DESIGNING</h3>
              <p className="text-normal leading-normal font-gotham">
                We specialize in offering top-notch design services tailored to the unique needs of each client. With a team of experienced designers, we bring visions to life, whether it’s for branding, web design, or social media posts. Our commitment to creativity and innovation ensures that every project stands out.
              </p>
            </div>

            <div className="service text-center g-white/20 p-6 rounded-lg">
              <img src="images/Phootgraphy & Video.png" alt="Photography Icon" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
              <h3 className="text-base md:text-xl font-bold mb-4 font-gotham">PHOTOGRAPHY & VIDEO</h3>
              <p className="text-normal leading-normal font-gotham">
                We offer premier photography and videography services, including capturing events, weddings, corporate shoots, and advertisements, among others. With a dedicated team of professionals, we document each occasion with unparalleled artistry and attention to detail.
              </p>
            </div>

            <div className="service text-center p-6 rounded-lg">
              <img src="images/Digital Marketing.png" alt="Digital Marketing Icon" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
              <h3 className="text-base md:text-xl font-bold mb-4 font-gotham">DIGITAL MARKETING</h3>
              <p className="text-normal leading-normal font-gotham">
                We offer top-notch digital marketing services designed to skyrocket your brand in the online landscape. With a team of experienced strategists, we craft campaigns that drive traffic, engagement, and conversions. Our innovative approaches ensure clients stay ahead of market trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kreator;
