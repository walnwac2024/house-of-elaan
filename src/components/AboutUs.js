import React from 'react';
import Layout from './Layout/Layout';
import ResponsiveImage from './ResponsiveImage';

const AboutUs = () => {
  return (
    <>
      <div className="relative w-full min-h-48 sm:h-80 md:h-96 lg:min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Responsive background image */}
        <div className="absolute inset-0 z-0">
          <ResponsiveImage
            src="HOE/BGtext.png"
            alt="Responsive Image"
            aspectRatio={16 / 9} // Adjusted aspect ratio for better responsiveness
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className=" xs:ml-[20%] xs:mt-[-2%] sm:mt-0 ml-[25%] sm:ml-[25%] md:ml-[25%] lg:ml-[25%] w-[70%] sm:w-[50%] md:w-[60%] lg:w-[50%] xl:w-[43%] bg-white/80 backdrop-blur-sm rounded-lg pt-1 xs:pt-0 sm:p-6 lg:p-8 xl:p-8">
            {/* About Us Title */}
            <h1 className=" text-base xs:text-lg sm:text-lg md:text-2xl lg:text-3xl font-bold text-left mb-0  sm:mb-1 font-gotham">
              <span className="text-[#FF000E]">About</span> <span className="text-black">us</span>
            </h1>

            {/* About Us Description */}
            <p className="text-[10px] md:text-[15px] font-normal text-black leading-tight text-justify">
              House of Elaan is a diversified conglomerate that specializes in multiple 
              sectors including construction, sales and marketing, IT, and architecture. 
              We are committed to providing financial and legal services that meet 
              international standards. Our unique ability to integrate local expertise with 
              global best practices makes us a one-stop solution for our clients.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
















// import React from 'react'
// import Layout from './Layout/Layout'
// import ResponsiveImage from './ResponsiveImage'
// const AboutUs = () => {
//   return (
//     <>
     
//       <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        
//         <div className="absolute inset-0 z-0">
//           {/* <picture>
//             <source 
//               media="(max-width: 640px)" 
//               srcSet="HOE/BGtext.png" 
//               className="w-full h-full object-cover object-center"
//             />
//             <source 
//               media="(min-width: 641px) and (max-width: 1024px)" 
//               srcSet="HOE/BGtext.png" 
//               className="w-full h-full object-cover object-center"
//             />
//             <img
//               src="HOE/BGtext.png"
//               alt="Scenic View"
//               className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
//             />
//           </picture> */}
        
//       <ResponsiveImage 
//         src="HOE/BGtext.png" 
//         alt="Responsive Image" 
//         aspectRatio={16 /12} 
//       />
//         </div>

//         <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
//           <div className="mt-[-33%] sm:mt-0 ml-[27%] sm:ml-[35%] w-full xxs:w-[70%] md:w-[50%] lg:w-[43%]  bg-white/80 backdrop-blur-sm rounded-lg pt-1 xs:pt-0 sm:p-6 lg:p-8 xl:p-8">
//             {/* About Us Title */}
//             <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold  text-left mb-1 font-gotham">
//               <span className="text-[#FF000E]">About</span> <span className="text-black">us</span>
//             </h1>

//             {/* About Us Description */}
//             <p className="text-[10px] sm:text-[15px] font-normal text-black leading-tight text-justify">
//               House of Elaan is a diversified conglomerate that specializes in multiple 
//               sectors including construction, sales and marketing, IT, and architecture. 
//               We are committed to providing financial and legal services that meet 
//               international standards. Our unique ability to integrate local expertise with 
//               global best practices makes us a one-stop solution for our clients.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default AboutUs