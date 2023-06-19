import React from 'react';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Page404 from "./404";

const AboutPage = () => {
    return (
        <div className="container">
            <NavBar/>
            <h2>About us</h2>
                <Page404/>
            <Footer/>
        </div>
    );
};

export default AboutPage;