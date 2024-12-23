import React from 'react'
import Layout from './Layout/Layout'
import ResponsiveImage from './ResponsiveImage'

const Mission = () => {
  return (
    <div className="relative bg-[#FF000E] overflow-hidden pt-8 pb-8 sm:pt-48 sm:pb-48">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ml-22 sm:ml-0">
      <picture>
        <img 
          src="HOE/Our Mission.jpg"  
          alt="Scenic View" 
          className="w-full h-full object-contain object-center"
        />
      </picture>
    </div>

      {/* <div className="absolute inset-0 z-0">
          <ResponsiveImage
            src="HOE/Our Mission.jpg"
            alt="Responsive Image"
            aspectRatio={16 / 9} // Adjusted aspect ratio for better responsiveness
          />
        </div> */}

      {/* Mission Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="w-[50%] xs:w-[50%] sm:w-[40%] rounded-lg xs:p-4 sm:p-6 lg:p-8 xl:p-10 sm:ml-[10%] xs:ml-0 ml-[10%]">
          {/* Mission Title */}
          <h2 className="text-base xs:text-base sm:text-lg md:text-2xl lg:text-3xl font-bold mb-1 font-gotham">
            Our <span className="text-white">Mission</span>
          </h2>

          {/* Mission Description */}
          <p className="text-white text-[10px] md:text-[15px] leading-tight text-justify font-gotham">
            Our mission is to revolutionize modern businesses by tackling today's challenges and delivering progressive results. 
            We employ unique strategies to offer 360° solutions that meet our customer's needs. 
            Our core philosophy revolves around innovation, collaboration, and dedication to make a positive 
            impact on our employees, customers, and the world.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mission