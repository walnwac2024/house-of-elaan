
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
function Home (){
   
        return(
          <Layout>
       <div class="relative w-full h-screen overflow-hidden">
  <div class="absolute inset-0 animate-zoom-in">
    <img 
      src="HOE/HOELogo.JPG" 
      alt="Scenic View" 
      class="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
    />
  </div>
</div>
<AboutUs/>
<Mission/>
<Vission/>
<OurCoreValue/>
<Aftersale/>

<Orbit/>
<Elaanpage/>
<ElaanConsultancy/>
<Kreator/>
<Research/>
<Dynamic/>
<Investo/>
<CAndJ/>
<Etc/>
<Production/>
<LastPage/>
</Layout>

            
        )
}
export default Home;