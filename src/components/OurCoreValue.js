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
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          OUR <span className="text-red-600 block mt-2">CORE VALUES</span>
        </h1>
      </header>
      
      <section className="flex flex-wrap w-100 justify-center items-center gap-8 px-2 py-10">
        {coreValues.map((value, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center w-60"
          >
            <div className="flex justify-center items-center rounded-full bg-red-600 border border-black mb-4 w-24 h-24">
              <img 
                src={value.icon} 
                alt={`${value.title} Icon`} 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-red-600 mb-3">
              {value.title}
            </h3>
            <p className="text-gray-600">
              {value.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default OurCoreValue