import React from 'react';
import Banner from "../components/Banner";
import BrandInfo from "../components/BrandInfo";
import Tabs from "../components/Tabs";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="container">
            <NavBar/>
            <Banner/>
            <BrandInfo/>
            <Tabs/>
            <About/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;