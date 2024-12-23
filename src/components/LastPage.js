// import React from 'react'

// const LastPage = () => {
//     return (
//         <div class="relative w-full h-screen overflow-hidden">
//         <div class="absolute inset-0 animate-zoom-in">
//           <picture>
//             <source 
//               media="(max-width: 640px)" 
//               srcset="HOE/BGtext.PNG"
//               class="w-full h-full object-cover object-center"
//             />
//             <source 
//               media="(max-width: 1024px)" 
//               srcset="HOE/BGtext.PNG"
//               class="w-full h-full object-cover object-center"
//             />
//             <img 
//               src="HOE/BGtext.PNG"  
//               alt="Scenic View" 
//               class="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
//             />
//           </picture>
//         </div>
//       </div>
//       )
// }

// export default LastPage
import React from 'react'
import Layout from './Layout/Layout'

const LastPage = () => {
  return (
    <>
     
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <picture>
            <source 
              media="(max-width: 640px)" 
              srcSet="HOE/BGtext.png" 
              className="w-full h-full object-cover object-center"
            />
            <source 
              media="(min-width: 641px) and (max-width: 1024px)" 
              srcSet="HOE/BGtext.png" 
              className="w-full h-full object-cover object-center"
            />
            <img
              src="HOE/BGtext.png"
              alt="Scenic View"
              className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </picture>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="ml-[27%] sm:ml-[35%] w-full xxs:w-2/3 md:w-[60%] lg:w-[50%] xl:w-[46%] bg-white/80 backdrop-blur-sm rounded-lg p-4 xxs:pt-10 xs:pt-0 sm:p-6 lg:p-8 xl:p-8">
            {/* About Us Title */}
            <h3 className="text-base sm:text-xl md:text-3xl lg:text-4xl  leading-normal font-extra-bold  text-left mb-0 pt-8 sm:pt-4 md:pt-0 sm:mb-0">
              <span className="text-[#E62E2D]">HOUSE OF ELAAN IS
MORE THAN A
GROUP OF COMPANIES</span> 
            </h3>

            {/* About Us Description */}
            <p className="text-sm sm:text-sm md:text-base lg:text-lg text-black leading-normal text-justify font-gotham">
            IT IS A REVOLUTION IN MODERN BUSINESS SOLUTIONS.
            WE INVITE YOU TO BE PART OF OUR JOURNEY TOWARDS
            </p>
            <h2 className=" xxs:text-base sm:text-xl md:text-3xl lg:text-4xl xl:text-4xl font-extra-bold text-left mb-4 sm:mb-6 leading-normal font-gotham">
              <span className="text-[#E62E2D]">CREATING A BETTER
              FUTURE FOR ALL.</span> 
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default LastPage
