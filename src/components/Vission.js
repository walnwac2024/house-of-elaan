import React from 'react'

const Vision = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source 
            media="(max-width: 640px)" 
            srcSet="hoe/Our Vision.JPG"
            className="w-full h-full object-cover object-center"
          />
          <source 
            media="(max-width: 1024px)" 
            srcSet="hoe/Our Vision.JPG"
            className="w-full h-full object-cover object-center"
          />
          <img 
            src="hoe/Our Vision.JPG"  
            alt="Scenic View" 
            className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </picture>
      </div>

      {/* Vision Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="mr-auto w-1/2 xxm:w-1/4 md:w-3/5 bg-white/60 backdrop-blur-sm rounded-lg p-4 sm:p-0 lg:p-8 xl:p-10 mt-[8%]">
          {/* Vision Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-black">
            Our <span className="text-red-600">Vision</span>
          </h2>

          {/* Vision Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify">
            We aspire to be the leading company in Islamabad and across the nation. 
            Our focus is to excel in every facet of our business operations, including client satisfaction, 
            team development, and profitability. Our aim is to maintain the highest quality standards 
            and deliver unparalleled services in real estate, consultancy, sales & marketing, architecture, 
            IT solutions, and media services.
          </p>
        </div>
      </div>
    </div>
  )
} 

export default Vision