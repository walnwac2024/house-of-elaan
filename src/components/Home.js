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
        <div className="absolute inset-0 animate-zoom-in">
          <img 
            src="hoe/HOELogo.JPG" 
            alt="Scenic View" 
            className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
          />
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


