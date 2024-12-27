import React, { useState, useRef } from 'react';

const Elaanpage = () => {
    const [activeImage, setActiveImage] = useState("HOE/Elaan-marketing-BG-2.jpg");
    const [selectedImage, setSelectedImage] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
    const imageRefs = useRef({});

    const images = [
        "HOE/GRC-1920x1080.jpg", 
        "HOE/Islamabad-Square-1920x1080.jpg", 
        "HOE/TCT-Elevation-1080x1920.jpg", 
        "HOE/The-Magnus-Mall-1920x1080.jpg"
    ];

    const contentData = {
        "HOE/GRC-1920x1080.jpg": {
            logo: "logos/GRC.png",
            text: "Welcome to GRC, a development crafted to bring together modern living and thriving commercial opportunities. Our residential apartments combine comfort, luxury, and everyday convenience, while our dedicated retail spaces provide the perfect platform for businesses to flourish all in one prime, carefully planned location. Our residential apartments are meticulously crafted to offer the perfect balance of comfort, luxury, and practicality. With spacious layouts, high-quality finishes, and state-of-the-art amenities, every detail has been designed to elevate your everyday living experience. The development spans, floors, dedicated to upscale residential apartments and floors exclusively for premium retail and commercial spaces. Whether you're an entrepreneur seeking the perfect storefront or a family looking for a home in a vibrant community, GRC caters to your needs. Step into a lifestyle where convenience and elegance converge, and let GRC become the foundation of your next great opportunity. Here, every moment feels like a step towards something extraordinary."
        },
        "HOE/Islamabad-Square-1920x1080.jpg": {
            logo: "logos/Islamabad-Square.png",
            text: "Islamabad Square represents a new pinnacle of modern living, offering elegant apartments and a lifestyle that seamlessly blends luxury, comfort, and convenience. It's more than just a residence it's a rare opportunity to secure your future with a sound and rewarding investment. Nestled in the heart of B-17, Islamabad Square is a private apartment complex that opens the door to an urban sanctuary. Its prime location, contemporary architecture, and thoughtfully designed interiors set a new standard for sophisticated living. With spacious floor plans, world-class amenities, and unmatched connectivity, Islamabad Square redefines what it means to live well. Here, you're not just investing in property you're investing in endless possibilities. Maximize your returns, secure your future, and experience the financial freedom you've always envisioned."
        },
        "HOE/TCT-Elevation-1080x1920.jpg": {
            logo: "logos/Twin-Cty-Towers.png",
            text: "Elaan Marketing is proud to unveil a future landmark in Faisal Town, Islamabad the magnificent Twin City Towers. Spanning an impressive 10.5 kanals with 24 floors, this extraordinary development combines luxury living with vibrant commercial opportunities, setting a new standard for urban excellence. This stunning project offers a unique blend of residential and commercial spaces, featuring three towers with a variety of 1, 2, 3, and 4-bedroom luxury apartments. Designed to be affordable and budget-friendly, each apartment is equipped with modern amenities, ensuring a comfortable and sophisticated lifestyle. Located in the heart of Faisal Town F-18, Islamabad, Twin City Towers promises unmatched convenience and accessibility. The meticulously designed shops and a vibrant food court, along with premium features such as swimming pools, a fun house corner, a bowling alley, ample parking, a cinema, and fine-dining restaurants, create an unparalleled living and business experience. With easy installment plans starting from just 30% and a flexible 4-year payment schedule, Twin City Towers makes owning your dream property an achievable reality."
        },
        "HOE/The-Magnus-Mall-1920x1080.jpg": {
            logo: "logos/The-Magnus-Mall-.png",
            text: "The Magnus Mall is a true masterpiece of modern architecture, rising 26 floors above the vibrant skyline of Gulberg Greens, Islamabad. Its iconic design and commanding presence are a testament to luxury, innovation, and elegance, making it a landmark unlike any other in the city. Perfectly situated in the heart of Gulberg Greens, this prime location offers unmatched accessibility and prestige. Investors can look forward to exceptional returns and strong capital growth, backed by a track record of successful, approved projects that inspire trust and confidence. Every corner of The Magnus Mall has been thoughtfully designed to offer an unparalleled experience. From stylish, well-crafted shops and a lively food court to an array of world-class features, it's a destination that goes beyond expectations. Enjoy amenities like luxurious swimming pools, a fun house for families, a state-of-the-art bowling alley, ample parking, a cutting-edge cinema, premium hotels, fine-dining restaurants, and the thrilling experience of a skywalk. Flexible installment plans starting from as low as 30%, owning a part of The Magnus Mall has never been easier. It's more than an investment; it's your gateway to a lifestyle defined by sophistication and opportunity."
        },
    };

    const handleImageClick = (image, event) => {
        if (isAnimating) return;

        const clickedImage = event.target;
        const rect = clickedImage.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        setClickPosition({ x: xPercent, y: yPercent });
        setSelectedImage(image);
        setIsAnimating(true);

        setTimeout(() => {
            setActiveImage(image);
            setSelectedImage(null);
            setIsAnimating(false);
        }, 1000);
    };

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <div className="absolute inset-0 transition-transform duration-500">
                <img 
                    src={activeImage}  
                    alt="Scenic View" 
                    className="w-full h-full object-cover" 
                />
            </div>

            <div id="Elan-company" className="relative flex items-center justify-center">
                <div className="container mx-auto px-4 py-6 max-w-screen-xl">
                    <div className="flex flex-wrap bg-opacity-70 p-4 md:p-10 rounded-lg">
                        <div className="w-full md:w-2/3 flex flex-wrap items-end justify-end relative order-2 md:order-1">
                            <div className="flex gap-4 justify-center sm:justify-end flex-wrap">
                                {images.map((image, index) => (
                                    image !== activeImage && (
                                        <img 
                                            key={index} 
                                            src={image} 
                                            alt={`Image ${index + 1}`} 
                                            ref={(el) => imageRefs.current[image] = el}
                                            className={`w-full sm:w-[calc(33%-1rem)] md:w-[calc(25%-1rem)] object-cover cursor-pointer transition-transform duration-300 hover:scale-105 
                                                ${selectedImage === image && isAnimating 
                                                    ? 'absolute inset-0 w-full h-full z-50' 
                                                    : 'relative'}`}
                                            style={
                                                selectedImage === image && isAnimating 
                                                    ? { transformOrigin: `${clickPosition.x}% ${clickPosition.y}%`, animation: 'spinGrow 1s ease-in-out forwards' } 
                                                    : {}
                                            }
                                            onClick={(e) => handleImageClick(image, e)} 
                                        />
                                    )
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 flex items-start mb-10 md:mb-5 order-1 md:order-2">
                            <div className="pl-0 md:pl-6">
                                <img 
                                    src={contentData[activeImage]?.logo || "logos/Vector Smart Object.png"} 
                                    alt="Logo" 
                                    className={`${activeImage === "HOE/Elaan-marketing-BG-2.jpg" ? 'w-48 h-20 my-10 mx-auto md:mx-2' : 'w-32 h-32 my-10 mx-auto md:mx-2 bg-white/50 backdrop-blur-xs'} `} 
                                />
                                <p className={`text-normal leading-normal w-full text-justify ${activeImage === "HOE/Elaan-marketing-BG-2.jpg" ? 'text-white' : 'text-black bg-white/50 backdrop-blur-xs p-4'}`}>
                                    {contentData[activeImage]?.text || "Elaan Marketing stands as a premier real estate marketing firm with a diverse portfolio of ongoing projects spanning Islamabad and other key cities across Pakistan. Specializing in both residential and commercial properties, we offer a comprehensive suite of services aimed at connecting buyers with the most promising real estate opportunities in the region. Our expertise extends from high-rise developments to expansive residential communities, each carefully curated to meet the specific needs and aspirations of our diverse clients. With a strong commitment to integrity, innovation, and excellence, Elaan Marketing serves as a trusted partner in navigating Pakistan's dynamic real estate landscape."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes spinGrow {
                    0% {
                        transform: rotate(0deg) scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: rotate(360deg) scale(15);
                        opacity: 0;
                    }
                }

                img {
                    aspect-ratio: 16/9;
                }

                @media (max-width: 640px) {
                    img {
                        aspect-ratio: 4/3;
                        margin-bottom: 1rem;
                    }
                }

                @media (max-width: 480px) {
                    img {
                        aspect-ratio: 1/1;
                    }
                }
            `}</style>
        </div>
    );
};

export default Elaanpage;