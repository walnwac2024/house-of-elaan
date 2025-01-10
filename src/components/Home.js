import React, { useState } from 'react';
import Layout from './Layout/Layout';
import AboutUs from './AboutUs';
import Mission from './Mission';
import Vission from './Vission';
import Aftersale from './Aftersale';
import Elaanpage from './Elaanpage';
import Orbit from './Orbit';
import ElaanConsultancy from './ElaanConsultancy';
import Kreator from './Kreator';
import Research from './Research';
import Dynamic from './Dynamic';
import Investo from './Investo';
import CAndJ from './CAndJ';
import Etc from './Etc';
import Production from './Production';
import LastPage from './LastPage';
import OurCoreValue from './OurCoreValue';

function Home () {
  return (
    <Layout>
      <div className="relative w-full h-screen overflow-hidden" id="#">
      <div className="relative h-screen w-full overflow-hidden">
      {/* Background image with zoom-in animation */}
      <div className="absolute inset-0 animate-zoom-in">
        <img 
          src="HOE/HOELogo.jpg" 
          alt="Scenic View" 
          className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      {/* Overlay image with zoom-out animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[20%] animate-zoom-out-overlay">
        <img 
          src="logos/HOE-Elaan-logo.png"
          alt="Overlay Image" 
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </div>
    </div>
      </div>

      <section id="aboutus">
        <AboutUs />
      </section>

      <section id="our-mission">
        <Mission />
      </section>

      <section id="our-vision">
        <Vission />
      </section>

      <section id="our-core-value">
        <OurCoreValue />
      </section>

      <section id="aftersale">
        <Aftersale />
      </section>

      <section id="our-companies">
      <Orbit/>
      </section>

      <section id="Elan-company">
      <Elaanpage/>
      </section>

      <section id="elaan-consultancy">
      <ElaanConsultancy/>
      </section>

      <section id="kreator">
      <Kreator/>
      </section>

      <section id="elaan-recerch">
      <Research/>
      </section>
      
      <section id="dynamic">
      <Dynamic/>
      </section>
      
      <section id="investo">
      <Investo/>
      </section>
      
      <section id="cl-section">
      <CAndJ/>
      </section>
      
      <section id="etc-section">
      <Etc/>
      </section>
      
      <section id="production">
      <Production/>
      </section>

      <section id="contact-us">
      <LastPage/>
      </section>

     

    </Layout>
  );
}

export default Home;

const style = document.createElement('style');
style.textContent = `
  @keyframes zoomIn {
    0% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes zoomOutOverlay {
    0%, 20% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
    30% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
    90% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.3);
    }
    100% {
      transform: translate(-50%, -50%) scale(1.3);
      opacity: 1;
    }
  }

  .animate-zoom-in {
    animation: zoomIn 1.5s ease-out forwards;
  }

  .animate-zoom-out-overlay {
    animation: zoomOutOverlay 4s ease-in-out forwards;
    animation-delay: 1s;
  }
`;
document.head.appendChild(style);

