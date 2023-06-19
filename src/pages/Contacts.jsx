import React from 'react';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Page404 from "./404";

const Contacts = () => {
    return (
        <div className="container">
            <NavBar/>
            <h2>Contacts</h2>
                <Page404/>
            <Footer/>
        </div>
    );
};

export default Contacts;