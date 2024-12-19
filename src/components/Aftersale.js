
import React from 'react'

const Aftersale = () => {
  return (
    <>
     
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <picture>
            <source 
              media="(max-width: 640px)" 
              srcSet="HOE /After Sale Services.jpg" 
              className="w-full h-full object-cover object-center"
            />
            <source 
              media="(min-width: 641px) and (max-width: 1024px)" 
              srcSet="HOE /After Sale Services.jpg" 
              className="w-full h-full object-cover object-center"
            />
            <img
              src="HOE /After Sale Services.jpg"
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

