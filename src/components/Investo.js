// import React from 'react'

// const Investo = () => {
//     return (
//         <div class="relative w-full h-screen overflow-hidden">
//         <div class="absolute inset-0 animate-zoom-in">
//           <picture>
//             <source 
//               media="(max-width: 640px)" 
//               srcset="HOE/Investo.JPG"
//               class="w-full h-full object-cover object-center"
//             />
//             <source 
//               media="(max-width: 1024px)" 
//               srcset="HOE/Investo.JPG"
//               class="w-full h-full object-cover object-center"
//             />
//             <img 
//               src="HOE/Investo.JPG"  
//               alt="Scenic View" 
//               class="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
//             />
//           </picture>
//         </div>
//       </div>
//       )
// }

// export default Investo

import React from 'react';

const Investo = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidde">
            {/* Background Image */}
            <div className="absolute inset-0">
                <picture>
                    <source 
                      media="(max-width: 640px)" 
                      srcSet="HOE/Investo.jpg" 
                      className="w-full h-full object-cover object-center" 
                    />
                    <source 
                      media="(max-width: 1024px)" 
                      srcSet="HOE/Investo.jpg" 
                      className="w-full h-full object-cover object-center" 
                    />
                    <img 
                      src="HOE/Investo.jpg"  
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
                        <div className="flex flex-col w-11/12 items-center">
                            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl mb-3">
                                <img 
                                    src="logos/investo (1).png" 
                                    alt="Production Logo" 
                                    className="inline-block w-50 h-50 h-auto"
                                />
                            </h1>
                            <p className="text-xs sm:text-sm md:text-base leading-relaxed md:11/12 px-14 text-justify">
                            Investo is a leading investment management company committed to delivering exceptional financial services that empower individuals and organizations 
to achieve their investment goals. With a focus on personalized solutions, we offer a range of services including Asset Management, Retirement Planning, 
and Wealth Advisory. Our team of expert advisors utilizes data-driven strategies to create effective investment portfolios, ensuring both short-term gains 
and long-term financial security.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="flex flex-col space-y-10 w-10/12">
                            {/* Broadcast Production */}
                            <div className="flex items-start">
                                <img 
                                    src="logos/Asset Management.png" 
                                    alt="Broadcast Icon" 
                                    className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 mr-3"
                                />
                                <div>
                                    <h5 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1">ASSET MANAGEMENT</h5>
                                    <p className="text-xs sm:text-sm md:text-base leading-relaxed md:w-10/12">
                                    Our Asset Management service is designed to maximize returns on your investments through strategic 
allocation across various asset classes like equities, bonds, and real estate. We take a personalized 
approach to understand your financial goals and risk tolerance, offering tailored investment solutions
                                    </p>
                                </div>
                            </div>

                            {/* Corporate Video Production */}
                            <div className="flex items-start">
                                <img 
                                    src="logos/Retirement Planning.png" 
                                    alt="Corporate Video Icon" 
                                    className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 mr-3"
                                />
                                <div>
                                    <h5 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1">RETIREMENT PLANNING</h5>
                                    <p className="text-xs sm:text-sm md:text-base leading-relaxed md:w-10/12 ">
                                    With our Retirement Planning service, we help you secure a financially stable future. 
We assess your retirement goals, current financial situation, and risk tolerance to 
develop a long-term investment strategy that ensures a comfortable retirement.
                                    </p>
                                </div>
                            </div>

                            {/* Live Event Coverage */}
                            <div className="flex items-start">
                                <img 
                                    src="logos/Wealth Advisory.png" 
                                    alt="Live Event Icon" 
                                    className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 mr-3"
                                />
                                <div>
                                    <h5 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1">WEALTH ADVISORY</h5>
                                    <p className="text-xs sm:text-sm md:text-base leading-relaxed md:w-9/12">
                                    Our Wealth Advisory service offers holistic financial planning, including estate 
planning, tax optimization, and risk management. Our advisors work closely with 
you to create a comprehensive financial plan that aligns with your life goals.
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

export default Investo;

