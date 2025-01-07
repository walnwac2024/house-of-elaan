import React from 'react'

const Vision = () => {
  return (
    <div className="relative pl-5 sm:ml-20 pt-10 pb-8 sm:pt-48 sm:pb-48 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
      <picture>
        <img 
          src="HOE/Our Vision.jpg"  
          alt="Scenic View" 
          className="w-full h-full object-contain object-center"
        />
      </picture>
    </div>
      {/* Background Image */}
      {/* <div className="absolute inset-0 z-0">
        <picture>
          <source 
            media="(max-width: 640px)" 
            srcSet="HOE/Our Vision.jpg"
            className="w-full h-full object-cover object-center"
          />
          <source 
            media="(max-width: 1024px)" 
            srcSet="HOE/Our Vision.jpg"
            className="w-full h-full object-cover object-center"
          />
          <img 
            src="HOE/Our Vision.jpg"  
            alt="Scenic View" 
            className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </picture>
      </div> */}

      {/* Vision Content */}
      <div className="relative z-10 w-full  sm:px-6 lg:px-8 pt-[-20%] sm:pl-[5%]">
        <div className=" w-[50%] bg-white/60 backdrop-blur-sm rounded-lg sm:p-0 lg:p-8 xl:p-10 mt-[-0%]">
          {/* Vision Title */}
          <h2 className="text-base xs:text-base sm:text-lg md:text-2xl lg:text-3xl font-bold mb-1 text-black mt-[-10%]">
            Our <span className="text-red-600">Vision</span>
          </h2>

          {/* Vision Description */}
          <p className="text-[10px] md:text-[15px] font-normal leading-tight text-justify">
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