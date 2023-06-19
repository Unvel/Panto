import React from 'react';
import bannerBackground from "../assets/images/bannerBackground.png"
import SearchBar from "./SearchBar";
const Banner = () => {
    return (
        <div className="container">
            <div className="banner">
                <img src={bannerBackground} alt="bannerBackground" className={"banner__background"}/>
                <h1 className="banner__title">Make Your Interior More <br/> Minimalistic & Modern</h1>
                <h3 className="banner__description">Turn your room with panto into a lot more minimalist <br/> and modern with ease and speed</h3>
                <SearchBar/>
            </div>
        </div>
    );
};

export default Banner;