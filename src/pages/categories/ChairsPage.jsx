import React from 'react';
import chairs from "../../assets/data/chairs";
import ProductCard from "../../components/ProductCard";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import {Link} from "react-router-dom";

const ChairsPage = () => {
    return (
        <div className="container">
            <NavBar/>
            <Link to={`/furniture`}><button className="productPage__goBackButton" type={"button"}>Go back</button></Link>
            <div className="category__productList">
                    {chairs.map(item => (
                        <div className="productPage__outer">
                            <ProductCard key={item.id} item = {item}/>
                        </div>
                    ))}
                </div>
            <Footer/>
        </div>
    );
};

export default ChairsPage;