import React from 'react'
import Layout from './Layout/Layout'

const Mission = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source 
            media="(max-width: 640px)" 
            srcSet="HOE/Our Mission.jpg"
            className="w-full h-full object-cover object-center"
          />
          <source
            media="(max-width: 1024px)" 
            srcSet="HOE/Our Mission.jpg"
            className="w-full h-full object-cover object-center"
          />
          <img 
            src="HOE/Our Mission.jpg"  
            alt="Scenic View" 
            className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </picture>
      </div>

      {/* Mission Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="mr-auto w-full xxs:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 xl:p-10 mt-[10%]">
          {/* Mission Title */}
          <h2 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-gotham">
            Our <span className="text-white">Mission</span>
          </h2>

          {/* Mission Description */}
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify font-gotham">
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