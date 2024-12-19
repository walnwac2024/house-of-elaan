// import React from 'react'

// const ElaanConsultancy = () => {
//     return (
//         <div class="relative w-full h-screen overflow-hidden">
//         <div class="absolute inset-0 animate-zoom-in">
//           <picture>
//             <source 
//               media="(max-width: 640px)" 
//               srcset="hoe/Elaan-Consultancy.JPG"
//               class="w-full h-full object-cover object-center"
//             />
//             <source 
//               media="(max-width: 1024px)" 
//               srcset="hoe/Elaan-Consultancy.JPG"
//               class="w-full h-full object-cover object-center"
//             />
//             <img 
//               src="hoe/Elaan-Consultancy.JPG"  
//               alt="Scenic View" 
//               class="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
//             />
//           </picture>
//         </div>
//       </div>
//       )
// }

// export default ElaanConsultancy


import React from 'react';

const ElaanConsultancy = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          <source 
            media="(max-width: 640px)" 
            srcSet="hoe/Elaan-Consultancy.JPG" 
            className="w-full h-full object-cover object-center" 
          />
          <source 
            media="(max-width: 1024px)" 
            srcSet="hoe/Elaan-Consultancy.JPG" 
            className="w-full h-full object-cover object-center" 
          />
          <img 
            src="hoe/Elaan-Consultancy.JPG" 
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
              <img src="logos/elaanconsultancy.png" alt="Designing Icon" className="w-40 h-40 md:w-60 md:h-60 object-contain" />
            </div>
            <div className="block text-center">
            <h3 className="text-xl font-bold mb-4">OUR CONSULTANCY ARM PROVIDES</h3>
            <h1 className="text-2xl md:text-5xl font-bold mb-4 text-red-900">A RANGE OF SERViCES</h1>
              
            </div>
          </div>

          <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="service text-center p-6 rounded-lg">
              <img src="images/Consultancy.png" alt="Designing Icon" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
              <h3 className="text-xl md:text-xl font-bold mb-4">International Collaboration Consultancy</h3>
              <p className="text-sm md:text-base">
              Facilitating B2B and G2G collaborations across 70 countries.</p>
            </div>

            <div className="service text-center g-white/20 p-6 rounded-lg">
              <img src="images/Legal Consulation.png" alt="Photography Icon" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-4">Legal Consultancy:</h3>
              <p className="text-sm md:text-base">
              A dedicated team offers legal solutions to complex issues.</p>
            </div>

            <div className="service text-center p-6 rounded-lg">
              <img src="images/Financial Consultancy.png" alt="Digital Marketing Icon" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-4">Financial Consultancy:</h3>
              <p className="text-sm md:text-base">
              Round-the-clock financial advice to vendors and businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElaanConsultancy;

