import React from 'react'

const OurCoreValue = () => {
  const coreValues = [
    {
      icon: "images/Quality.png",
      title: "QUALITY",
      description: "Our commitment to world-class service makes us a market leader.",
    },
    {
      icon: "images/Innovation.png",
      title: "INNOVATION",
      description: "We continually adapt to meet the modern demands of our clients.",
    },
    {
      icon: "images/Trust & Integrity.png",
      title: "TRUST & INTEGRITY",
      description: "Upholding ethical standards fosters customer trust.",
    },
    {
      icon: "images/Retention.png",
      title: "RETENTION",
      description: "We aim for continuous development and an exceptional onboard experience.",
    },
    {
      icon: "images/Teamwork.png",
      title: "TEAMWORK",
      description: "Our team's collaboration and mutual support drive innovative solutions.",
    }
  ];

  return (
    <div className="py-16 text-center w-full bg-white min-h-screen flex flex-col justify-center items-center">
      <header className="mb-10">
        <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          OUR <span className="text-red-600 block font-bold">CORE VALUES</span>
        </h1>
      </header>
      
      <section className="flex flex-wrap w-full justify-center items-center gap-4 px-4 pt-10">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center w-[45%] sm:w-[30%] lg:w-[16%] h-full 
              ${value.title === "TRUST & INTEGRITY" ? "mt-6 xs:mt-0 xs:mb-0 xl:mb-6" : ""} 
              ${value.title === "RETENTION" ? "mt-6 sm:mt-0 lg:mt-6" : ""}`}
          >
            <div
              className="flex justify-center items-center rounded-full mb-4 w-20 h-20 sm:w-24 sm:h-24"
              style={{ minHeight: '80px' }}
            >
              <img
                src={value.icon}
                alt={`${value.title} Icon`}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-red-600 mb-3">
              {value.title}
            </h3>
            <p className="text-black text-[10px] md:text-[15px] w-full grow overflow-hidden">
              {value.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default OurCoreValue