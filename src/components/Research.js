// import React from 'react'

// const Research = () => {
//     return (
//         <div class="relative w-full h-screen overflow-hidden">
//         <div class="absolute inset-0 animate-zoom-in">
//           <picture>
//             <source 
//               media="(max-width: 640px)" 
//               srcset="HOE/Elaan Reserch Center.JPG"
//               class="w-full h-full object-cover object-center"
//             />
//             <source 
//               media="(max-width: 1024px)" 
//               srcset="HOE/Elaan Reserch Center.JPG"
//               class="w-full h-full object-cover object-center"
//             />
//             <img 
//               src="HOE/Elaan Reserch Center.JPG"  
//               alt="Scenic View" 
//               class="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
//             />
//           </picture>
//         </div>
//       </div>
//       )
// }

// export default Research




import React from 'react';

const Research = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          <source 
            media="(max-width: 640px)" 
            srcSet="HOE/Elaan Reserch Center.jpg" 
            className="w-full h-full object-cover object-center" 
          />
          <source 
            media="(max-width: 1024px)" 
            srcSet="HOE/Elaan Reserch Center.jpg" 
            className="w-full h-full object-cover object-center" 
          />
          <img 
            src="HOE/Elaan Reserch Center.jpg" 
            alt="Scenic View" 
            className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105" 
          />
        </picture>
      </div>

      {/* Overlay and Content */}
      <div className="relative z-10 text-black px-6 py-10 lg:px-20">
        <div id="kreator" className=" p-8 md:p-10 rounded-md">
          <div className="header mb-8 md:mb-10">
            <div className="logo mb-6 flex justify-center">
              <img src="images/Elaan Reserch Centre.png" alt="Designing Icon" className="w-32 h-32 md:w-60 md:h-60 object-contain" />
            </div>
            <div className="flex justify-center text-justify">
              <p className="description text-normal leading-normal font-gotham xl:w-[70%]">
              Elaan Research Centre, based in Islamabad, Pakistan, serves as a leading think tank with a triad of focal areas: International Relations, Social Issues, and Cross-National Business Connectivity. Our mission is to provide insightful analysis and actionable solutions that have far-reaching implications both domestically and internationally. Leveraging a network of experts and scholars, we conduct comprehensive studies on geopolitical dynamics, societal challenges, and emerging business opportunities across borders. Elaan Research Centre aims to be a catalyst for informed decision-making and constructive change in Pakistan and beyond.
                </p>
            </div>
          </div>

          <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-1">
            <div className="service text-center p-6 rounded-lg">
              <img src="images/International Relations.png" alt="Designing Icon" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
              <h3 className="text-base md:text-xl font-bold mb-4 font-gotham">INTERNATIONAL RELATIONS</h3>
              <p className="text-normal leading-normal font-gotham">
              Elaan Research Centre has achieved a remarkable milestone by effectively gaining recognition for its services on international platforms.
              </p>
            </div>

            <div className="service text-center g-white/20 p-6 rounded-lg">
              <img src="images/Social Issues.png" alt="Photography Icon" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
              <h3 className="text-base md:text-xl font-bold mb-4 font-gotham">SOCIAL ISSUES</h3>
              <p className="text-normal leading-normal font-gotham">
              Elaan Research Centre aims to bolster societal roles, foster institution contributions, and strengthen national infrastructure.
              </p>
            </div>

            <div className="service text-center p-6 rounded-lg">
              <img src="images/Connecting Businesses.png" alt="Digital Marketing Icon" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
              <h3 className="text-base md:text-xl font-bold mb-4 font-gotham">CONNECTING BUSINESSES</h3>
              <p className="text-normal leading-normal font-gotham">
              To ensure that the Real Estate Industry continues to thrive and grow as a successful practice in the nation, it's crucial to establish bridgeable strategies that foster strong connections with its related businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;

