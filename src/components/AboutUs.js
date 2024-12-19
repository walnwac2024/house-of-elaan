import React from 'react'
import Layout from './Layout/Layout'

const AboutUs = () => {
  return (
    <>
     
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <picture>
            <source 
              media="(max-width: 640px)" 
              srcSet="/HOE /BGtext.png" 
              className="w-full h-full object-cover object-center"
            />
            <source 
              media="(min-width: 641px) and (max-width: 1024px)" 
              srcSet="/HOE /BGtext.png" 
              className="w-full h-full object-cover object-center"
            />
            <img
              src="/HOE /BGtext.png"
              alt="Scenic View"
              className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </picture>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="ml-auto w-full xxs:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 bg-white/80 backdrop-blur-sm rounded-lg p-4 xxs:pt-10 xs:pt-0 sm:p-6 lg:p-8 xl:p-8">
            {/* About Us Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left mb-4 sm:mb-6 font-gotham">
              <span className="text-red-800">About</span> <span className="text-black">Us</span>
            </h1>

            {/* About Us Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed text-justify font-gotham">
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
  )
}

export default AboutUs