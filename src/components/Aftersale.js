// import React from 'react';

// const Aftersale = () => {
//   return (
//     <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
//       <div className="absolute inset-0 animate-zoom-in">
//         <picture>
//           <source 
//             media="(max-width: 640px)" 
//             srcSet="logos/After Sale Services.JPG" 
//             className="w-full h-full object-cover object-center" 
//           />
//           <source 
//             media="(max-width: 1024px)" 
//             srcSet="logos/After Sale Services.JPG" 
//             className="w-full h-full object-cover object-center" 
//           />
//           <img 
//             src="logos/After Sale Services.JPG"  
//             alt="Scenic View" 
//             className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105" 
//           />
//         </picture>
//       </div>
//       <div className="relative z-10 px-8 sm:px-12 md:px-16 lg:px-20 max-w-5xl mx-auto">
//         <div className="rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xs:mt-[-150px] xs:ml-[120px] sm:mt-[-100px] sm:ml-[150px] md:mt-[-50px] md:ml-[100px] lg:ml-[100px] xl:ml-[100px]">
          
//           {/* About Us Title */}
//           <h3 className="text-sm xxs:text-base sm:text-lg md:text-2xl lg:text-3xl font-bold mb-0 sm:mb-2">
//             <span className="text-white">AFTER SALES SERVICES</span> 
//           </h3>

//           {/* About Us Description */}
//           <p className="text-xs xxs:text-sm sm:text-base md:text-lg lg:text-xl text-white leading-tight tracking-tight sm:leading-relaxed sm:tracking-normal pl-1 sm:pl-2 lg:pl-3">
//             House of Elaan is a diversified conglomerate that specializes in multiple 
//             sectors including construction, sales and marketing, IT, and architecture. 
//             We are committed to providing financial and legal services that meet 
//             international standards. Our unique ability to integrate local expertise 
//             with global best practices makes us a one-stop solution for our clients.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Aftersale;




// export default LastPage
import React from 'react'
import Layout from './Layout/Layout'

const Aftersale = () => {
  return (
    <>
     
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <picture>
            <source 
              media="(max-width: 640px)" 
              srcSet="logos/After Sale Services.JPG" 
              className="w-full h-full object-cover object-center"
            />
            <source 
              media="(min-width: 641px) and (max-width: 1024px)" 
              srcSet="logos/After Sale Services.JPG" 
              className="w-full h-full object-cover object-center"
            />
            <img
              src="logos/After Sale Services.JPG"
              alt="Scenic View"
              className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </picture>
        </div>

        <div className="relative z-10 w-full">
          <div className="ml-[40%] xs:ml-[40%] sm:ml-[45%] xl:ml-[45%] mt-[-30%] xs:mt-[-28%] sm:mt-[-19%] md:mt-[-15%] w-[55%] xs:w-[55%] sm:w-[50%] md:w-[43%] lg:w-[42%] xl:w-[40%] bg-[#E62E2D]  rounded-lg">
            {/* About Us Title */}
            <h2 className="xxs:text-base sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-left mb-0 pt-8 sm:pt-4 md:pt-0 sm:mb-0">
              <span className="text-white">AFTER SALES <div>SERVICES</div> </span> 
            </h2>

            {/* About Us Description */}
            <p className="text-sm sm:text-sm md:text-base lg:text-lg text-white leading-none sm:leading-relaxed text-justify">
            We offer comprehensive business management services 
aimed at boosting effciency, growth, and performance. Our 
approach includes regular feedback and accountability 
mechanisms to cater to our clients' needs.
</p>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Aftersale

