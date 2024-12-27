import React from 'react';
// import '../index.css';
const Orbit = () => {
  return (
    <div 
      id="gallery-section" 
      className="max-w-full min-h-screen bg-[#FF0000] flex justify-center items-center relative overflow-hidden px-4 py-8"
    >
      <div className="container relative w-full max-w-[1000px] aspect-square mx-auto">
        {/* Central Logo */}
        <div className="center-logo absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[20%] aspect-square">
      <img 
        src="images/HOE.png" 
        alt="Center Logo" 
        className="w-full h-full rounded-full object-cover animate-zoom-pulse"
      />
    </div>
  
     
        <div className="orbit orbit-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white/40 rounded-full z-0 w-[20%] aspect-square"></div>
        <div className="orbit orbit-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white/40 rounded-full z-0 w-[40%] aspect-square"></div>
        <div className="orbit orbit-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white/40 rounded-full z-0 w-[60%] aspect-square"></div>
        <div className="orbit orbit-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white/40 rounded-full z-0 w-[80%] aspect-square"></div>
  
        {/* Responsive Circles with Animations */}
        {circleData.map((circle, index) => (
          <CircleItem 
            key={index} 
            className={circle.className} 
            href={circle.href} 
            src={circle.src} 
            alt={circle.alt} 
          />
        ))}
      </div>
    </div>
  );
};
  
const CircleItem = ({ className, href, src, alt }) => {
  return (
    <div 
      className={`
        circle ${className} 
        w-[10%] aspect-square
        bg-white rounded-full 
        flex justify-center items-center 
        cursor-pointer 
        group 
        transition-all duration-300 
        hover:scale-110 
        animate-float
      `}
    >
      <a 
        href={href} 
        className="w-full h-full flex justify-center items-center"
      >
        <img 
          src={src} 
          alt={alt} 
          className="
            w-full h-full 
            rounded-full 
            object-cover 
            transform 
            transition-transform 
            duration-500 
            group-hover:scale-125 
            animate-zoom
          "
        />
      </a>
    </div>
  );
};

const circleData = [
  { className: "circle1 absolute top-[40%] right-[-2%]", href: "#production", src: "images/Production.png", alt: "Production Logo" },
  { className: "circle2 absolute top-[20%] left-[60%]", href: "#kreator", src: "images/Kreators.png", alt: "Kreator Logo" },
  { className: "circle3 absolute bottom-[15%] left-[70%]", href: "#elaan-consultancy", src: "images/Elaan Consultancy.png", alt: "Elaan Consultancy Logo" },
  { className: "circle4 absolute top-1/2 left-[16%]", href: "#cl-section", src: "images/C&L.png", alt: "C&L Logo" },
  { className: "circle5 absolute bottom-[10%] left-[5%]", href: "#dynamic", src: "images/Dynamics.png", alt: "Dynamics Logo" },
  { className: "circle6 absolute bottom-[33%] right-[30%]", href: "#elaan-recerch", src: "images/ERC.png", alt: "ERC Logo" },
  { className: "circle7 absolute bottom-[20%] left-[30%]", href: "#etc-section", src: "images/ETC.png", alt: "ETC Logo" },
  { className: "circle8 absolute top-[33%] left-[30%]", href: "#investo", src: "images/Investo.png", alt: "Investo Logo" },
  { className: "circle10 absolute top-[15%] left-[18%]", href: "#Elan-company", src: "images/Elaan.png", alt: "Elaan Logo" },
];
const additionalStyles = `
  @keyframes zoom-pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  .animate-zoom-pulse {
    animation: zoom-pulse 3s ease-in-out infinite;
  }
`;

export default Orbit;
