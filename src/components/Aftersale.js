
import React from 'react'

const Aftersale = () => {
  return (
    <>
     
      <div className="relative w-full bg-[#FF000E] min-h-screen flex items-center justify-center overflow-hidden ">
      {/* <div className="absolute inset-0 z-0 pr-20 md:mr-0 ">
      <picture>
        <img 
          src="HOE/After Sale Services.jpg"  
          alt="Scenic View" 
          className="w-full object-contain object-center "
        />
         <source 
              media="(min-width: 641px) and (max-width: 1024px)" 
              srcSet="HOE/Aftersale-mobile.jpg" 
              className="w-full h-full object-cover object-center"
            />
      </picture>
    </div> */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source 
              media="(max-width: 640px)" 
              srcSet="HOE/Aftersale-mobile.jpg" 
              className="w-full h-full object-cover object-center"
            />
            <source 
              media="(min-width: 641px) and (max-width: 1024px)" 
              srcSet="HOE/After Sale Services.jpg" 
              className="w-full h-full object-cover object-center"
            />
            <img
              src="HOE/After Sale Services.jpg"
              alt="Scenic View"
              className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </picture>
        </div>

        <div className="relative z-10 w-full">
          <div className="ml-[40%] xs:ml-[45%] sm:ml-[45%] ml:ml-[42%] xl:ml-[45%] mt-[-40%] xs:mt-[-25%] sm:mt-[-19%] md:mt-[-17%] lg:mt-[-15%] w-[50%] xs:w-[45%] sm:w-[50%] md:w-[45%] lg:w-[42%] xl:w-[30%]  rounded-lg">
            {/* About Us Title */}
            <h2 className="text-xl xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-left mb-0 pt-8 sm:pt-4 md:pt-0 sm:mb-0 leading-tight">
              <span className="text-white">AFTER SALES  </span> 
              <br/>
              <span className='text-white'>SERVICES</span>
            </h2>

            {/* About Us Description */}
            <p className="text-[10px] md:text-[12px] lg:text-[15px] text-white leading-none text-justify mt-1 sm:mt-5">
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

