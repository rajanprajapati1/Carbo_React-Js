import React, { useEffect } from 'react';
import Hero_Section from '../Components/Home/Hero_Section';
import BrandBanner from '../Components/Home/BrandBanner';
import WhyChoose from '../Components/Home/WhyChoose';
import Vehicles from '../Components/Home/Vehicles';
import Footer from '../Components/footer/Footer';
import Support from '../Components/Home/Support';
const Homepage = () => {

    return (
        <div className='Homepage'>
            <Wave2 />
            <Hero_Section />
            <BrandBanner />
            <WhyChoose />
            <Vehicles />
            <Wave />
            <Support/>
            <Footer/>
        </div>
    );
};

export default Homepage;

const Wave = () => {
    return <svg id="mid-wave" width="100%" height="100vh">

        <path className="wave2" d="M 0 0  L 0 370 S 160, 370  190 ,290    S 250, 210   360 ,250    S 600, 100   700 ,250  S 850, 200   900,230    S 1000, -100   1100 ,-200" />

    </svg>

}
const Wave2 = () => {
    return <div className="wrapper-svg">

        <svg id="bottom-wave" width="100%" height="100vh">

            <path id="wave3" d="M 0 0  L 0 155 S 200, 330  220 ,230    S 350, 190   400 ,270    S 570, 230   610 ,200  S 649, 200   740 ,280    S 1000, -70   1100 ,0" />


        </svg>



    </div>

}