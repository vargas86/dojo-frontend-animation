import React from 'react';
import SliderHeader from './elements/slider';
import PopularCourses from './elements/courses';
import PopularChannels from './elements/channels';
import PopularCategories from './elements/categories';
import Navbar from '../navigation/navbar';
import NavbarMobile from '../navigation/navbarMobile';
import Footer from '../footer/footer'; 
import MobileHomeHeader from '../header/mobileHomeHeader';



export default function Home() {
    return (
        <>
            <Navbar />
            <MobileHomeHeader />
            <div className="container-fluid bg-darker m-0 p-0">
                <section><SliderHeader /></section>
                    <main>
                        <div className="paralax-one m-0 d-flex">
                            <div className="col-1 d-none d-lg-block"></div>
                            <div className="col-12 col-lg-11">
                                    <section className="sticker m-0"><PopularCourses /></section>
                                    <section className="sticker m-0"><PopularChannels /></section>
                                    <section className="sticker m-0"><PopularCategories /></section>
                            </div>
                        </div>    
                    </main>
                <section className="paralax-two d-none d-md-none d-lg-blick d-xl-block m-0"></section>
                <section className="paralax-three d-none d-md-none d-lg-blick d-xl-block m-0"></section>
                <footer className="m-0 d-flex bg-darker">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-12 col-lg-11">
                        <Footer/>
                    </div>
                    
                </footer>
            </div>
            <NavbarMobile />
            
            
        </>
        
    );
}




