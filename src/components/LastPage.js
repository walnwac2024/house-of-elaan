import React from 'react'

const LastPage = () => {
    return (
        <div class="relative w-full h-screen overflow-hidden">
        <div class="absolute inset-0 animate-zoom-in">
          <picture>
            <source 
              media="(max-width: 640px)" 
              srcset="HOE/BGtext.PNG"
              class="w-full h-full object-cover object-center"
            />
            <source 
              media="(max-width: 1024px)" 
              srcset="HOE/BGtext.PNG"
              class="w-full h-full object-cover object-center"
            />
            <img 
              src="HOE/BGtext.PNG"  
              alt="Scenic View" 
              class="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </picture>
        </div>
      </div>
      )
}

export default LastPage