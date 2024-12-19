import React from 'react';

const Production = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidde">
            {/* Background Image */}
            <div className="absolute inset-0">
                <picture>
                    <source 
                      media="(max-width: 640px)" 
                      srcSet="logos/Elaan-Production.JPG" 
                      className="w-full h-full object-cover object-center" 
                    />
                    <source 
                      media="(max-width: 1024px)" 
                      srcSet="logos/Elaan-Production.JPG" 
                      className="w-full h-full object-cover object-center" 
                    />
                    <img 
                      src="logos/Elaan-Production.JPG"  
                      alt="Scenic View" 
                      className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105" 
                    />
                </picture>
            </div>
            
            {/* Content Overlay */}
            <div className="relative z-10 bg-opacity-50 flex items-center pt-12 pb-8">
                <div className="w-full lg:10/12 px-4 sm:px-6 md:px-8 lg:px-16 text-white">
                    <div className="flex flex-col space-y-6">
                        {/* Left Section */}
                        <div className="flex flex-col w-11/12">
                            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl mb-3">
                                <img 
                                    src="logos/production (2).png" 
                                    alt="Production Logo" 
                                    className="inline-block max-w-full h-auto"
                                />
                            </h1>
                            <p className="text-xs sm:text-sm md:text-base leading-relaxed md:11/12">
                                Elaan Production is a versatile media production company that not only spearheads the content creation for Elaan TV but also offers an array of production services to other organizations. With a commitment to quality, innovation, and storytelling, we serve as a creative hub that brings ideas to life. Whether it’s broadcast content for Elaan TV or bespoke production solutions for external clients, Elaan Production delivers impeccable results that captivate audiences and elevate brands.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="flex flex-col space-y-10 w-10/12">
                            {/* Broadcast Production */}
                            <div className="flex items-start">
                                <img 
                                    src="logos/Broadcast-Productivity.png" 
                                    alt="Broadcast Icon" 
                                    className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 mr-3"
                                />
                                <div>
                                    <h5 className="text-red-500 font-bold text-sm sm:text-base md:text-lg mb-1">BROADCAST PRODUCTION FOR ELAAN TV</h5>
                                    <p className="text-xs sm:text-sm md:text-base leading-relaxed md:w-10/12">
                                        Elaan TV, the voice of new Pakistan is a creation of Elaan Production. From Pre-Production to Post-Production, we are delivering credible and exceptional videos according to modern times.
                                    </p>
                                </div>
                            </div>

                            {/* Corporate Video Production */}
                            <div className="flex items-start">
                                <img 
                                    src="logos/CorporateVideo-Production.png" 
                                    alt="Corporate Video Icon" 
                                    className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 mr-3"
                                />
                                <div>
                                    <h5 className="text-red-500 font-bold text-sm sm:text-base md:text-lg mb-1">CORPORATE VIDEO PRODUCTION</h5>
                                    <p className="text-xs sm:text-sm md:text-base leading-relaxed md:w-10/12 ">
                                        Representing your business in frames. Whether it’s advertising videos, commercials videos, events videos, social media videos, or promotional videos, Elaan Production provides the creation of storytelling to engage the audience and deliver high-quality work with diligence and rigor.
                                    </p>
                                </div>
                            </div>

                            {/* Live Event Coverage */}
                            <div className="flex items-start">
                                <img 
                                    src="logos/Live-Event-Coverage.png" 
                                    alt="Live Event Icon" 
                                    className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 mr-3"
                                />
                                <div>
                                    <h5 className="text-red-500 font-bold text-sm sm:text-base md:text-lg mb-1">LIVE EVENT COVERAGE</h5>
                                    <p className="text-xs sm:text-sm md:text-base leading-relaxed md:w-10/12">
                                        Everyone wants to capture special occasions. Elaan Production is offering live event coverage of Weddings, Corporate Events, Seminars, and even Concerts. With a dedication to perfection, we capture every detail to make the event memorable and delightful.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Production;
