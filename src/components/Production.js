import React from 'react'

const Production = () => {
    return (
        <div class="relative w-full min-h-screen overflow-hidden">
        <div class="absolute inset-0 animate-zoom-in">
          <picture>
            <source 
              media="(max-width: 640px)" 
              srcset="HOE/Elaan-Production.JPG"
              class="w-full h-full object-cover object-center"
            />
            <source 
              media="(max-width: 1024px)" 
              srcset="HOE/Elaan-Production.JPG"
              class="w-full h-full object-cover object-center"
            />
            <img 
              src="HOE/Elaan-Production.JPG"  
              alt="Scenic View" 
              class="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </picture>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-white">
                    {/* Left Section */}
                    <div>
                        <h1 className="font-bold text-4xl md:text-5xl">
                            <img 
                                src="logos/production (2).png" 
                                alt="Production Logo" 
                                className="inline-block"
                            />
                        </h1>
                        <p className="mt-4 text-lg leading-relaxed">
                            Elaan Production is a versatile media production company that not only spearheads the content creation for Elaan TV but also offers an array of production services to other organizations. With a commitment to quality, innovation, and storytelling, we serve as a creative hub that brings ideas to life. Whether it’s broadcast content for Elaan TV or bespoke production solutions for external clients, Elaan Production delivers impeccable results that captivate audiences and elevate brands.
                        </p>
                    </div>

                    {/* Right Section */}
                    <div>
                        <div className="space-y-8">
                            {/* Broadcast Production */}
                            <div className="flex items-start">
                                <img 
                                    src="logos/Broadcast-Productivity.png" 
                                    alt="Broadcast Icon" 
                                    className="w-12 h-12 mr-4"
                                />
                                <div>
                                    <h5 className="text-red-500 font-bold text-lg">BROADCAST PRODUCTION FOR ELAAN TV</h5>
                                    <p className="text-white leading-relaxed">
                                        Elaan TV, the voice of new Pakistan is a creation of Elaan Production. From Pre-Production to Post-Production, we are delivering credible and exceptional videos according to modern times.
                                    </p>
                                </div>
                            </div>

                            {/* Corporate Video Production */}
                            <div className="flex items-start">
                                <img 
                                    src="logos/CorporateVideo-Production.png" 
                                    alt="Corporate Video Icon" 
                                    className="w-12 h-12 mr-4"
                                />
                                <div>
                                    <h5 className="text-red-500 font-bold text-lg">CORPORATE VIDEO PRODUCTION</h5>
                                    <p className="text-white leading-relaxed">
                                        Representing your business in frames. Whether it’s advertising videos, commercials videos, events videos, social media videos, or promotional videos, Elaan Production provides the creation of storytelling to engage the audience and deliver high-quality work with diligence and rigor.
                                    </p>
                                </div>
                            </div>

                            {/* Live Event Coverage */}
                            <div className="flex items-start">
                                <img 
                                    src="logos/Live-Event-Coverage.png" 
                                    alt="Live Event Icon" 
                                    className="w-12 h-12 mr-4"
                                />
                                <div>
                                    <h5 className="text-red-500 font-bold text-lg">LIVE EVENT COVERAGE</h5>
                                    <p className="text-white leading-relaxed">
                                        Everyone wants to capture special occasions. Elaan Production is offering live event coverage of Weddings, Corporate Events, Seminars, and even Concerts. With a dedication to perfection, we capture every detail to make the event memorable and delightful.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
      )
}

export default Production
